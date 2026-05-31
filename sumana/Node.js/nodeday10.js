require("dotenv").config();

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

/* 
   MIDDLEWARE CONFIGURATION
 */

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(cookieParser());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 3600000
        }
    })
);

/* 
   RATE LIMITING */

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too Many Requests"
});

app.use(limiter);

/* 
   FAKE DATABASE */

const users = [];

/*
   AUTHENTICATION MIDDLEWARE
    */

const authenticate = (req, res, next) => {

    const authHeader =
        req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token Missing"
        });
    }

    try {

        const token =
            authHeader.split(" ")[1];

        const decoded =
            jwt.verify(
                token,
                process.env.JWT_SECRET
            );

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid Token"
        });
    }
};

/* 
   AUTHORIZATION MIDDLEWARE */

const authorize = (role) => {

    return (req, res, next) => {

        if (req.user.role !== role) {

            return res.status(403).json({
                message: "Access Denied"
            });
        }

        next();
    };
};
/*
   HOME ROUTE
    */
app.get("/", (req, res) => {

    res.json({
        message:
            "Authentication & Security API"
    });
});

/*
   USER REGISTRATION
 */
app.post(
    "/register",
    async (req, res) => {

        try {

            const {
                name,
                email,
                password,
                role
            } = req.body;

            const existingUser =
                users.find(
                    user =>
                        user.email === email
                );

            if (existingUser) {

                return res.status(400).json({
                    message:
                        "User Already Exists"
                });
            }

            const hashedPassword =
                await bcrypt.hash(
                    password,
                    10
                );

            const user = {
                id: Date.now(),
                name,
                email,
                password: hashedPassword,
                role: role || "user"
            };

            users.push(user);

            res.status(201).json({
                message:
                    "Registration Successful"
            });

        } catch (error) {

            res.status(500).json({
                message:
                    error.message
            });
        }
    }
);
/* 
   USER LOGIN
 */
app.post(
    "/login",
    async (req, res) => {

        try {

            const {
                email,
                password
            } = req.body;

            const user =
                users.find(
                    user =>
                        user.email === email
                );

            if (!user) {

                return res.status(404).json({
                    message:
                        "User Not Found"
                });
            }

            const isMatch =
                await bcrypt.compare(
                    password,
                    user.password
                );

            if (!isMatch) {

                return res.status(401).json({
                    message:
                        "Invalid Password"
                });
            }

            const token =
                jwt.sign(
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

            req.session.userId =
                user.id;

            res.cookie(
                "token",
                token,
                {
                    httpOnly: true
                }
            );

            res.json({
                message:
                    "Login Successful",
                token
            });

        } catch (error) {

            res.status(500).json({
                message:
                    error.message
            });
        }
    }
);
/*
   PROFILE ROUTE
   JWT PROTECTED
 */

app.get(
    "/profile",
    authenticate,
    (req, res) => {

        res.json({
            message:
                "Profile Data",
            user: req.user
        });
    }
);
//ADMIN ROUTE
//ROLE BASED AUTHORIZATION
app.get(
    "/admin",
    authenticate,
    authorize("admin"),
    (req, res) => {

        res.json({
            message:
                "Welcome Admin"
        });
    }
);
//SESSION INFORMATION
app.get(
    "/session",
    (req, res) => {

        res.json({
            session: req.session
        });
    }
);
//ET ALL USERS
app.get(
    "/users",
    (req, res) => {

        const data =
            users.map(user => ({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }));

        res.json(data);
    }
);
//LOGOUT 
app.post(
    "/logout",
    (req, res) => {

        req.session.destroy(() => {

            res.clearCookie("token");

            res.json({
                message:
                    "Logout Successful"
            });
        });
    }
);
//SERVER
const PORT =
    process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(
        `Server Running On Port ${PORT}`
    );
});