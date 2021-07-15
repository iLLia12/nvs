'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const amount = 24
    let tasks = []
    const ids = [1,2,3,4,5,6]
    for(let i = 0; i < amount; i++) {
      let randomId = ids[Math.floor(Math.random() * ids.length)];
      tasks.push({
        name: 'task' + i,
        isFinished: i === 11 || i === 3,
        taskListId: randomId,
        TaskListId:randomId,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    await queryInterface.bulkInsert('Tasks', tasks, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
