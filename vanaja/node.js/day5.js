// USING CUSTOM MODULE
const math = require('./math');
console.log("Addition:", math.add(10, 5));
console.log("Subtraction:", math.subtract(10, 5));
//  CRUD OPERATIONS WITH FILES
const fs = require('fs');
// CREATE
fs.writeFileSync('data.txt', 'Hello Node.js');
// READ
const data = fs.readFileSync('data.txt', 'utf8');
console.log("File Data:", data);
// UPDATE
fs.appendFileSync('data.txt', '\nThis is updated content');
// DELETE
// Uncomment to delete file
// fs.unlinkSync('data.txt');
// CREATING HTTP SERVER
const http = require('http');
const basicServer = http.createServer((req, res) => {
    res.write("Basic HTTP Server Running");
    res.end();
});
// basicServer.listen(3000);
// EXPRESS.JS INTRODUCTION
// Install Express First
// npm install express
const express = require('express');
const app = express();
// MIDDLEWARE
// Middleware runs before routes
app.use((req, res, next) => {
    console.log("Middleware Executed");
    console.log("Request Method:", req.method);
    next();
});
// SENDING JSON DATA
// Built-in middleware for JSON
app.use(express.json());
// ROUTING
// Home Route
app.get('/', (req, res) => {
    res.send("Welcome to Home Page");
});
// About Route
app.get('/about', (req, res) => {
    res.send("About Page");
});
// REST API BASICS
// Sample Data
let users = [
    { id: 1, name: "Vishnu" },
    { id: 2, name: "Rahul" }
];
// GET API
app.get('/users', (req, res) => {
    res.json(users);
});
// POST API
app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json({
        message: "User Added",
        users
    });
});
// PUT API
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedName = req.body.name;
    users = users.map(user => {
        if (user.id === id) {
            user.name = updatedName;
        }
        return user;
    });
    res.json({
        message: "User Updated",
        users
    });
});
// DELETE API
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.json({
        message: "User Deleted",
        users
    });
});
// START SERVER
app.listen(5000, () => {

    console.log("Express Server Running on Port 5000");
});