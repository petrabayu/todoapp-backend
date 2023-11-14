const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

const user = mongoose.model("User", Schema);

module.exports = user;
