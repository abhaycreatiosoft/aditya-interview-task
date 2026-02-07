const express = require ("express")

const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth",require('./src/routes/auth.routes'))
app.use("/api/tasks",require('./src/routes/task.routes'))





module.exports = app;
