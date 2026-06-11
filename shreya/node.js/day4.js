// EXPRESS.JS CRUD API PRACTICE
const express = require("express");
const app = express();
app.use(express.json());
// Custom Middleware
app.use((req, res, next) => {
  console.log("API Called:", req.method);
  next();
});
// Product Data
let products = [
  { id: 1, item: "Laptop", price: 50000 },
  { id: 2, item: "Phone", price: 20000 }
];
// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Express.js");
});
// GET All Products
app.get("/products", (req, res) => {
  res.status(200).json({
    success: true,
    products
  });
});
// POST Product
app.post("/products", (req, res) => {
  const product = {
    id: Date.now(),
    item: req.body.item,
    price: req.body.price
  };
  products.push(product);
  res.status(201).json({
    message: "Product Added",
    product
  });
});
// UPDATE Product
app.put("/products/:id", (req, res) => {
  const product = products.find(
    p => p.id == req.params.id
  );
  if (!product) {
    return res.status(404).json({
      message: "Product Not Found"
    });
  }
  product.item = req.body.item;
  product.price = req.body.price;
  res.status(200).json({
    message: "Product Updated",
    product
  });
});
// DELETE Product
app.delete("/products/:id", (req, res) => {
  products = products.filter(
    p => p.id != req.params.id
  );
  res.status(200).json({
    message: "Product Removed"
  });
});
// Start Server
app.listen(5000, () => {
  console.log("Server Started on Port 5000");
});