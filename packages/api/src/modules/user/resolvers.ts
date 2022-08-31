import { Resolvers } from '../../typings/types';

const resolvers: Resolvers = {
  Query: {
    me: (_, __, { prisma, session }) => {
      return prisma.user.findUnique({ where: { id: session.id } });
    },
  },
};

export default resolvers;
