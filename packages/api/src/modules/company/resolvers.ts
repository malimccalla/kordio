const resolvers = {
  Query: {
    companies: () => {
      return [
        {
          id: '1',
          name: 'Acme Co',
          contactEmail: 'example@example.com',
          location: 'London, UK',
          website: 'example.com',
        },
      ];
    },
  },
};

export default resolvers;
