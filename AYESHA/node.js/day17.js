 //  Topics Covered:
 //  1. Building Applications
 //  2. Node Frameworks
 // 3. Express.js
 // 4. Middleware Concept

 // npm install express
 // node app.js
 

const express = require("express");

const app = express();
const PORT = 3000;

/* =========================
   Middleware Examples
========================= */

// Built-in middleware
app.use(express.json());

// Custom Middleware
app.use((req, res, next) => {
    console.log(
        `[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`
    );
    next();
});

// Authentication Middleware
function authMiddleware(req, res, next) {
    const token = req.headers["token"];

    if (token === "12345") {
        next();
    } else {
        res.status(401).json({
            success: false,
            message: "Unauthorized Access"
        });
    }
}

// Request Counter Middleware
let requestCount = 0;

app.use((req, res, next) => {
    requestCount++;
    console.log(`Total Requests: ${requestCount}`);
    next();
});

/* =========================
   Routes
========================= */

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Express.js Application");
});

// About Route
app.get("/about", (req, res) => {
    res.json({
        framework: "Express.js",
        runtime: "Node.js",
        middleware: "Enabled"
    });
});

// Protected Route
app.get("/profile", authMiddleware, (req, res) => {
    res.json({
        user: "John Doe",
        role: "Developer"
    });
});

// POST Route
app.post("/user", (req, res) => {
    const user = req.body;

    res.json({
        message: "User Created",
        data: user
    });
});

// Error Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

/* =========================
   Start Server
========================= */

app.listen(PORT, () => {
    console.log(`Server Running: http://localhost:${PORT}`);
});

