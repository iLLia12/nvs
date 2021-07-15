'use strict';
const Task = require('./task');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TaskList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Task, { onDelete: 'CASCADE' })
    }
  };
  TaskList.init({
    name: DataTypes.STRING,
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, {
    sequelize,
    modelName: 'TaskList',
  });

  return TaskList;
};