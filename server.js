const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(
    "Welcome to the todo backedn app. use /auth to login-register. use /todo to make your todo list"
  );
});

const ConnectionMongoDB = require("./models/ConnectionMongoDB");
ConnectionMongoDB();

//Routes
const Routes = require("./routes/user/index");
app.use("/auth", Routes);

const TodoItemRoute = require("./routes/todo/index");
app.use("/todo", TodoItemRoute);
