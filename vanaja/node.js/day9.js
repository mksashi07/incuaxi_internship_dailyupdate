const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.get("/user/:id", (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.get("/search", (req, res) => {
    res.send(`Search: ${req.query.name}`);
});

app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
const express = require("express");
const app = express();

app.use(express.json());

// Logger Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Authentication Middleware
const auth = (req, res, next) => {
    const isLoggedIn = true;

    if (isLoggedIn) {
        next();
    } else {
        res.status(401).json({
            message: "Unauthorized"
        });
    }
};

// Route
app.get("/dashboard", auth, (req, res) => {
    res.json({
        message: "Welcome to Dashboard"
    });
});

// POST Route
app.post("/user", (req, res) => {
    res.json({
        received: req.body
    });
});

// Error Route
app.get("/error", (req, res) => {
    throw new Error("Custom Error");
});

// Error Middleware
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err.message
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});