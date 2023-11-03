require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/user");
const Db = require("./config/mongoose");
const cors = require("cors");
const methodOverride = require("method-override");

const app = express();

// middleware
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());
app.use(methodOverride("_method"));

// routes
app.use("/api/todoList", todoRoutes);
app.use("/api/user", userRoutes);

//server connection
app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Server listening on port ${process.env.PORT}`);
});
