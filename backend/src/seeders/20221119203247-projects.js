module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Projects',
      [
        {
          id: 1,
          title: "Meu_Projeto1",
          zip_code: 88010400,
          cost: 9500,
          done: false,
          deadline: "2022-10-01T00:00:00.000Z",
          username:"deivid.borges",
          updated_at :"2022-11-19T20:33:36.056Z",
          created_at: "2022-11-19T20:33:36.056Z"
        },
        {
          id: 2,
          title: "Meu_Projeto2",
          zip_code: 88010400,
          cost: 8700,
          done: false,
          deadline: "2022-10-01T00:00:00.000Z",
          username:"deivid.borges",
          updated_at :"2022-11-19T20:33:36.056Z",
          created_at: "2022-11-19T20:33:36.056Z"
        },
        {
          id: 3,
          title: "Meu_Projeto1",
          zip_code: 88010400,
          cost: 9000,
          done: false,
          deadline: "2022-10-01T00:00:00.000Z",
          username:"deivid.machado",
          updated_at :"2022-11-19T20:33:36.056Z",
          created_at: "2022-11-19T20:33:36.056Z"
        },
        {
          id: 4,
          title: "Meu_Projeto2",
          zip_code: 88010400,
          cost: 19000,
          done: false,
          deadline: "2022-10-01T00:00:00.000Z",
          username:"deivid.machado",
          updated_at :"2022-11-19T20:33:36.056Z",
          created_at: "2022-11-19T20:33:36.056Z"
        },
      ],

      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Projects', null, {});
  },
};
