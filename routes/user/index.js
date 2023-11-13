const express = require("express");
const routes = express.Router();

//controllers
const AuthController = require("../../controllers/auth");

//Middleware
const AuthMiddleware = require("../../middlewares/userValidation");

routes.get("/", (req, res, next) => {
  res.send("Welcome to authentication routes!");
});

routes.post(
  "/register",
  [AuthMiddleware.bodyValidationRegister],
  AuthController.RegisterMongo
);

routes.post(
  "/login",
  [AuthMiddleware.bodyValidationLogin],
  AuthController.LoginMongo
);
module.exports = routes;
