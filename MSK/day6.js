// Student Grade Analyzer

// Array of student objects
const students = [
    { name: "MSK", marks: 85 },
    { name: "Yogi", marks: 92 },
    { name: "Kamalesh", marks: 67 },
    { name: "Hemanth", marks: 74 },
    { name: "Arjun", marks: 58 }
];


// Function to calculate grade
function calculateGrade(marks) {

    if (marks >= 90) {
        return "A";
    } 
    
    else if (marks >= 75) {
        return "B";
    } 
    
    else if (marks >= 60) {
        return "C";
    } 
    
    else {
        return "D";
    }
}


// Arrow function to check pass/fail
const isPassed = (marks) => {
    return marks >= 60;
};


// Function to display student report
function generateReport(studentArray) {

    console.log("----- Student Report -----");

    studentArray.forEach(function(student) {

        const grade = calculateGrade(student.marks);

        const status = isPassed(student.marks)
            ? "Passed"
            : "Failed";

        console.log(`
Name   : ${student.name}
Marks  : ${student.marks}
Grade  : ${grade}
Status : ${status}
-------------------------
`);
    });
}


// Function call
generateReport(students);