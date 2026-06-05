//TOPICS COVERED:
//1. Creating Express Server
//2. Routing
//3. Route Parameters
//4. Query Parameters
//5. Middleware
//6. JSON Handling
//7. CRUD Operations
//8. Static File Serving
//9. Error Handling
//10. Simple Logging
//11. 404 Handling



const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

/*
MIDDLEWARE
*/

// Parse JSON body
app.use(express.json());

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Logger Middleware
app.use((req, res, next) => {
    console.log(
        `[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`
    );
    next();
});

/*
STATIC FILES
*/

// Create a folder named "public"
// Put HTML/CSS/JS/images inside it

app.use(express.static(path.join(__dirname, "public")));

/*
FAKE DATABASE
*/

let users = [
    { id: 1, name: "Ayesha", age: 20 },
    { id: 2, name: "Rahul", age: 22 }
];

/*
HOME ROUTE
*/

app.get("/", (req, res) => {
    res.send(`node.js `);
});

/*
GET ALL USERS
*/

app.get("/users", (req, res) => {
    res.json({
        success: true,
        total: users.length,
        data: users
    });
});

/*
GET SINGLE USER
ROUTE PARAMETER
*/

app.get("/users/:id", (req, res) => {

    const userId = Number(req.params.id);

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    res.json({
        success: true,
        data: user
    });
});

/*
SEARCH USING QUERY PARAMETER
*/

app.get("/search", (req, res) => {

    const name = req.query.name;

    const result = users.filter(user =>
        user.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json({
        success: true,
        result
    });
});

/*
CREATE NEW USER
POST REQUEST
*/

app.post("/users", (req, res) => {

    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({
            success: false,
            message: "Name and Age required"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        age
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: newUser
    });
});

/*
UPDATE USER
PUT REQUEST
*/

app.put("/users/:id", (req, res) => {

    const userId = Number(req.params.id);

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const { name, age } = req.body;

    if (name) user.name = name;
    if (age) user.age = age;

    res.json({
        success: true,
        message: "User updated",
        data: user
    });
});

/*
DELETE USER
DELETE REQUEST
*/

app.delete("/users/:id", (req, res) => {

    const userId = Number(req.params.id);

    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const deletedUser = users.splice(index, 1);

    res.json({
        success: true,
        message: "User deleted",
        data: deletedUser
    });
});

/*
CUSTOM MIDDLEWARE EXAMPLE
*/

function authMiddleware(req, res, next) {

    const token = req.headers.authorization;

    if (token === "secret123") {
        next();
    } else {
        res.status(401).json({
            success: false,
            message: "Unauthorized Access"
        });
    }
}

/*
PROTECTED ROUTE
*/

app.get("/dashboard", authMiddleware, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Dashboard"
    });
});

/*
ERROR ROUTE
*/

app.get("/error", (req, res) => {
    throw new Error("Something went wrong");
});

/*
GLOBAL ERROR HANDLER
*/

app.use((err, req, res, next) => {

    console.error("ERROR:", err.message);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

/*
404 PAGE
*/
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

/*
START SERVER
*/

app.listen(PORT, () => {
    console.log(`.... `);
});