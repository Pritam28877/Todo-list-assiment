require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
const Db = require("./config/mongoose");

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/todoList", todoRoutes);

//server connection
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
