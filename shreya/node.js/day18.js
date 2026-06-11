// Import Express
const express = require("express");

// Create app
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Port
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("🚀 Node.js server is running!");
});

// Sample GET API
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from Node.js API",
    status: "success",
  });
});

// POST API example
app.post("/api/data", (req, res) => {
  const data = req.body;

  res.json({
    message: "Data received successfully",
    yourData: data,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});