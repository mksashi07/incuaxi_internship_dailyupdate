// REST API DEVELOPMENT - CRUD API

const express = require("express");
const app = express();

app.use(express.json());

// Sample Database
let todos = [
  { id: 1, task: "Learn REST API" },
  { id: 2, task: "Practice CRUD" }
];

// GET API
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST API
app.post("/todos", (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT API
app.put("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);

  if (todo) {
    todo.task = req.body.task;
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo Not Found" });
  }
});

// DELETE API
app.delete("/todos/:id", (req, res) => {
  todos = todos.filter(t => t.id != req.params.id);
  res.json({ message: "Todo Deleted" });
});

// Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});