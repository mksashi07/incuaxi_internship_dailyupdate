// 1. BUFFER MODULE
// Buffer stores binary data
const buffer1 = Buffer.from("Hello Node.js");
console.log("Original Buffer:");
console.log(buffer1);
console.log("Convert Buffer to String:");
console.log(buffer1.toString());
// Create buffer with size
const buffer2 = Buffer.alloc(10);
console.log("Empty Buffer:");
console.log(buffer2);
// Write data into buffer
buffer2.write("Manju");
console.log("After Writing:");
console.log(buffer2.toString());
// Buffer Length
console.log("Buffer Length:");
console.log(buffer1.length);
// 2. CONCAT BUFFERS
const buf1 = Buffer.from("Hello ");
const buf2 = Buffer.from("World");
const combinedBuffer = Buffer.concat([buf1, buf2]);
console.log("Combined Buffer:");
console.log(combinedBuffer.toString());
// 3. BUFFER TO JSON
const jsonBuffer = buffer1.toJSON();
console.log("Buffer JSON:");
console.log(jsonBuffer);
// 4. CRYPTO MODULE
const crypto = require("crypto");
// CREATE HASH
const password = "mypassword123";
const hash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
console.log("SHA256 Hash:");
console.log(hash);
// RANDOM BYTES
const randomData = crypto.randomBytes(16).toString("hex");
console.log("Random Bytes:");
console.log(randomData);
// ENCRYPTION
const algorithm = "aes-256-cbc";
// Generate random key and iv
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("Hello Secret Message", "utf8", "hex");
encrypted += cipher.final("hex");
console.log("Encrypted Data:");
console.log(encrypted);
// DECRYPTION
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
// 5. TIMER FUNCTIONS
// setTimeout()

setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);
// setInterval()
let count = 1;

const interval = setInterval(() => {

    console.log("Interval Count:", count);

    count++;

    // Stop interval after 5 times
    if (count > 5) {

        clearInterval(interval);

        console.log("Interval Stopped");
    }

}, 1000);
// setImmediate()
setImmediate(() => {
    console.log("Executed Immediately");
});
// process.nextTick()
process.nextTick(() => {
    console.log("Executed Before Event Loop Continues");
});
// PRACTICAL TIMER EXAMPLE
function downloadFile(fileName, callback) {

    console.log(`Downloading ${fileName}...`);

    setTimeout(() => {

        console.log(`${fileName} Downloaded Successfully`);

        callback();

    }, 3000);
}

downloadFile("nodejs.pdf", () => {
    console.log("Callback Function Executed");
});
