// Import Modules
const crypto = require("crypto");

console.log("NODE.JS MODULES EXAMPLE ");


// BUFFER MODULE


console.log("\n1. BUFFER MODULE");

// Create Buffer
const buffer = Buffer.from("Hello Node.js");

console.log("Original Buffer:", buffer);

console.log(
    "Buffer to String:",
    buffer.toString()
);

console.log(
    "Buffer Length:",
    buffer.length
);


// CRYPTO MODULE


console.log("\n2. CRYPTO MODULE");

// Create Hash
const password = "myPassword123";

const hash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

console.log("Original Password:", password);
console.log("SHA256 Hash:", hash);

// Generate Random Bytes
const randomToken = crypto
    .randomBytes(16)
    .toString("hex");

console.log(
    "Random Token:",
    randomToken
);


// TIMERS MODULE


console.log("\n3. TIMERS MODULE");

// setTimeout Example
setTimeout(() => {
    console.log(
        "\nsetTimeout: Runs after 3 seconds"
    );
}, 3000);

// setInterval Example
let count = 1;

const intervalId = setInterval(() => {
    console.log(
        `setInterval Count: ${count}`
    );

    count++;

    if (count > 5) {
        clearInterval(intervalId);

        console.log(
            "\nInterval Stopped Successfully"
        );
    }
}, 1000);

// Immediate Execution
setImmediate(() => {
    console.log(
        "\nsetImmediate: Executes immediately after current operation"
    );
});

// COMBINED EXAMPLE

setTimeout(() => {

    console.log(
        "\nCOMBINED EXAMPLE "
    );

    // Buffer Creation
    const userData =
        "Rahul-NodeJS-Developer";

    const userBuffer =
        Buffer.from(userData);

    console.log(
        "User Buffer:",
        userBuffer
    );

    // Encrypt Data
    const encryptedData = crypto
        .createHash("sha256")
        .update(userData)
        .digest("hex");

    console.log(
        "Encrypted User Data:"
    );

    console.log(encryptedData);

}, 5000);

console.log(
    "\nProgram Started..."
);