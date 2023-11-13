const mongoose = require("mongoose");

const url = process.env.DB_CONNECT;

const ConnectionDB = async () => {
  try {
    const Connect = await mongoose.connect(url);
    console.log(`Mongo Connected : ${Connect.connection.host}`);
  } catch (error) {
    console.log(error);
    // process.exit(1)
  }
};

module.exports = ConnectionDB;
