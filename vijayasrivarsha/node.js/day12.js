
// Dependency Management Example
// Import Dependencies
const express = require("express");
const _ = require("lodash");
// Create Express App
const app = express();
app.use(express.json());
// Sample Data
const students = [
    { id: 1, name: "John", marks: 85 },
    { id: 2, name: "Alice", marks: 92 },
    { id: 3, name: "Bob", marks: 78 },
    { id: 4, name: "David", marks: 95 },
    { id: 5, name: "Emma", marks: 88 }
];
// Lodash Operations
const marks = students.map(student => student.marks);
console.log("\n===== LODASH FUNCTIONS =====");
console.log("Marks:", marks);
console.log("Maximum Marks:",
    _.max(marks)
);
console.log("Minimum Marks:",
    _.min(marks)
);
console.log("Average Marks:",
    _.mean(marks)
);
console.log("Total Marks:",
    _.sum(marks)
);
console.log("Student Names:",
    _.map(students, "name")
);
// Home Route
app.get("/", (req, res) => {
    res.send(
        "Node.js Dependency Management Demo"
    );
});
// Get All Students
app.get("/students", (req, res) => {
    res.json(students);
});
// Get Student By ID
app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(
        s => s.id === id
    );
    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }
    res.json(student);
});
// Add Student
app.post("/students", (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        marks: req.body.marks
    };
    students.push(student);
    res.status(201).json({
        message: "Student Added",
        student
    });
});
// Statistics Route
app.get("/stats", (req, res) => {
    const marks = students.map(
        student => student.marks
    );
    res.json({
        totalStudents: students.length,
        highestMarks: _.max(marks),
        lowestMarks: _.min(marks),
        averageMarks: _.mean(marks),
        totalMarks: _.sum(marks)
    });
});
// Sort Students
app.get("/sort", (req, res) => {
    const sorted = _.sortBy(
        students,
        ["marks"]
    );
    res.json(sorted);
});
// Group Example
app.get("/group", (req, res) => {
    const grouped = _.groupBy(
        students,
        student =>
            student.marks >= 90
                ? "Topper"
                : "Regular"
    );
    res.json(grouped);
});
// Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(
        `\nServer Running On Port ${PORT}`
    );
    console.log(
        `http://localhost:${PORT}`
    );
});