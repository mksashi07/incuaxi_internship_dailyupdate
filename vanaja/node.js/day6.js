// IMPORT PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const app = express();
// MIDDLEWARE
app.use(express.json());
// CONNECT TO MONGODB

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// CREATE SCHEMA
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});
// CREATE MODEL

const Student = mongoose.model("Student", studentSchema);
// HOME ROUTE

app.get("/", (req, res) => {
    res.send("Student API Running");
});
// CREATE DATA (POST)

app.post("/students", async (req, res) => {

    try {

        const newStudent = new Student({
            name: req.body.name,
            age: req.body.age,
            course: req.body.course
        });

        const savedStudent = await newStudent.save();

        res.json(savedStudent);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }

});
// READ DATA (GET)

app.get("/students", async (req, res) => {

    try {

        const students = await Student.find();

        res.json(students);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }

});
// UPDATE DATA (PUT)
app.put("/students/:id", async (req, res) => {

    try {

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                age: req.body.age,
                course: req.body.course
            },
            { new: true }
        );

        res.json(updatedStudent);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }

});
// DELETE DATA (DELETE)
app.delete("/students/:id", async (req, res) => {

    try {

        await Student.findByIdAndDelete(req.params.id);

        res.json({ message: "Student Deleted" });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }

});
// START SERVER
app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});