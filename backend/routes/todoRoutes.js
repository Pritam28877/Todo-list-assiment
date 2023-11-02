const express = require("express");
const router = express.Router();

//get all todos
router.get("/", (req, res) => {
  res.send("Hello World!");
});

//get a specific todo
router.get("/:id", (req, res) => {
  res.send("Hello World! 2");
});

//create a todo
router.post("/", (req, res) => {
  res.send("Hello World! 3");
});

//update a todo
router.put("/:id", (req, res) => {
  res.send("Hello World! 4");
});

//delete a todo
router.delete("/:id", (req, res) => {
  res.send("Hello World! 5");
});

module.exports = router;
