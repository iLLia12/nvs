'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TaskLists', [{
        name: 'List 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'List 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'List 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'List 4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'List 5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'List 6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'List 7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'List 8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'List 9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'List 10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {}, { tasks: { type: new Sequelize.JSON() } });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TaskLists', null, {});
  }
};
