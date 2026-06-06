const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Yogesh",
        course: "Node.js"
    },
    {
        id: 2,
        name: "Ravi",
        course: "JavaScript"
    }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Student Management API");
});

// Get All Students
app.get("/students", (req, res) => {
    res.json(students);
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

    res.json(student);
});

// Add Student
app.post("/students", (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student Added Successfully",
        student: newStudent
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

    res.json({
        message: "Student Updated Successfully",
        student
    });
});

// Delete Student
app.delete("/students/:id", (req, res) => {

    students = students.filter(
        s => s.id !== parseInt(req.params.id)
    );

    res.json({
        message: "Student Deleted Successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


/* output: GET http://localhost:3000/student
displays: Welcome to Student Management API

GET http://localhost:3000/students
displays: [
  {
    "id": 1,
    "name": "Yogesh",
    "course": "Node.js"
  },
  {
    "id": 2,
    "name": "Ravi",
    "course": "JavaScript"
  }
]
           

POST http://localhost:3000/students
Body: {
    "name": "Rahul",
    "course": "Express.js"
}
displays:
{
  "message": "Student Added Successfully",
  "student": {
    "id": 3,
    "name": "Rahul",
    "course": "Express.js"
  }
} */