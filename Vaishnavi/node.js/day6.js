// FILE HANDLING
//FileOutputStream - fs.writeFileSync() is used to create and write data into a file.
const fs = require("fs");

let studentData =
`Name : Mounika
Course : JavaScript
College :  Ravindra Engineering College`;

fs.writeFileSync("student.txt", studentData);

console.log("Data Written Successfully");

//FileInputStream - fs.readFileSync() is used to read file content.
const fs = require("fs");

let data = fs.readFileSync("student.txt", "utf8");

console.log(data);

//BufferedWriter - fs.writeFileSync() performs similar functionality.
const fs = require("fs");

let employeeData =
`Employee ID : 175
Employee Name : Mounika
Department : Software`;

fs.writeFileSync("employee.txt", employeeData);

console.log("Employee Data Written");

//BufferedReader - it is used to read text from a file efficiently line by line.
const fs = require("fs");

let data = fs.readFileSync("employee.txt", "utf8");

console.log(data);

//File Copy - means copying content from one file to another file.
const fs = require("fs");

fs.copyFileSync("employee.txt", "copyEmployee.txt");

console.log("File Copied Successfully");

//Append Data - means adding new data to an existing file without deleting old data
const fs = require("fs");

fs.appendFileSync(
    "employee.txt",
    "\nExperience : 3 Years"
);

console.log("New Data Appended");

//Character Count - const fs = require("fs");

let data = fs.readFileSync("employee.txt", "utf8");

let characterCount = data.length;

console.log("Total Characters :", characterCount);

//Word Count - means counting total number of words present in a file.
const fs = require("fs");

let data = fs.readFileSync("employee.txt", "utf8");

let words = data.split(" ");

console.log("Total Words :", words.length);

//Line Count - means counting total number of lines present in a file.
const fs = require("fs");

let data = fs.readFileSync("employee.txt", "utf8");

let lines = data.split("\n");

console.log("Total Lines :", lines.length);

//File Information - displays details about a file like file name,size,path,creation details
 const fs = require("fs");

let stats = fs.statSync("employee.txt");

console.log("File Size :", stats.size, "bytes");

console.log("Created At :", stats.birthtime);

console.log("Last Modified :", stats.mtime);

//JAVASCRIPT I/O PROGRAM
const fs = require("fs");
// 1. Write Data
let studentData =
`Name : Mounika
Course : Node.js
Year : Final Year`;

fs.writeFileSync("student.txt", studentData);
console.log("Data Written Successfully");

// 2. Read Data
let data = fs.readFileSync("student.txt", "utf8");

console.log("\nReading File");
console.log(data);

// 3. Append Data
fs.appendFileSync(
    "student.txt",
    "\nCollege : Engineering College"
);

console.log("\nData Appended");

// 4. Copy File
fs.copyFileSync("student.txt", "copyStudent.txt");
console.log("File Copied");
// 5. Character Count
let updatedData =
    fs.readFileSync("student.txt", "utf8");

console.log(
    "\nCharacter Count :",
    updatedData.length
);

// 6. Word Count
let words = updatedData.split(" ");
console.log("Word Count :", words.length);

// 7. Line Count
let lines = updatedData.split("\n");
console.log("Line Count :", lines.length);

// 8. File Information
let stats = fs.statSync("student.txt");
console.log("\nFile Size :", stats.size);
console.log("Created At :", stats.birthtime);
console.log("Last Modified :", stats.mtime);
