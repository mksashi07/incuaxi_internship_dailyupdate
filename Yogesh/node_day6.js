//Building API with Node and express js

//main folder - Server.js

const express = require("express");

const app = express();

const userRoutes = require("./routes/users");

const PORT = 3000;

// Middleware
app.use(express.json());

// Main Route
app.get("/", (req, res) => {
    res.send("API Project Running");
});

// User Routes
app.use("/api/users", userRoutes);

// Error Middleware
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



//main folder - routes folder - users.js

const express = require("express");

const app = express();

const userRoutes = require("./routes/users");

const PORT = 3000;

// Middleware
app.use(express.json());

// Main Route
app.get("/", (req, res) => {
    res.send("Big API Project Running");
});


// User Routes
app.use("/api/users", userRoutes);

// Error Middleware
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



//main folder - data folder - userdata.js

const users = [
    {
        id: 1,
        name: "Yogesh",
        age: 22,
        city: "Hyderabad",
        course: "Node.js"
    },
    {
        id: 2,
        name: "Rahul",
        age: 24,
        city: "Chennai",
        course: "React"
    },
    {
        id: 3,
        name: "Kiran",
        age: 21,
        city: "Bangalore",
        course: "MongoDB"
    },
    {
        id: 4,
        name: "Suresh",
        age: 25,
        city: "Delhi",
        course: "Express.js"
    },
    {
        id: 5,
        name: "Anjali",
        age: 23,
        city: "Mumbai",
        course: "JavaScript"
    }
];

module.exports = users;

