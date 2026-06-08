// PACKAGE.JSON INFORMATION
const packageInfo = {
    name: "node-demo-project",
    version: "1.0.0",
    description: "Package.json and NPM Scripts Demo",
    main: "app.js",
    author: "Student",
    license: "MIT",
    scripts: {
        start: "node app.js",
        dev: "node app.js",
        test: "node app.js"
    }
};
console.log("Project Name :", packageInfo.name);
console.log("Version      :", packageInfo.version);
console.log("Description  :", packageInfo.description);
console.log("Main File    :", packageInfo.main);
console.log("Author       :", packageInfo.author);
console.log("License      :", packageInfo.license);
// NPM SCRIPTS
for (let script in packageInfo.scripts) {
    console.log(
        script + " --> " + packageInfo.scripts[script]
    );
}
// PROCESS MODULE
console.log("Node Version :", process.version);
console.log("Platform     :", process.platform);
console.log("Architecture :", process.arch);
console.log("Process ID   :", process.pid);
// OS MODULE
const os = require("os");
console.log("OS Type       :", os.type());
console.log("Hostname      :", os.hostname());
console.log("Home Directory:", os.homedir());
console.log(
    "Total Memory  :",
    Math.round(os.totalmem() / 1024 / 1024),
    "MB"
);
console.log(
    "Free Memory   :",
    Math.round(os.freemem() / 1024 / 1024),
    "MB"
);
// PATH MODULE
const path = require("path");
console.log("Filename  :", path.basename(__filename));
console.log("Directory :", path.dirname(__filename));
console.log("Extension :", path.extname(__filename));
// FILE SYSTEM MODULE
const fs = require("fs");
fs.writeFileSync(
    "sample.txt",
    "Welcome To Node.js"
);
console.log("File Created");
const fileData =
    fs.readFileSync(
        "sample.txt",
        "utf8"
    );
console.log("File Content:");
console.log(fileData);
// ARRAY EXAMPLE
let marks = [80, 90, 70, 85, 95];
console.log("Marks :", marks);
let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}
console.log("Total :", total);
let average = total / marks.length;
console.log("Average :", average);
// OBJECT EXAMPLE
let student = {
    id: 101,
    name: "Shreya",
    course: "Node.js"
};
console.log(student);
console.log("ID     :", student.id);
console.log("Name   :", student.name);
console.log("Course :", student.course);
// DATE & TIME
let now = new Date();
console.log("Current Date :", now);
console.log("Year   :", now.getFullYear());
console.log("Month  :", now.getMonth() + 1);
console.log("Date   :", now.getDate());
console.log("Hour   :", now.getHours());
console.log("Minute :", now.getMinutes());
console.log("Second :", now.getSeconds());
let count = 0;
let timer = setInterval(() => {
    count++;
    console.log(
        "Counter Value :",
        count
    )
    if (count === 5) {
        clearInterval(timer);
        console.log(
            "\nInterval Stopped"
        );
        summary();
    }
}, 1000);
