const routes = require("./routes/index.js");
const sequelize = require("./services/db.js");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')


const app = express();
app.use(cors())
const port = 3333

app.use(bodyParser.json())

app.use('/api', routes.tasks);
app.use('/api', routes.taskLists);

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);