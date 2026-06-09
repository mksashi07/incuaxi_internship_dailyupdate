const WebSocket = require("ws");
const express = require("express");


// WebSocket Server
const wsServer = new WebSocket.Server({
    port: 3000
});
console.log("WebSocket Server Running on Port 3000");
wsServer.on("connection", (socket) => {
    console.log("Client Connected");
    socket.send("Welcome Client!");
    socket.on("message", (message) => {
        console.log("Received:", message.toString());
        socket.send(`Server Received: ${message}`);
    });
    socket.on("close", () => {
        console.log("Client Disconnected");
    });
});


// WebSocket Client
const client = new WebSocket("ws://localhost:3000");
client.on("open", () => {
    console.log("Connected To Server");
    client.send("Hello Server");
});
client.on("message", (data) => {
    console.log(data.toString());
});
client.on("close", () => {
    console.log("Connection Closed");
});


// Unit Testing Functions
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
console.log("Add Result:", add(5, 5));
console.log("Multiply Result:", multiply(2, 5));

// Express Application
const app = express();
app.get("/", (req, res) => {
    res.send("Node.js Application Running");
});


// User Service
app.get("/users", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Mounika"
        }
    ]);
});


// Product Service
app.get("/products", (req, res) => {
    res.json([
        {
            id: 101,
            product: "Laptop"
        }
    ]);
});


// Production Port Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});