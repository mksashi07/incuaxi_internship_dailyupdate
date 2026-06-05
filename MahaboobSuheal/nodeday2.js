const http = require("http");

const myServer = http.createServer((req, res) => {
    console.log("New Req Rec.");
    res.end("Hello From Server");
});

myServer.listen(8000, () => console.log("server started!"));


// file handling 

const fs = require("fs");

fs.writeFile("sample.txt", "Hello, this is my first file!", (err) => {
    if (err) {
        console.log("Error creating file");
    } else {
        console.log("File created successfully");
    }
});