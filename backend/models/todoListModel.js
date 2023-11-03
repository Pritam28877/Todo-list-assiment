const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoListSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todoList", todoListSchema);
