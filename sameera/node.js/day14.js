//express.js
//Hello World Server
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.listen(3000, () => {
    console.log("Server Running");
});

//Route Parameters
const express = require("express");

const app = express();

app.get("/student/:name", (req, res) => {

    const name = req.params.name;

    res.send(`Welcome ${name}`);

});

app.listen(3000);

//Query Parameters

const express = require("express");

const app = express();

app.get("/search", (req, res) => {

    const course = req.query.course;

    res.send(`Course: ${course}`);

});

app.listen(3000);

//POST Request

const express = require("express");

const app = express();

app.use(express.json());

app.post("/student", (req, res) => {

    console.log(req.body);

    res.send("Student Added");

});

app.listen(3000);
//Middleware Example
const express = require("express");

const app = express();

app.use((req, res, next) => {

    console.log(
        `${req.method} ${req.url}`
    );

    next();

});

app.get("/", (req, res) => {

    res.send("Home Page");

});

app.listen(3000);
//Student CRUD API
const express = require("express");

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Sameera" },
    { id: 2, name: "Ravi" }
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.post("/students", (req, res) => {

    students.push(req.body);

    res.json({
        message: "Student Added"
    });

});

app.put("/students/:id", (req, res) => {

    const student =
        students.find(
            s => s.id ==
            req.params.id
        );

    if(student){
        student.name =
            req.body.name;
    }

    res.json(student);

});

app.delete("/students/:id", (req, res) => {

    students =
        students.filter(
            s =>
            s.id != req.params.id
        );

    res.json({
        message: "Deleted"
    });

});

app.listen(3000);
