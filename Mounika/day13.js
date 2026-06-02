 //JavaScript Callbacks
 
 console.log("JavaScript Callbacks");

function welcomeStudent(name, callback) {
    console.log("Welcome:", name);
    callback();
}

function showCourse() {
    console.log("Course: JavaScript Full Stack");
}

welcomeStudent("Mounika", showCourse);

function addition(a, b, callback) {
    let result = a + b;
    callback(result);
}

addition(10, 20, function(result) {
    console.log("Addition:", result);
});

function subtraction(a, b, callback) {
    let result = a - b;
    callback(result);
}

subtraction(50, 20, function(result) {
    console.log("Subtraction:", result);
});

function multiplication(a, b, callback) {
    let result = a * b;
    callback(result);
}

multiplication(5, 6, function(result) {
    console.log("Multiplication:", result);
});

function division(a, b, callback) {
    let result = a / b;
    callback(result);
}

division(100, 5, function(result) {
    console.log("Division:", result);
});

function studentDetails(id, name, callback) {
    console.log("Student ID:", id);
    console.log("Student Name:", name);
    callback();
}

studentDetails(101, "Mounika", function() {
    console.log("Student Record Loaded");
});

console.log("Program Started");

setTimeout(function() {
    console.log("Task 1 Completed");
}, 1000);

setTimeout(function() {
    console.log("Task 2 Completed");
}, 2000);

setTimeout(function() {
    console.log("Task 3 Completed");
}, 3000);

function downloadFile(filename, callback) {
    console.log("Downloading:", filename);

    setTimeout(function() {
        console.log(filename + " Downloaded");
        callback();
    }, 2000);
}

function processFile() {
    console.log("Processing File...");
}

downloadFile("report.pdf", processFile);

function loginUser(username, callback) {
    console.log("Checking User:", username);

    setTimeout(function() {
        console.log("Login Successful");
        callback();
    }, 1500);
}

function loadDashboard() {
    console.log("Dashboard Loaded");
}

loginUser("Mounika", loadDashboard);

function fetchData(callback) {
    console.log("Fetching Data...");

    setTimeout(function() {
        let data = {
            id: 1,
            name: "JavaScript"
        };

        callback(data);
    }, 2000);
}

fetchData(function(data) {
    console.log("Data Received:");
    console.log(data);
});

setTimeout(function() {
    console.log("Step 1");

    setTimeout(function() {
        console.log("Step 2");

        setTimeout(function() {
            console.log("Step 3");

            setTimeout(function() {
                console.log("Step 4");

                setTimeout(function() {
                    console.log("Step 5");
                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);

console.log("Program Ended");