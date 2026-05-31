const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(
        `${new Date().toLocaleTimeString()} | ${req.method} | ${req.url}`
    );
    next();
});

// Home Route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Node.js Framework Learning Project"
    });
});

// Student Data
let students = [
    {
        id: 1,
        name: "Sumana",
        course: "Node.js"
    },
    {
        id: 2,
        name: "Ravi",
        course: "JavaScript"
    }
];

// Get All Students
app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// Get Single Student
app.get("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id === parseInt(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    res.status(200).json(student);
});

// Create Student
app.post("/students", (req, res) => {
    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({
            message: "Name and Course Required"
        });
    }

    const newStudent = {
        id: students.length + 1,
        name,
        course
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student Added",
        data: newStudent
    });
});

// Update Student
app.put("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id === parseInt(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    student.name = req.body.name || student.name;
    student.course = req.body.course || student.course;

    res.status(200).json({
        message: "Student Updated",
        data: student
    });
});

// Delete Student
app.delete("/students/:id", (req, res) => {
    const index = students.findIndex(
        s => s.id === parseInt(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.status(200).json({
        message: "Student Deleted",
        data: deletedStudent
    });
});

// Error Route
app.use((req, res) => {
    res.status(404).json({
        message: "Route Not Found"
    });
});

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});