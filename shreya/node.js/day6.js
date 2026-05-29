// NODE.JS PATH MODULE
const path = require("path");
// basename()
// Returns file name
let fileName = path.basename(
    "C:/users/node/app.js"
);
console.log("Basename:", fileName);
// dirname()
// Returns directory name
let dirName = path.dirname(
    "C:/users/node/app.js"
);
console.log("Directory:", dirName);
// extname()
// Returns file extension
let extension = path.extname(
    "app.js"
);
console.log("Extension:", extension);
// join()
// Joins paths together
let fullPath = path.join(
    "users",
    "shreya",
    "files",
    "demo.txt"
);
console.log("Joined Path:", fullPath);
// parse()
// Returns object of path details
let parsedPath = path.parse(
    "C:/users/node/app.js"
);
console.log(parsedPath);
// resolve()
// Creates absolute path
let absolutePath = path.resolve(
    "demo",
    "test.js"
);
console.log("Absolute Path:", absolutePath);
// NODE.JS OS MODULE
const os = require("os");
// platform()
// Operating system platform
console.log(
    "Platform:",
    os.platform()
);
// arch()
// CPU architecture
console.log(
    "Architecture:",
    os.arch()
);
// cpus()
// CPU information
console.log(
    "CPU Info:",
    os.cpus()[0].model
);
// freemem()
// Free memory
console.log(
    "Free Memory:",
    os.freemem()
);
// totalmem()
// Total memory
console.log(
    "Total Memory:",
    os.totalmem()
);
// hostname()
// Computer hostname
console.log(
    "Host Name:",
    os.hostname()
);
// homedir()
// Home directory
console.log(
    "Home Directory:",
    os.homedir()
);
// uptime()
// System uptime
console.log(
    "System Uptime:",
    os.uptime()
);
// userInfo()
// Current user information
console.log(
    "User Info:",
    os.userInfo()
);
// NODE.JS URL MODULE
const url = require("url");
// parse()
// Parses URL into object
let website = 
"url://localhost:3000/products?id=101";
let parsedURL = url.parse(
    website,
    true
);
console.log(parsedURL);
// hostname
console.log(
    "Host:",
    parsedURL.hostname
);
// pathname
console.log(
    "Path Name:",
    parsedURL.pathname
);
// query parameters
console.log(
    "Query Data:",
    parsedURL.query
);
// format()
// Converts object to URL
let urlObject = {
    protocol: "https",
    host: "example.com",
    pathname: "/about",
    query: {
        id: 1,
        name: "Shreya"
    }
};
let formattedURL = url.format(
    urlObject
);
console.log(
    "Formatted URL:",
    formattedURL
);
// URL CLASS
const myURL = new URL(
    "https://example.com/users?id=10"
);
console.log(
    "Protocol:",
    myURL.protocol
);
console.log(
    "Host:",
    myURL.host
);
console.log(
    "Pathname:",
    myURL.pathname
);
console.log(
    "Search Params:",
    myURL.searchParams.get("id")
);