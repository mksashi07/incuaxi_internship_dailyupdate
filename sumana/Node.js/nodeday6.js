const express = require("express");

const app = express();

app.use(express.json());

// Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// In-Memory Database
let students = [
    {
        id: 1,
        name: "Sumana",
        course: "JavaScript",
        age: 21
    },
    {
        id: 2,
        name: "Rahul",
        course: "Node.js",
        age: 22
    }
];

// Home Route
app.get("/", (req, res) => {
    res.json({
        message: "Student Management REST API Running"
    });
});

// GET All Students
app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// GET Student By ID
app.get("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    res.status(200).json(student);
});

// CREATE Student
app.post("/students", (req, res) => {

    const { name, course, age } = req.body;

    if (!name || !course || !age) {
        return res.status(400).json({
            message: "All Fields Required"
        });
    }

    const newStudent = {
        id: students.length + 1,
        name,
        course,
        age
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student Created",
        student: newStudent
    });
});

// UPDATE Student
app.put("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    const { name, course, age } = req.body;

    student.name = name || student.name;
    student.course = course || student.course;
    student.age = age || student.age;

    res.status(200).json({
        message: "Student Updated",
        student
    });
});

// DELETE Student
app.delete("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = students.findIndex(
        student => student.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.status(200).json({
        message: "Student Deleted",
        deletedStudent
    });
});

// Search Using Query Params
app.get("/search", (req, res) => {

    const course = req.query.course;

    const result = students.filter(
        student =>
            student.course.toLowerCase() ===
            course.toLowerCase()
    );

    res.json(result);
});

// Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});