const TodoList = require("../models/todoListModel");
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
  try {
    const newTodo = await TodoList.create({ title, task });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update a todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, task } = req.body;
  try {
    const updatedTodo = await TodoList.findByIdAndUpdate(
      id,
      { title, task },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
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
