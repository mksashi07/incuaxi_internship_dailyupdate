// NODE.JS CORE MODULES - SINGLE FILE

// IMPORT CORE MODULES
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const os = require("os");
const url = require("url");

// HTTP MODULE
console.log("\n===== HTTP MODULE =====");
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.write("Hello from Node.js HTTP Server");
    res.end();
});
server.listen(3000, () => {
    console.log("HTTP Server Running:");
    console.log("http://localhost:3000");
});

// HTTPS MODULE
console.log("\n===== HTTPS MODULE =====");
https.get("https://jsonplaceholder.typicode.com/posts/1", (response) => {

    let data = "";

    response.on("data", (chunk) => {
        data += chunk;
    });

    response.on("end", () => {

        console.log("HTTPS Response Data:");

        const jsonData = JSON.parse(data);

        console.log(jsonData);

    });

}).on("error", (error) => {

    console.log("HTTPS Error:");
    console.log(error.message);

});

// FILE SYSTEM (fs) MODULE

console.log("\n===== FILE SYSTEM MODULE =====");
const fileName = "demo.txt";


// WRITE FILE
fs.writeFileSync(
    fileName,
    "Hello from File System Module"
);
console.log("File Created");

// READ FILE
const content = fs.readFileSync(
    fileName,
    "utf8"
);
console.log("File Content:");
console.log(content);

// APPEND FILE
fs.appendFileSync(
    fileName,
    "\nThis line is appended."
);
console.log("Data Appended");

// READ UPDATED FILE
const updatedContent = fs.readFileSync(
    fileName,
    "utf8"
);
console.log("Updated File Content:");
console.log(updatedContent);

// PATH MODULE
console.log("\n===== PATH MODULE =====");
const fullPath = path.join(
    __dirname,
    "folder",
    "sample.txt"
);
console.log("Joined Path:");
console.log(fullPath);
console.log("File Extension:");
console.log(path.extname(fullPath));
console.log("Base Name:");
console.log(path.basename(fullPath));
console.log("Directory Name:");
console.log(path.dirname(fullPath));

// OS MODULE
console.log("\n===== OS MODULE =====");
console.log("Platform:");
console.log(os.platform());
console.log("CPU Architecture:");
console.log(os.arch());
console.log("CPU Information:");
console.log(os.cpus());
console.log("Free Memory:");
console.log(os.freemem());
console.log("Total Memory:");
console.log(os.totalmem());
console.log("Home Directory:");
console.log(os.homedir());
console.log("Host Name:");
console.log(os.hostname());

// URL MODULE
console.log("\n===== URL MODULE =====");
const myURL = new URL(
    "https://example.com:8080/products?id=101&name=laptop"
);
console.log("Full URL:");
console.log(myURL.href);
console.log("Protocol:");
console.log(myURL.protocol);
console.log("Hostname:");
console.log(myURL.hostname);
console.log("Port:");
console.log(myURL.port);
console.log("Pathname:");
console.log(myURL.pathname);
console.log("Search Query:");
console.log(myURL.search);
console.log("Query Parameter id:");
console.log(myURL.searchParams.get("id"));
console.log("Query Parameter name:");
console.log(myURL.searchParams.get("name"));

// URL PARSE
console.log("\n===== URL PARSE =====");
const parsedURL = url.parse(
    "https://example.com/about?user=ayesha&age=20",
    true
);
console.log(parsedURL.href);
console.log(parsedURL.host);
console.log(parsedURL.pathname);
console.log(parsedURL.query);
console.log("User:");
console.log(parsedURL.query.user);
console.log("Age:");
console.log(parsedURL.query.age);

// END
console.log("\n===== ALL MODULES EXECUTED SUCCESSFULLY =====");