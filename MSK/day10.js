const students = [
    { name: "Ram", marks: 85 },
    { name: "Sita", marks: 92 },
    { name: "John", marks: 70 },
    { name: "Alice", marks: 95 }
];

// Get student names
const names = students.map(student => student.name);

// Students with marks above 80
const toppers = students.filter(student => student.marks > 80);

// Total marks
const totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
);

// Average marks
const average = totalMarks / students.length;

console.log("Names:", names);
console.log("Toppers:", toppers);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", average);