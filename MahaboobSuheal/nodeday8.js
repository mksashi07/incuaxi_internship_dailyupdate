const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.listen(3000);


const express = require("express");

const app = express();

app.get("/user/:name", (req, res) => {
    res.send(`Welcome ${req.params.name}`);
});

app.listen(3000);


const express = require("express");

const app = express();

app.get("/search", (req, res) => {
    res.send(`Searching for: ${req.query.q}`);
});

app.listen(3000);