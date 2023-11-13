const express = require("express");
const routes = express.Router();

//Routes
const UserRoutes = require("./user/index");
// const TodoRoutes = require("./todo/index");

routes.get("/", (req, res, next) => {
  res.send("Welcome to api v1 routes!");
});

routes.use("/auth", UserRoutes);
// routes.use("/article", TodoRoutes);

// const { verifyToken, verifyJWTToken } = require("../middlewares/JWT");
// routes.get("/articles", [verifyToken, verifyJWTToken], (req, res) => {
//   res.send("welcome to api articles");
// });

module.exports = routes;

// NO USE ANYMORE
