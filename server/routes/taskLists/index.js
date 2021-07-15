const { Router } = require("express");
const { Task, TaskList } = require("../../models");

const router = Router();

router.get('/task-lists', (req, res) => TaskList.findAll({include: [{model: Task}]}).then(data => res.json(data)));

module.exports = router
 