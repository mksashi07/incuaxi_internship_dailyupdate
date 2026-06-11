
// 1. npm init -y
// 2. npm install express jsonwebtoken
// 3. node app.js

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const PORT = 3000;
const SECRET_KEY = "mysecretkey";

/* =========================================
   Sample Database
========================================= */
const users = [
  {
    id: 1,
    username: "admin",
    password: "1234",
  },
];

let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 25000 },
];

/* =========================================
   Authentication Middleware
========================================= */
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token Required",
    });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({
        message: "Invalid Token",
      });
    }

    req.user = user;
    next();
  });
}

/* =========================================
   Home Route
========================================= */
app.get("/", (req, res) => {
  res.send("REST API Server Running...");
});

/* =========================================
   Login API
========================================= */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) =>
      u.username === username &&
      u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid Credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );

  res.json({
    message: "Login Successful",
    token,
  });
});

/* =========================================
   REST API - GET All Products
========================================= */
app.get("/api/products", (req, res) => {
  res.json(products);
});

/* =========================================
   REST API - GET Product By ID
========================================= */
app.get("/api/products/:id", (req, res) => {
  const product = products.find(
    (p) => p.id === Number(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product Not Found",
    });
  }

  res.json(product);
});

/* =========================================
   REST API - CREATE Product
   Protected Route
========================================= */
app.post(
  "/api/products",
  authenticateToken,
  (req, res) => {
    const { name, price } = req.body;

    const newProduct = {
      id: products.length + 1,
      name,
      price,
    };

    products.push(newProduct);

    res.status(201).json({
      message: "Product Added",
      data: newProduct,
    });
  }
);

/* =========================================
   REST API - UPDATE Product
   Protected Route
========================================= */
app.put(
  "/api/products/:id",
  authenticateToken,
  (req, res) => {
    const product = products.find(
      (p) => p.id === Number(req.params.id)
    );

    if (!product) {
      return res.status(404).json({
        message: "Product Not Found",
      });
    }

    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;

    res.json({
      message: "Product Updated",
      data: product,
    });
  }
);

/* =========================================
   REST API - DELETE Product
   Protected Route
========================================= */
app.delete(
  "/api/products/:id",
  authenticateToken,
  (req, res) => {
    const index = products.findIndex(
      (p) => p.id === Number(req.params.id)
    );

    if (index === -1) {
      return res.status(404).json({
        message: "Product Not Found",
      });
    }

    const deletedProduct = products.splice(index, 1);

    res.json({
      message: "Product Deleted",
      data: deletedProduct,
    });
  }
);


/* =========================================
   Start Server
========================================= */
app.listen(PORT, () => {
  console.log(
    "Server Running: http://localhost:" + PORT
  );
});

