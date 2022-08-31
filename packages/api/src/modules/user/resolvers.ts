import { setEngine } from 'crypto';

import { UserInputError } from 'apollo-server-express';

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
      if (!input.email) {
        throw new UserInputError('Must supply email to login');
      }

      const user = await prisma.user.findUnique({
        where: { email: input.email },
      });

      if (!user) {
        return {
          ok: false,
          errors: [{ message: 'No user found with that email', path: 'login' }],
          user: null,
        };
      }

      // Logs the user in by setting a cookie
      session.userId = user.id;

      return {
        ok: true,
        errors: null,
        user,
      };
    },
    logout: async (_, __, { session, redis }) => {
      const userId = session.userId;

      if (userId) {
        await deleteAllSessionsByUserId(userId, redis, session);

        return true;
      }

      return false;
    },
  },
};

export default resolvers;
