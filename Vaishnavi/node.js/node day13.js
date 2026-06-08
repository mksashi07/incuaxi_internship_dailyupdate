//WebSocket is a communication protocol that provides full-duplex (two-way) communication between a client and a server over a single TCP connection.
//server.js
 const WebSocket = require("ws");

const server = new WebSocket.Server({
  port: 3000
});

console.log("WebSocket Server Running on Port 3000");

server.on("connection", (socket) => {

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

//client.js
const WebSocket = require("ws");

const client = new WebSocket("ws://localhost:3000");

client.on("open", () => {
  console.log("Connected");

  client.send("Hello Server");
});

client.on("message", (data) => {
  console.log(data.toString());
});

//Testing is the process of verifying that software works correctly and produces the expected results
//Unit Testing Example
//calculator.js
function add(a, b) {
  return a + b;
}

module.exports = add;

//calculator.test.js
const add = require("./calculator");

test("adds 5 + 5 = 10", () => {
  expect(add(5, 5)).toBe(10);
});

//Multiple Test Cases Example
function multiply(a, b) {
  return a * b;
}

module.exports = multiply;

//multiply.test.js
const multiply = require("./multiply");

test("2 * 5 = 10", () => {
  expect(multiply(2, 5)).toBe(10);
});

test("3 * 4 = 12", () => {
  expect(multiply(3, 4)).toBe(12);
});

//Deployment is the process of making an application available for users by hosting it on a server.
//app.js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Node.js Application Running");
});

app.listen(3000, () => {
  console.log("Server Started");
});

//Production Port Configuration
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Production Server");
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

//Microservices Architecture is a software design approach where an application is divided into small, independent services.
//User Service Example
//user-service.js
const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Mounika"
    }
  ]);
});

app.listen(3001, () => {
  console.log("User Service Running");
});

//Product Service Example
//product-service.js
const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  res.json([
    {
      id: 101,
      product: "Laptop"
    }
  ]);
});

app.listen(3002, () => {
  console.log("Product Service Running");
});