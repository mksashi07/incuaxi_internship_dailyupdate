//basic express server
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Server Running");
});
app.listen(3000, () => {
    console.log("Server Started");
});
//routing
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Home Page");
});
app.get('/about', (req, res) => {
    res.send("About Page");
});
app.get('/contact', (req, res) => {
    res.send("Contact Page");
});
app.listen(3000);
//json Api
const express = require('express');
const app = express();
app.get('/user', (req, res) => {
    res.json({
        name: "Pavithra",
        age: 21
    });
});
app.listen(3000);
//post request
const express = require('express');
const app = express();
app.use(express.json());
app.post('/login', (req, res) => {
    const data = req.body;
    res.send(`Welcome ${data.username}`);
});
app.listen(3000);
//middle ware
const express = require('express');
const app = express();
const logger = (req, res, next) => {
    console.log("Middleware Running");
    next();
};
app.use(logger);
app.get('/', (req, res) => {
    res.send("Home");
});
app.listen(3000);
//dynamic route
const express = require('express');
const app = express();
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});
app.listen(3000);
//login api
const express = require('express');
const app = express();
app.use(express.json());
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if(username === "admin" && password === "1234") {
        res.send("Login Successful");
    } else {
        res.send("Invalid Credentials");
    }
});
app.listen(3000);
//crud api
const express = require('express');
const app = express();
app.use(express.json());
let students = [];
app.post('/add', (req, res) => {
    students.push(req.body);
    res.send("Student Added");
});
app.get('/students', (req, res) => {
    res.json(students);
});
app.listen(3000);
//simple calculater api
const express = require('express');
const app = express();
app.get('/add/:a/:b', (req, res) => {
    let num1 = Number(req.params.a);
    let num2 = Number(req.params.b);
    let result = num1 + num2;
    res.send(`Addition: ${result}`);
});
app.listen(3000);
//product api
const express = require('express');
const app = express();
const products = [
    { id: 1, product: "Laptop", price: 50000 },
    { id: 2, product: "Mobile", price: 20000 }
];
app.get('/products', (req, res) => {
    res.json(products);
});
app.listen(3000);
//basic express server
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Server Running");
});
app.listen(3000, () => {
    console.log("Server Started");
});
//routing
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Home Page");
});
app.get('/about', (req, res) => {
    res.send("About Page");
});
app.get('/contact', (req, res) => {
    res.send("Contact Page");
});
app.listen(3000);
//json Api
const express = require('express');
const app = express();
app.get('/user', (req, res) => {
    res.json({
        name: "Pavithra",
        age: 21
    });
});
app.listen(3000);
//post request
const express = require('express');
const app = express();
app.use(express.json());
app.post('/login', (req, res) => {
    const data = req.body;
    res.send(`Welcome ${data.username}`);
});
app.listen(3000);
//middle ware
const express = require('express');
const app = express();
const logger = (req, res, next) => {
    console.log("Middleware Running");
    next();
};
app.use(logger);
app.get('/', (req, res) => {
    res.send("Home");
});
app.listen(3000);
//dynamic route
const express = require('express');
const app = express();
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});
app.listen(3000);
//login api
const express = require('express');
const app = express();
app.use(express.json());
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if(username === "admin" && password === "1234") {
        res.send("Login Successful");
    } else {
        res.send("Invalid Credentials");
    }
});
app.listen(3000);
//crud api
const express = require('express');
const app = express();
app.use(express.json());
let students = [];
app.post('/add', (req, res) => {
    students.push(req.body);
    res.send("Student Added");
});
app.get('/students', (req, res) => {
    res.json(students);
});
app.listen(3000);
//simple calculater api
const express = require('express');
const app = express();
app.get('/add/:a/:b', (req, res) => {
    let num1 = Number(req.params.a);
    let num2 = Number(req.params.b);
    let result = num1 + num2;
    res.send(`Addition: ${result}`);
});
app.listen(3000);
//product api
const express = require('express');
const app = express();
const products = [
    { id: 1, product: "Laptop", price: 50000 },
    { id: 2, product: "Mobile", price: 20000 }
];
app.get('/products', (req, res) => {
    res.json(products);
});
app.listen(3000);
