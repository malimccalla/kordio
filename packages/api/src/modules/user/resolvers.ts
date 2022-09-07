import { userInfo } from 'os';

import { UserInputError } from 'apollo-server-express';

import { verifyGoogleIdToken } from '../../services/googleAuth';
import { Resolvers } from '../../typings/types';
import { deleteAllSessionsByUserId } from '../../util/deleteAllSessionsByUserId';

const resolvers: Resolvers = {
  Query: {
    me: async (_, __, { prisma, session }) => {
      if (!session.userId) return null;

      return prisma.user.findUnique({ where: { id: session.userId } });
    },
  },
  Mutation: {
    signup: async (_, { input }, { prisma, session }) => {
      if (!input || !input.email) {
        throw new UserInputError('Invalid input values');
      }

      const user = await prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          locale: input.locale,
          givenName: input.givenName,
          familyName: input.familyName,
        },
      });

      // Logs the user in by setting a cookie
      session.userId = user.id;

      return {
        ok: true,
        user,
      };
    },
    login: async (_, { input }, { session, prisma }) => {
      const errorResponse = (path: string, message: string) => ({
        ok: false,
        errors: [{ path, message }],
        user: null,
        sessionId: null,
      });

      if (!input.idToken) {
        return errorResponse('login', 'You must supply the google tokenId');
      }

      // authenticate google login here....
      const googleId = await verifyGoogleIdToken(input.idToken);

      if (!googleId) {
        return errorResponse('login', 'No googleId found from tokenId');
      }

      const user = await prisma.user.findUnique({
        where: { email: input.email },
      });

      if (!user) {
        // User doesn't exist so create one
        try {
          const newUser = await prisma.user.create({
            data: {
              email: input.email,
              givenName: input.givenName,
              name: input.name,
              familyName: input.familyName,
              picture: input.socialProfileImageUrl,
              locale: input.locale,
              gender: input.gender,
              userSocial: {
                create: { provider: 'google', socialId: googleId },
              },
            },
          });

          session.userId = newUser.id;
        } catch (error) {
          // Something strnage happens where the prisma create tries to run twice for the same user
          // This causes it to error out due to the email unique contraint. So we catch it and do nothing..
          // TODO: Fix auth in general......
        }

        return {
          ok: true,
          errors: null,
          user,
        };
      } else {
        // Logs the user in by setting a cookie
        session.userId = user.id;

        return {
          ok: true,
          errors: null,
          user,
        };
      }
    },
    logout: async (_, __, { session, redis }) => {
      const userId = session.userId;

      if (userId) {
        await deleteAllSessionsByUserId(userId, redis, session);

        return true;
      }

      return false;
    },
    saveCompany: async (_, { input }, { session, prisma }) => {
      const errorRes = (message: string) => ({
        errors: [{ message, path: 'saveCompany' }],
        ok: false,
      });

      if (!session.userId) {
        return errorRes('You must be logged in to save a company');
      }

      if (!input.companyId) {
        return errorRes('companyId required');
      }

      const company = await prisma.company.findUnique({
        where: { id: input.companyId },
      });

      if (!company) {
        return errorRes(`Could not find company with ID: ${input.companyId}`);
      }

      const alreadySaved = await prisma.usersSavedCompanies.findUnique({
        where: {
          companyId_userId: { companyId: company.id, userId: session.userId },
        },
      });

      if (alreadySaved) {
        return errorRes('You have already saved this company');
      }

      try {
        await prisma.usersSavedCompanies.create({
          data: {
            userId: session.userId,
            companyId: company.id,
          },
        });

        return {
          ok: true,
        };
      } catch (error) {
        console.log(error);

        return errorRes('Unable to save company');
      }
    },
    unsaveCompany: async (_, { input }, { session, prisma }) => {
      const errorRes = (message: string) => ({
        errors: [{ message, path: 'unsaveCompany' }],
        ok: false,
      });

      if (!session.userId) {
        return errorRes('You must be logged in to unsave a company');
      }

      if (!input.companyId) {
        return errorRes('companyId required');
      }

      const company = await prisma.company.findUnique({
        where: { id: input.companyId },
      });

      if (!company) {
        return errorRes(`Could not find company with ID: ${input.companyId}`);
      }

      const alreadySaved = await prisma.usersSavedCompanies.findUnique({
        where: {
          companyId_userId: { companyId: company.id, userId: session.userId },
        },
      });

      if (!alreadySaved) {
        return errorRes('This company is not saved');
      }

      try {
        await prisma.usersSavedCompanies.delete({
          where: {
            companyId_userId: { companyId: company.id, userId: session.userId },
          },
        });

        return {
          ok: true,
        };
      } catch (error) {
        console.log(error);

        return errorRes('Unable to unsave company');
      }
    },
  },
  User: {
    savedCompanies: async (user, __, { prisma }) => {
      const companies = await prisma.company.findMany({
        where: { savedByUsers: { some: { userId: user.id } } },
      });

      return companies;
    },
  },
};

export default resolvers;
