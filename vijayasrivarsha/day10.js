//json files
[
  {
    "id": 1,
    "name": "Rahul",
    "course": "Node.js",
    "marks": 85
  },
  {
    "id": 2,
    "name": "Priya",
    "course": "React",
    "marks": 90
  }
]
const fs = require("fs");

console.log("===== JSON FILE OPERATIONS =====");

// 1. Read JSON File
const data = fs.readFileSync("students.json", "utf8");
const students = JSON.parse(data);

console.log("\nOriginal Data:");
console.log(students);

// 2. Display Students
console.log("\nStudent Details:");

students.forEach(student => {
    console.log(`
ID      : ${student.id}
Name    : ${student.name}
Course  : ${student.course}
Marks   : ${student.marks}
-------------------------
`);
});

// 3. Add New Student
const newStudent = {
    id: 3,
    name: "Kiran",
    course: "Java",
    marks: 88
};

students.push(newStudent);

console.log("\nNew Student Added");

// 4. Find Student
const foundStudent = students.find(
    student => student.id === 2
);

console.log("\nFound Student:");
console.log(foundStudent);

// 5. Update Student Marks
students.forEach(student => {
    if (student.id === 1) {
        student.marks = 95;
    }
});

console.log("\nMarks Updated");

// 6. Delete Student
const updatedStudents = students.filter(
    student => student.id !== 2
);

console.log("\nStudent Deleted");

// 7. Calculate Total Marks
let totalMarks = 0;

updatedStudents.forEach(student => {
    totalMarks += student.marks;
});

console.log("\nTotal Marks:", totalMarks);

// 8. Calculate Average Marks
const averageMarks =
    totalMarks / updatedStudents.length;

console.log(
    "Average Marks:",
    averageMarks.toFixed(2)
);

// 9. Find Topper
let topper = updatedStudents[0];

updatedStudents.forEach(student => {
    if (student.marks > topper.marks) {
        topper = student;
    }
});

console.log("\nTopper:");
console.log(topper);

// 10. Save Updated Data Back to JSON File
fs.writeFileSync(
    "students.json",
    JSON.stringify(updatedStudents, null, 2)
);

console.log("\nUpdated Data Saved Successfully");

// 11. Read Updated File Again
const finalData = fs.readFileSync(
    "students.json",
    "utf8"
);

const finalStudents = JSON.parse(finalData);

console.log("\nFinal JSON Data:");
console.log(finalStudents);

console.log("\n PROGRAM COMPLETED ");