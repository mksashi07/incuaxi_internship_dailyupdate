// example --- 1

const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from about page');
});

app.get("/about",(req,res) =>{
    return res.send("hello guys this is about page");
});

const myserver = http.createServer(app);

myserver.listen(8000, () => {
    console.log('Server Started!');
});


// example----2

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.listen(3000, () => {
    console.log('Server Started');
});


// example ----3

const express = require('express');
const app = express();

app.get('/user', (req, res) => {
    res.json({
        name: 'Suheal',
        age: 22,
        course: 'Full Stack Development'
    });
});

app.listen(3000);