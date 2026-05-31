require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;

// Fake database
const users = [];
// HOME ROUTE
app.get("/", (req, res) => {
    res.send("Node.js API Running...");
});
// REGISTER API
app.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        users.push({
            username,
            password: hashedPassword,
        });

        res.json({
            message: "User Registered Successfully",
        });

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});
// LOGIN API WITH JWT
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = users.find(u => u.username === username);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found",
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Password",
            });
        }

        // Create JWT Token
        const token = jwt.sign(
            { username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login Successful",
            token,
        });

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});
// PROTECTED ROUTE
app.get("/dashboard", authenticateToken, (req, res) => {
    res.json({
        message: "Welcome to Dashboard",
        user: req.user,
    });
});
// JWT MIDDLEWARE
function authenticateToken(req, res, next) {

    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Token Required",
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

        if (err) {
            return res.status(403).json({
                message: "Invalid Token",
            });
        }

        req.user = user;

        next();
    });
}
// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});