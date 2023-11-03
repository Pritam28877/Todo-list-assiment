const TodoList = require("../models/todoListModel");
const mongoose = require("mongoose");
//get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todoList = await TodoList.find();
    res.status(200).json(todoList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get a specific todo
exports.getTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ message: "No todo with that id" });
  }

  const todo = await TodoList.findById(id);

  if (!todo) {
    res.status(404).json({ message: "No todo with that id" });
  }
  res.status(200).json(todo);
};

//create a todo
exports.createTodo = async (req, res) => {
  const { title, task } = req.body;
  let errors = [];

  if (!title) {
    errors.push({ text: "Please add a title" });
  }
  if (!task) {
    errors.push({ text: "Please add a task" });
  }
  if (errors.length > 0) {
    res.status(400).json({ message: "Please fill in all the field" });
  }
  try {
    const newTodo = await TodoList.create({ title, task });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update a todo
exports.updateTodo = async (req, res) => {
  const { _id } = req.body;
  console.log(req.body);
  console.log(_id);
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const updatetodo = await TodoList.findOneAndUpdate(
    { _id: _id },
    {
      ...req.body,
    },
    { new: true } // This will return the updated document
  );
  console.log(updatetodo);
  if (!updatetodo) {
    return res.status(400).json({ error: error.message || "No such workout " });
  }

  res.status(200).json(updatetodo);
};

//delete a todo
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ message: "No todo with that id" });
  }
  try {
    await TodoList.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
