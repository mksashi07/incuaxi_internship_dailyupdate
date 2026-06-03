const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Yogesh",
        course: "JavaScript"
    },
    {
        id: 2,
        name: "Ravi",
        course: "NodeJS"
    }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Student Management API");
});

// Get All Students
app.get("/students", (req, res) => {
    res.status(200).json({
        totalStudents: students.length,
        data: students
    });
});

// Get Student By ID
app.get("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(
        student => student.id === id
    );

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.status(200).json({
        success: true,
        data: student
    });
});

// Search Students By Course
app.get("/search/course", (req, res) => {

    const course = req.query.course;

    const result = students.filter(
        student =>
            student.course.toLowerCase() ===
            course.toLowerCase()
    );

    res.status(200).json({
        total: result.length,
        data: result
    });
});

// Add Student
app.post("/students", (req, res) => {

    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({
            success: false,
            message: "Name and Course are required"
        });
    }

    const newStudent = {
        id: students.length + 1,
        name,
        course
    };

    students.push(newStudent);

    res.status(201).json({
        success: true,
        message: "Student Added Successfully",
        data: newStudent
    });
});

// Update Student
app.put("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(
        student => student.id === id
    );

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    student.name =
        req.body.name || student.name;

    student.course =
        req.body.course || student.course;

    res.status(200).json({
        success: true,
        message: "Student Updated Successfully",
        data: student
    });
});

// Delete Student
app.delete("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = students.findIndex(
        student => student.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    const deletedStudent =
        students[index];

    students.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Student Deleted Successfully",
        data: deletedStudent
    });
});

app.listen(PORT, () => {
    console.log(
        `Server Running at http://localhost:${PORT}`
    );
});