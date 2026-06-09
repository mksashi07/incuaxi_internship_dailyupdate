function debug(message) {
    console.log(`[DEBUG] ${new Date().toLocaleTimeString()} - ${message}`);
}

debug("Server Starting...");

// Performance Testing
console.time("UserCreation");

const users = [];

for (let i = 1; i <= 50000; i++) {
    users.push({
        id: i,
        name: `User${i}`,
        email: `user${i}@gmail.com`
    });
}

console.timeEnd("UserCreation");

console.log("Total Users:", users.length);

// Memory Usage
const memory = process.memoryUsage();

console.log("\nMEMORY DETAILS");
console.log("RSS:", memory.rss);
console.log("Heap Total:", memory.heapTotal);
console.log("Heap Used:", memory.heapUsed);
console.log("External:", memory.external);

// Async Debugging
function getUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 101,
                name: "Mounika",
                role: "Developer"
            });
        }, 1500);
    });
}

async function fetchUser() {
    try {
        debug("Fetching User Data");

        const user = await getUserData();

        console.log("User Data:", user);

    } catch (error) {
        console.error(error.message);
    }
}

fetchUser();

// Stack Trace Example
function login() {
    validateUser();
}

function validateUser() {
    verifyPassword();
}

function verifyPassword() {
    console.trace("Login Stack Trace");
}

login();

// Object Inspection
const employee = {
    id: 1001,
    name: "Ravi",
    department: "IT",
    salary: 60000,
    skills: ["Node.js", "MongoDB", "Express"]
};

console.log("\nEMPLOYEE OBJECT");
console.dir(employee, { depth: null });

// Error Debugging
try {
    const result = undefinedVariable + 10;
    console.log(result);
} catch (error) {
    console.error("Runtime Error:", error.message);
}

// Heavy Computation Performance
console.time("Calculation");

let sum = 0;

for (let i = 1; i <= 1000000; i++) {
    sum += i;
}

console.timeEnd("Calculation");

console.log("Final Sum:", sum);

debug("Server Stopped");

console.log("DEBUGGING COMPLETED");
