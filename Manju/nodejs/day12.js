//Initialize a node server using http module and express module.

const http  = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send("hello Homepage");
});

app.get('/about', (req, res) => {
    return res.send("hello about page");
});


const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()} - ${req.method} - ${req.url} New Req Receieved\n`;
    const myUrl = url.parse(req.url, true);

    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                if(req.method === "GET") res.end("Homepage");
                break;
            case "/about":
                const username = myUrl.query.username;
                res.end(`Hi, ${username}`);
                break;
            case "/search":
                const search = myUrl.query.search;
                res.end("Here are your results for " + search);
            case "/signup":
                if(req.method === "GET") res.end("Signup Page");
                else if (req.method === "POST") {
                    res.end("Success");
                }
            default:
                res.end("404 Not Found");
        }           
    });
});

const myServer = http.createServer(app);

myServer.listen(3000, () => console.log("Server is running on port 3000"));