const express = require("express");
const todoList = require("../models/todoListModel");
const {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoListController");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();


// require auth for all workout routes
router.use(requireAuth)

//get all todos
router.get("/", getAllTodos);

//get a specific todo
router.get("/:id", getTodo);

//create a todo
router.post("/", createTodo);

//update a todo
router.put("/:id", updateTodo);

//delete a todo
router.delete("/:id", deleteTodo);

module.exports = router;
