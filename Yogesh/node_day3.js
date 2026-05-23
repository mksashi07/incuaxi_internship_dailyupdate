//server creation
const http = require('http');

const myserver = http.createServer((req, res) => {
    console.log("New request received");
    res.end("Hello server");
});

myserver.listen(3000, () => console.log("Server started"));



//server req details
const http = require('http');

const myserver = http.createServer((req, res) => {
    console.log(req.headers);
    res.end("Hello server");
});

myserver.listen(3000, () => console.log("Server started"));



//creating file server and appending log to log.txt file
const http = require("http");
const fs = require("fs")

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: New Request received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        res.end("Hello from Server");
    });
});


//Creating pages in server
//creating file server and appending log to log.txt file
const http = require("http");
const fs = require("fs")

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}:${req.url}New Request received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/' : res.end("Home Page");
            break;
            case '/about' : res.end("Iam Yogesh");
            break;
            default : 
            res.end("Page Not Found");
        }
    });
});

myserver.listen(3000, () => console.log("Server started"));


//Getting responses from server what is searched
//creating file server and appending log to log.txt file
const http = require("http");
const fs = require("fs")

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}:${req.url}New Request received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        res.end("Hello from Server");
    });
});

myserver.listen(3000, () => console.log("Server started"));

myserver.listen(3000, () => console.log("Server started"));