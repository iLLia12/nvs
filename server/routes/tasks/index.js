const { Router } = require("express");
const sequelize = require("../../services/db")
const { Sequelize } = require("sequelize");
const Task = require("../../models/task.js")(sequelize, Sequelize.DataTypes);
const router = Router();

const getAllTasks = async () => await Task.findAll({order: [['createdAt', 'DESC']]});
const deleteTask = async (id) => await Task.destroy({ where: { id }});
const updateTask = async (req) => await Task.update(req.body,{where: {id: req.body.id}});
 
router.get('/tasks', (req, res) => getAllTasks().then(data => res.json(data)));
router.get('/tasks/:id', (req, res) => Task.findOne({ where: { id:req.params.id }}).then(data => res.send(data)));
router.post('/tasks', (req, res) => res.send(Task.create(req.body)));
router.put('/tasks/:id', (req, res) => updateTask(req).then(getAllTasks().then(data => res.send(data))));
router.delete('/tasks/:id', (req, res) => deleteTask(req.params.id).then(getAllTasks().then(data => res.send(data))));
 
module.exports = router;