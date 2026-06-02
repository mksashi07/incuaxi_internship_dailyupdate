// 1. HTTP MODULE
const http = require("http");

// 2. HTTPS MODULE
const https = require("https");

// 3. FILE SYSTEM MODULE
const fs = require("fs");

// 4. PATH MODULE
const path = require("path");

// 5. OS MODULE
const os = require("os");

// 6. URL MODULE
const url = require("url");


//HTTP MODULE
console.log("\n HTTP MODULE");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Node.js HTTP Server Running");
});
server.listen(3000, () => {
    console.log("Server Running at http://localhost:3000");
});


//HTTPS MODULE
console.log("\n HTTPS MODULE");
https.get("https://jsonplaceholder.typicode.com/users/1", (res) => {
    let data = "";
    res.on("data", (chunk) => {
        data += chunk;
    });
    res.on("end", () => {
        const user = JSON.parse(data);
        console.log("User Name:", user.name);
        console.log("Email:", user.email);
    });
}).on("error", (err) => {
    console.log("Error:", err.message);
});


//FILE SYSTEM MODULE
console.log("\n===== FILE SYSTEM MODULE =====");
const file = "data.txt";

// Write File
fs.writeFileSync(
    file,
    "Node.js Core Modules"
);
console.log("File Created");

// Read File
let content = fs.readFileSync(
    file,
    "utf8"
);
console.log(content);

// Append File
fs.appendFileSync(
    file,
    "\nLearning FS Module"
);
console.log("Data Appended");

// Read Updated File
content = fs.readFileSync(
    file,
    "utf8"
);
console.log(content);


//PATH MODULE
console.log("\n===== PATH MODULE =====");
const myPath = path.join(
    __dirname,
    "folder",
    "sample.txt"
);
console.log("Path:", myPath);
console.log("Extension:", path.extname(myPath));
console.log("Base Name:", path.basename(myPath));
console.log("Directory:", path.dirname(myPath));


//OS MODULE
console.log("\n===== OS MODULE =====");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Host:", os.hostname());
console.log("Home Directory:", os.homedir());
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());


//URL MODULE
console.log("\n===== URL MODULE =====");
const website = new URL(
    "https://example.com:8080/products?id=101&name=laptop"
);
console.log("URL:", website.href);
console.log("Protocol:", website.protocol);
console.log("Host:", website.hostname);
console.log("Port:", website.port);
console.log("Path:", website.pathname);
console.log("Search:", website.search);
console.log("ID:", website.searchParams.get("id"));
console.log("Name:", website.searchParams.get("name"));


//URL PARSE MODULE
console.log("\n===== URL PARSE MODULE =====");
const parsed = url.parse(
    "https://mysite.com/profile?user=surya&course=nodejs",
    true
);
console.log("Full URL:", parsed.href);
console.log("Host:", parsed.host);
console.log("Path:", parsed.pathname);
console.log("Query:", parsed.query);
console.log("User:", parsed.query.user);
console.log("Course:", parsed.query.course);

//EXTRA OS METHODS 
console.log("\n===== EXTRA OS METHODS =====");
console.log("OS Type:", os.type());
console.log("CPU Count:", os.cpus().length);


//EXTRA PATH METHODS
console.log("\n===== EXTRA PATH METHODS =====");
console.log("File Name:", path.parse(myPath).name);
console.log("Root:", path.parse(myPath).root);


//FILE EXISTENCE CHECK
console.log("\n===== FILE EXISTENCE CHECK =====");
console.log("File Exists:", fs.existsSync(file));


//END OF PROGRAM
console.log(
    "\n===== NODE.JS CORE MODULES EXECUTED SUCCESSFULLY ====="
);