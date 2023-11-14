const express = require("express");
const app = express();
app.use(express.json());

const Cryptr = require("cryptr");
const CryptrNew = new Cryptr("secretkey");

const JWT = require("jsonwebtoken");
const UserModels = require("../models/schema/user");

async function RegisterMongo(req, res, next) {
  const { username, password, email } = req.body;

  try {
    let getUsers = await UserModels.findOne({
      username: username,
    });

    if (getUsers) {
      res.status(400).send({
        message: "Data is exists, please create another one!",
        statusCode: 400,
      });
    } else {
      let dataPassingToDB = {
        username: username,
        password: CryptrNew.encrypt(password),
        email: email,
      };

      let createdData = await UserModels.create(dataPassingToDB);

      if (!createdData) {
        res.status(400).send({
          message: "username or password are wrong",
          statusCode: 400,
        });
      } else {
        res.send({
          message: "Succesfull to create data users",
          statusCode: 200,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400);
  }
}

async function LoginMongo(req, res, next) {
  const { username, password } = req.body;

  // Get Users exist
  try {
    let getUsers = await UserModels.aggregate([
      {
        $match: {
          $or: [{ username: username }, { password: password }],
        },
      },
    ]);

    if (!getUsers) {
      res.status(400).send({
        message: "Data is not existed",
        statusCode: 400,
      });
    } else {
      let passwordUser = CryptrNew.decrypt(getUsers.dataValues.password);
    }
    if (!getUsers) {
      res.status(400).send({
        message: "Data is not existed",
        statusCode: 400,
      });
    } else {
      let passwordUser = CryptrNew.decrypt(getUsers.dataValues.password);

      if (req.body.password !== passwordUser) {
        res.status(400).send({
          message: "username or password are wrong",
          statusCode: 400,
        });
      } else {
        let expiredToken = Math.floor(Date.now() / 1000) + 60 * 60;
        let createAccessToken = JWT.sign(
          {
            exp: expiredToken,
            data: {
              user: getUsers.dataValues.username,
              email: getUsers.dataValues.email,
              no: getUsers.dataValues.id,
            },
          },
          "secretkey"
        );
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400);
  }
}

module.exports = {
  RegisterMongo,
  LoginMongo,
};
