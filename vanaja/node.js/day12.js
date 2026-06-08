const express = require('express');

const app = express();

// Built-in Middleware
app.use(express.json());


// Custom Logging Middleware

app.use((req, res, next) => {
    console.log(
        `${req.method} ${req.url} - ${new Date().toLocaleString()}`
    );
    next(); // Pass control to next middleware
});


// Authentication Middleware

function authMiddleware(req, res, next) {

    const token = req.headers.authorization;

    if (token === 'mySecretToken') {
        next();
    } else {
        res.status(401).json({
            message: 'Unauthorized Access'
        });
    }
}


// Request Modification Middleware

app.use((req, res, next) => {

    req.college = 'ABC Engineering College';

    next();
});


// Normal Route

app.get('/', (req, res) => {

    res.json({
        message: 'Welcome to Express Middleware',
        college: req.college
    });
});


// Protected Route

app.get(
    '/profile',
    authMiddleware,
    (req, res) => {

        res.json({
            message: 'Profile Access Granted'
        });
    }
);

// POST Route

app.post('/student', (req, res) => {

    res.json({
        message: 'Student Added',
        data: req.body
    });
});



// Error Handling Middleware

app.use((err, req, res, next) => {

    console.error(err.stack);

    res.status(500).json({
        message: 'Something Went Wrong'
    });
});
// Start Server
app.listen(3000, () => {

    console.log(
        'Server Running at http://localhost:3000'
    );
});