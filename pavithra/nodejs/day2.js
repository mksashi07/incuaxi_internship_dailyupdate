console.log("Start");
setTimeout(() => {
    console.log("Inside Timeout");
}, 2000);
console.log("End");
//synchronous examples
console.log("Task 0");
console.log("Task 1");
console.log("Task 2");
//asynchronous examples
console.log("Starting");
setTimeout(() => {
    console.log("Loading Data...");
}, 3000);
console.log("Ending");
//callback example
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function message() {
    console.log("Welcome to node.js");
}
greet("pavithra", message);
//callback with out
setTimeout(() => {
    console.log("Executed after 10 seconds");
}, 2000);
//promises
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
        resolve("Data Loaded Successfully");
    }
    else {
        reject("Error Loading Data");
    }
});
myPromise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});
//promise chaining
Promise.resolve(15)
.then((num) => {
    return num * 2;
})
.then((num) => {
    return num + 5;
})
.then((result) => {
    console.log(result);
});
//asyn/await
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}
async function getData() {
    let result = await fetchData();
    console.log(result);
}
getData();
//async/await with error handling
async function test() {
    try {
        let result = await Promise.resolve("Success");
        console.log(result);
    }
    catch(error) {
        console.log(error);
    }
}
test();
//const fs = require("fs");
const readStream = fs.createReadStream("demo.txt", "utf8");
readStream.on("data", (chunk) => {
    console.log(chunk);
});
//creating http server
const http = require("http");
const server = http.createServer((req, res) => {
    res.write("Welcome to Node.js");
    res.end();
});
server.listen(3000);
console.log("Server Running on Port 3000");
//http serve with routing
const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("Home Page");
    }
    else if(req.url === "/about") {
        res.write("About Page");
    }
    else {
        res.write("Page Not Found");
    }
    res.end();
});
server.listen(3000);
console.log("Server Started");

