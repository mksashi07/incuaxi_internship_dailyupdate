
// Student Management System in JavaScript

// Using different types of variables

const collegeName = "JNTUA Engineering College";

let studentName = "Sameera";
let studentDepartment = "Computer Science";

var studentRollNo = 1024;

// Marks in different subjects
let mathMarks = 85;
let scienceMarks = 90;
let englishMarks = 88;
let programmingMarks = 95;

// Calculating total and average
let totalMarks = mathMarks + scienceMarks + englishMarks + programmingMarks;
let averageMarks = totalMarks / 4;

// Boolean variable
let isPassed = averageMarks >= 40;

// Array variable
let subjects = ["Mathematics", "Science", "English", "Programming"];

// Object variable
let studentDetails = {
    name: studentName,
    department: studentDepartment,
    rollNo: studentRollNo
};

// Displaying student details
console.log("========== STUDENT DETAILS ==========");
console.log("College Name :", collegeName);
console.log("Student Name :", studentName);
console.log("Department :", studentDepartment);
console.log("Roll Number :", studentRollNo);

console.log("\n========== SUBJECTS ==========");
for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}

console.log("\n========== MARKS ==========");
console.log("Math :", mathMarks);
console.log("Science :", scienceMarks);
console.log("English :", englishMarks);
console.log("Programming :", programmingMarks);

console.log("\n========== RESULT ==========");
console.log("Total Marks :", totalMarks);
console.log("Average Marks :", averageMarks);

if (isPassed) {
    console.log("Status : PASS");
} else {
    console.log("Status : FAIL");
}

// Function example
function greetStudent(name) {
    console.log("\nWelcome to the college, " + name + "!");
}

greetStudent(studentName);



// Printing object
console.log("\n========== OBJECT DATA ==========");
console.log(studentDetails);

