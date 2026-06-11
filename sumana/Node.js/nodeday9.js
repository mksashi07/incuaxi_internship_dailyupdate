require("dotenv").config();

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests. Try again later."
});

app.use(limiter);

const users = [];


//REGISTER USER

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = users.find(
            user => user.email === email
        );

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(
            password,
            10
        );

        const user = {
            id: Date.now(),
            name,
            email,
            password: hashedPassword,
            role: "user"
        };

        users.push(user);

        res.status(201).json({
            message: "Registration Successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});



//LOGIN USER


app.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = users.find(
            user => user.email === email
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Credentials"
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({
            message: "Login Successful",
            token
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

//AUTH MIDDLEWARE

function authenticate(req, res, next) {

    const authHeader =
        req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token Missing"
        });
    }

    const token =
        authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(403).json({
            message: "Invalid Token"
        });
    }
}


//ROLE AUTHORIZATION

function authorize(role) {

    return (req, res, next) => {

        if (req.user.role !== role) {
            return res.status(403).json({
                message: "Access Denied"
            });
        }

        next();
    };
}

//PROTECTED ROUTE

app.get(
    "/profile",
    authenticate,
    (req, res) => {

        res.json({
            message: "Protected Route Accessed",
            user: req.user
        });
    }
);


//ADMIN ROUTE


app.get(
    "/admin",
    authenticate,
    authorize("admin"),
    (req, res) => {

        res.json({
            message: "Welcome Admin"
        });
    }
);


//GET USERS


app.get("/users", (req, res) => {

    const safeUsers = users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    }));

    res.json(safeUsers);
});

//SERVER


const PORT =
    process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});