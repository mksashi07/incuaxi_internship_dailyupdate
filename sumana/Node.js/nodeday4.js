// EXPRESS.JS BASICS
const express = require("express");

const app = express();

app.use(express.json());

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} Request to ${req.url}`);
  next();
});

// Sample Data
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sara" }
];

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("Express Server Running");
});

// GET API
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// POST API
app.post("/users", (req, res) => {

  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);

  res.status(201).json({
    message: "User Added",
    data: newUser
  });

});

// PUT API
app.put("/users/:id", (req, res) => {

  const user = users.find(
    u => u.id == req.params.id
  );

  if (!user) {
    return res.status(404).json({
      message: "User Not Found"
    });
  }

  user.name = req.body.name;

  res.status(200).json({
    message: "User Updated",
    data: user
  });

});

// DELETE API
app.delete("/users/:id", (req, res) => {

  users = users.filter(
    u => u.id != req.params.id
  );

  res.status(200).json({
    message: "User Deleted"
  });

});

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});