const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = express();
app.use(express.json());
const PORT = 3000;
const SECRET_KEY = "mysecretkey";
// Dummy Database
let users = [];
// HOME ROUTE
app.get("/", (req, res) => {
    res.send("Node.js JWT Authentication API Running");
});
// REGISTER API
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    // Check user already exists
    const existingUser = users.find(
        user => user.username === username
    );

    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }
    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Store user
    users.push({
        username,
        password: hashedPassword
    });

    res.json({
        message: "User Registered Successfully"
    });
});
// LOGIN API
app.post("/login", async (req, res) => {

    const { username, password } = req.body;

    // Find user
    const user = users.find(
        user => user.username === username
    );

    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    // Compare password
    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid Password"
        });
    }

    // Generate JWT Token
    const token = jwt.sign(
        { username: user.username },
        SECRET_KEY,
        { expiresIn: "1h" }
    );

    res.json({
        message: "Login Successful",
        token
    });
});
// AUTHENTICATION MIDDLEWARE

function authenticateToken(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Access Denied. Token Missing"
        });
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    // Verify token
    jwt.verify(token, SECRET_KEY, (err, user) => {

        if (err) {
            return res.status(403).json({
                message: "Invalid Token"
            });
        }

        req.user = user;

        next();
    });
}
// PROTECTED ROUTE
app.get("/profile", authenticateToken, (req, res) => {

    res.json({
        message: "Protected Profile Accessed",
        user: req.user
    });
});
// SERVER
app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});