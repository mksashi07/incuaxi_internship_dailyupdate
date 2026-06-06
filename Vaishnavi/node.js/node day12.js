//Express.js is a fast, lightweight, and popular web framework for Node.js used to build:
//web application, backend servers
//Basic Express Server
//app.js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Express JS");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//Express Routing
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

app.listen(3000);

//Route Parameters
const express = require("express");

const app = express();

app.get("/user/:id", (req, res) => {

    const id = req.params.id;

    res.send(`User ID: ${id}`);
});

app.listen(3000);

//Query Parameters
const express = require("express");

const app = express();

app.get("/search", (req, res) => {

    const keyword = req.query.keyword;

    res.send(`Searching: ${keyword}`);
});

app.listen(3000);

//Middleware is a function that executes between request and response.
const express = require("express");

const app = express();

app.use((req, res, next) => {

    console.log("Middleware Executed");

    next();
});

app.get("/", (req, res) => {
    res.send("Home");
});

app.listen(3000);

//REST API - Representational State Transfer
// Example - Student Data
const express = require("express");

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Mounika" },
    { id: 2, name: "Ravi" }
];

app.listen(3000);

//GET API
//Fetch all students
app.get("/students", (req, res) => {

    res.json(students);

});

//GET Single Student
app.get("/students/:id", (req, res) => {

    const student = students.find(
        s => s.id == req.params.id
    );

    res.json(student);
});

//PUT API
//UPDATE STUDENT
app.put("/students/:id", (req, res) => {

    const student = students.find(
        s => s.id == req.params.id
    );

    student.name = req.body.name;

    res.json(student);
});

//DELETE API
//Delete student
app.delete("/students/:id", (req, res) => {

    students = students.filter(
        s => s.id != req.params.id
    );

    res.send("Student Deleted");
});

//Complete REST API Example
const express = require("express");

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Mounika" },
    { id: 2, name: "Ravi" }
];

// GET ALL
app.get("/students", (req, res) => {
    res.json(students);
});

// GET ONE
app.get("/students/:id", (req, res) => {

    const student = students.find(
        s => s.id == req.params.id
    );

    res.json(student);
});

// POST
app.post("/students", (req, res) => {

    const student = {
        id: students.length + 1,
        name: req.body.name
    };

    students.push(student);

    res.json(student);
});

// PUT
app.put("/students/:id", (req, res) => {

    const student = students.find(
        s => s.id == req.params.id
    );

    student.name = req.body.name;

    res.json(student);
});

// DELETE
app.delete("/students/:id", (req, res) => {

    students = students.filter(
        s => s.id != req.params.id
    );

    res.send("Student Deleted");
});

app.listen(3000, () => {
    console.log("Server Running");
});