const mongoose = require("mongoose");

const TodoItemSchema = new mongoose.Schema(
  {
    item: { type: String, required: true },
  },
  { timestamps: true }
);

const todo = mongoose.model("todo", TodoItemSchema);

module.exports = todo;
