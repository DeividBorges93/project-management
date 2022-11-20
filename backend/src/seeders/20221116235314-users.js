module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'deivid borges',
          username: 'deivid.borges',
          password: '$2a$08$YEwZugbzj1Rp6cDICft5SOj5KwkwpGFq/wQ92vAb0F2Yl4UTMwxh.', // minhasenha
        },
        {
          name: 'deivid machado',
          username: 'deivid.machado',
          password: '$2a$08$AIzDUCMBDX.bu6vkLSt./eDCBgwb0Kluz6FgChRx7jyvU3PZYixFa',// minhasenhaaa
        },
      ],

      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
