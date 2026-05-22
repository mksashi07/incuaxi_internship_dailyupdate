// fileSystemDemo.js

const fs = require("fs");

// Create a file synchronously
fs.writeFileSync("student.txt", "Name: Mounika\nCourse: Node.js");

console.log("student.txt created successfully");

// Append data to file
fs.appendFileSync("student.txt", "\nCity: Hyderabad");

console.log("Data appended successfully");

// Read file synchronously
const studentData = fs.readFileSync("student.txt", "utf-8");

console.log("\nFile Content:");
console.log(studentData);

// Create file asynchronously
fs.writeFile("course.txt", "JavaScript Tutorial", (err) => {
    if (err) {
        console.log("Error creating file");
    } else {
        console.log("\ncourse.txt created successfully");
    }
});

// Read file asynchronously
fs.readFile("course.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error reading file");
    } else {
        console.log("\nAsync File Content:");
        console.log(data);
    }
});

// Delete file asynchronously
fs.unlink("course.txt", (err) => {
    if (err) {
        console.log("Error deleting file");
    } else {
        console.log("\ncourse.txt deleted successfully");
    }
});