const { Router } = require("express");
const { Task, TaskList } = require("../../models");

const router = Router();

const createTaskList = async (req) => await TaskList.create(req.body);

router.get('/task-lists', (req, res) => TaskList.findAll({include: [{model: Task}]}).then(data => res.json(data)));
router.get('/task-lists/:id', (req, res) => TaskList.findOne({ where: { id:req.params.id }, include: [{model: Task}]}).then(data => res.send(data)));
router.post('/task-lists', (req, res) => createTaskList(req).then(data => res.send(data)));

module.exports = router
 