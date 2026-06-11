// REST API Design + API Authentication + Node.js with Frontend

// npm install express jsonwebtoken

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const PORT = 3000;
const SECRET_KEY = "my_secret_key";

// Sample Data
let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 25000 }
];

// =========================
// Authentication Middleware
// =========================
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Token Missing"
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({
      success: false,
      message: "Invalid Token"
    });
  }
}

// =========================
// Home Route
// =========================
app.get("/", (req, res) => {
  res.send("Node.js REST API Running");
});

// =========================
// Login API
// =========================
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123") {
    const token = jwt.sign(
      {
        username: "admin",
        role: "admin"
      },
      SECRET_KEY,
      {
        expiresIn: "1h"
      }
    );

    return res.json({
      success: true,
      token
    });
  }

  res.status(401).json({
    success: false,
    message: "Invalid Credentials"
  });
});

// =========================
// GET All Products
// =========================
app.get("/api/products", (req, res) => {
  res.json(products);
});

// =========================
// GET Product By ID
// =========================
app.get("/api/products/:id", (req, res) => {
  const product = products.find(
    p => p.id === Number(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product Not Found"
    });
  }

  res.json(product);
});

// =========================
// CREATE Product
// Protected Route
// =========================
app.post("/api/products", verifyToken, (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product Added",
    data: newProduct
  });
});

// =========================
// UPDATE Product
// Protected Route
// =========================
app.put("/api/products/:id", verifyToken, (req, res) => {
  const product = products.find(
    p => p.id === Number(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product Not Found"
    });
  }

  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;

  res.json({
    message: "Product Updated",
    data: product
  });
});

// =========================
// DELETE Product
// Protected Route
// =========================
app.delete("/api/products/:id", verifyToken, (req, res) => {
  const index = products.findIndex(
    p => p.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Product Not Found"
    });
  }

  const deleted = products.splice(index, 1);

  res.json({
    message: "Product Deleted",
    data: deleted
  });
});


// =========================
// Server Start
// =========================
app.listen(PORT, () => {
  console.log(
    "Server Running at http://localhost:" + PORT
  );
});

