//Modules - s a reusable piece of code that can be imported into other files.
//math.js
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = {
    add,
    multiply
};
//app.js
const math = require("./math");

console.log(math.add(10, 20));
console.log(math.multiply(5, 4));

//CommonJS is the traditional module system used by Node.js.
// message.js
module.exports = "Hello Node.js";

// app.js
const msg = require("./message");

console.log(msg);

//ES Modules are the modern JavaScript module system
//math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

//app.js
import { add, subtract } from "./math.js";

console.log(add(10, 5));
console.log(subtract(10, 5));

//Default Export
//user.js
export default function greet() {
    console.log("Welcome");
}

//app.js
import greet from "./user.js";

greet();

// FILE SYSTEM
//Write file - Creates a file and writes data into it. 
const fs = require("fs");

fs.writeFileSync(
  "student.txt",
  "Welcome to Node.js"
)
console.log("File Created");

//Read file - Reads data from a file.
const fs = require("fs");

const data =
  fs.readFileSync(
    "student.txt",
    "utf8"
  );

console.log(data);

//Append Data - Adds new content without deleting old content.
const fs = require("fs");

fs.appendFileSync(
  "student.txt",
  "\nLearning File System Module"
);

console.log("Data Added");

//Rename File
const fs = require("fs");

fs.renameSync(
  "student.txt",
  "data.txt"
);

console.log("File Renamed");

//Delete File
const fs = require("fs");

fs.unlinkSync("data.txt");

console.log("File Deleted");

//Delete Folder
const fs = require("fs");

fs.rmdirSync("Documents");

console.log("Folder Deleted");

// OVERALL EXAMPLE
const fs = require("fs");
const os = require("os");
const path = require("path");
const { URL } = require("url");

// OS MODUULE

const osInfo = `
Operating System : ${os.type()}
Platform         : ${os.platform()}
Architecture     : ${os.arch()}
Hostname         : ${os.hostname()}
Total Memory     : ${os.totalmem()}
Free Memory      : ${os.freemem()}
`;
// PATH MODULE
const filePath = path.join(
  __dirname,
  "systemInfo.txt"
);

console.log("File Path:");
console.log(filePath);
// FILE SYSTEM MODULE
// Create File
fs.writeFileSync(filePath, osInfo);

console.log("\nFile Created Successfully");

// Read File
const data = fs.readFileSync(
  filePath,
  "utf8"
);

console.log("\nFile Content:");
console.log(data);

// Append Data
fs.appendFileSync(
  filePath,
  "\nGenerated using Node.js Core Modules"
);

console.log("\nData Appended Successfully");
// URL MODULE
const website = new URL(
  "https://www.example.com/student?id=101&name=Ravi"
);

console.log("\nURL Information");

console.log("Full URL:");
console.log(website.href);

console.log("Hostname:");
console.log(website.hostname);

console.log("Pathname:");
console.log(website.pathname);

console.log("Student ID:");
console.log(
  website.searchParams.get("id")
);

console.log("Student Name:");
console.log(
  website.searchParams.get("name")
);
