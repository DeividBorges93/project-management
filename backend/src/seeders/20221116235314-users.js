module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Deivid Borges',
          password: 'minhasenhaaaaa',
          username: 'deivid.borges',
        },
        {
          name: 'Deivid Machado',
          password: 'minhasenhaaaaa',
          username: 'deivid.machado',
        },
      ],

      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
