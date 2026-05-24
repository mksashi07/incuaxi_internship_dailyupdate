const fs = require("fs");
const os = require("os");
const path = require("path");
const http = require("http");

// Create a file
fs.writeFileSync("student.txt", "Name: Mounika\nCourse: Node.js");

// Read file
const studentData = fs.readFileSync("student.txt", "utf-8");
console.log("Student File Data:\n", studentData);

// Append new data
fs.appendFileSync("student.txt", "\nCity: Anantapur");

// Read updated file
const updatedData = fs.readFileSync("student.txt", "utf-8");
console.log("\nUpdated File Data:\n", updatedData);

// ================= OS MODULE =================

console.log("\nOperating System:", os.type());
console.log("OS Platform:", os.platform());
console.log("Free Memory:", os.freemem());

// ================= PATH MODULE =================

const filePath = path.join(__dirname, "student.txt");

console.log("\nFile Path:", filePath);
console.log("File Extension:", path.extname(filePath));

// ================= CUSTOM FUNCTIONS =================

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

console.log("\nSubtraction:", subtract(20, 5));
console.log("Division:", divide(20, 4));


const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(`
        <h1>Welcome to Node.js Server</h1>
        <p>This is a simple HTTP server example.</p>
    `);

    res.end();
});

server.listen(4000, () => {
    console.log("\nServer running at http://localhost:4000");
});
