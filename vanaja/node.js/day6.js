// Import Crypto Module
const crypto = require("crypto");
// 1. BUFFER MODULE
console.log("BUFFER MODULE ");
// Create Buffer
const buffer = Buffer.from("Hello NodeJS");
console.log("Buffer Data:");
console.log(buffer);
// Convert Buffer to String
console.log("Buffer to String:");
console.log(buffer.toString());
// Buffer Length
console.log("Buffer Length:");
console.log(buffer.length);
// Access Buffer Index
console.log("First Character ASCII Value:");
console.log(buffer[0]);
// Create Empty Buffer
const buf = Buffer.alloc(10);
buf.write("Hi");
console.log("Allocated Buffer:");
console.log(buf);
console.log("Allocated Buffer to String:");
console.log(buf.toString());
// Convert Buffer to JSON
console.log("Buffer to JSON:");
console.log(buffer.toJSON());
// 2. CRYPTO MODULE
console.log("\nCRYPTO MODULE");
// Create Hash
const password = "mypassword";
const hash = crypto
.createHash("sha256")
.update(password)
.digest("hex");
console.log("SHA256 Hash:");
console.log(hash);
// Generate Random Bytes
const randomBytes = crypto.randomBytes(16);
console.log("Random Bytes:");
console.log(randomBytes.toString("hex"));
// Encryption
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(
    algorithm,
    key,
    iv
);
let encrypted = cipher.update(
    "Hello NodeJS",
    "utf8",
    "hex"
);
encrypted += cipher.final("hex");
console.log("Encrypted Data:");
console.log(encrypted);
// Decryption
const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    iv
);
let decrypted = decipher.update(
    encrypted,
    "hex",
    "utf8"
);
decrypted += decipher.final("utf8");
console.log("Decrypted Data:");
console.log(decrypted);
// 3. TIMER MODULE
console.log("\nTIMER MODULE ");
// setTimeout()
// Executes once after delay
setTimeout(() => {
    console.log("setTimeout Executed After 2 Seconds");
}, 2000);
// setInterval()
// Executes repeatedly
let count = 0;
const interval = setInterval(() => {
    count++;
    console.log("setInterval Count:", count);
    if(count === 5)
    {
        clearInterval(interval);
        console.log("Interval Stopped");
    }
}, 1000);
// setImmediate()
// Executes immediately
setImmediate(() => {
    console.log("setImmediate Executed");
});
// PROGRAM START
console.log("\nProgram Started");
console.log("Complete NodeJS Modules Example");