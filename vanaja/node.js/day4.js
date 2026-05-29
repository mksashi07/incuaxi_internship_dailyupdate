// IMPORTING MODULES
// Express package installed using npm
const express = require("express");
// Built-in modules
const path = require("path");
const os = require("os");
const fs = require("fs");
const events = require("events");
const http = require("http");
// EXPRESS APP
const app = express();
const PORT = 3000;
// BASIC ROUTE
app.get("/", (req, res) => {
    res.send("Welcome to NPM Learning Project");
});
// PATH MODULE
app.get("/path", (req, res) => {
    // Current file name
    const fileName = path.basename(__filename);
    // Current directory
    const dirName = path.dirname(__filename);
    res.send(`
        File Name: ${fileName}
        <br>
        Directory Name: ${dirName}
    `);
});
// OS MODULE
app.get("/os", (req, res) => {
    const systemInfo = {
        platform: os.platform(),
        architecture: os.arch(),
        cpuCores: os.cpus().length,
        freeMemory: os.freemem(),
        totalMemory: os.totalmem(),
        homeDirectory: os.homedir()
    };
    res.json(systemInfo);
});
// FILE SYSTEM MODULE
app.get("/create-file", (req, res) => {

    // Create file
    fs.writeFileSync(
        "sample.txt",
        "This file is created using FS module"
    );
    res.send("File Created Successfully");
});
// Read File
app.get("/read-file", (req, res) => {
    const data = fs.readFileSync(
        "sample.txt",
        "utf-8"
    );
    res.send(data);
});
// Append File
app.get("/append-file", (req, res) => {

    fs.appendFileSync(
        "sample.txt",
        "\nNew Data Added"
    );
    res.send("Data Appended");
});
// EVENTS MODULE
const eventEmitter = new events.EventEmitter();
// Create Event
eventEmitter.on("greet", () => {
    console.log("Hello Event Triggered");
});
// Trigger Event
eventEmitter.emit("greet");
// HTTP MODULE
// Create basic HTTP server
const server = http.createServer((req, res) => {

    if (req.url === "/http") {

        res.write("Hello from HTTP Module");

        res.end();
    }
});
// Run HTTP server
server.listen(4000, () => {
    console.log("HTTP Server Running on Port 4000");
});
// SIMPLE API
app.get("/students", (req, res) => {

    const students = [
        {
            id: 1,
            name: "Vishnu",
            course: "Data Science"
        },
        {
            id: 2,
            name: "Mounika",
            course: "CSE"
        }
    ];

    res.json(students);
});
// NPM PACKAGE EXAMPLE
app.get("/express", (req, res) => {
    res.send("Express Installed Using NPM");
});
// START EXPRESS SERVER
app.listen(PORT, () => {

    console.log(`Express Server Running on:
http://localhost:${PORT}`);

});