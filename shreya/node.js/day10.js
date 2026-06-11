// BUFFER MODULE
const buf1 = Buffer.from("NodeJS");
console.log("Original Buffer :", buf1);
console.log("Buffer String   :", buf1.toString());
console.log("Buffer Length   :", buf1.length);
const buf2 = Buffer.alloc(10);
buf2.write("Hello");
console.log("Allocated Buffer:", buf2);
console.log("Converted String:", buf2.toString());
const buf3 = Buffer.from([65, 66, 67, 68]);
console.log("ASCII Buffer    :", buf3.toString());
console.log("Hex Format      :", buf1.toString("hex"));
console.log("Base64 Format   :", buf1.toString("base64"));
// CRYPTO MODULE
const password = "NodeJs@123";
const shaHash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
console.log("Original Password :", password);
console.log("SHA256 Hash        :", shaHash);
const md5Hash = crypto
    .createHash("md5")
    .update(password)
    .digest("hex");
console.log("MD5 Hash           :", md5Hash);
const randomKey = crypto.randomBytes(16);
console.log("Random Key         :", randomKey.toString("hex"));
const secretText = "Welcome To NodeJS";
const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    crypto.randomBytes(32),
    crypto.randomBytes(16)
);
let encrypted = cipher.update(secretText, "utf8", "hex");
encrypted += cipher.final("hex");
console.log("Encrypted Text     :", encrypted);
// STREAM MODULE
// Create input file
fs.writeFileSync(
    "input.txt",
    `Node.js Streams Example
Streams process data chunk by chunk.
They are useful for large files.
Reading large files with streams
reduces memory usage.
`
);
// Read Stream
const readStream = fs.createReadStream("input.txt", "utf8");
readStream.on("data", (chunk) => {
    console.log("Received Chunk:");
    console.log(chunk);
});
readStream.on("end", () => {
    console.log("Reading Completed.");
});
readStream.on("error", (err) => {
    console.log("Read Error:", err.message);
});
// Write Stream
const writeStream = fs.createWriteStream("output.txt");
writeStream.write("Line 1\n");
writeStream.write("Line 2\n");
writeStream.write("Line 3\n");
writeStream.write("Line 4\n");
writeStream.end();
writeStream.on("finish", () => {
    console.log("Writing Completed.");
});
writeStream.on("error", (err) => {
    console.log("Write Error:", err.message);
});
// TIMERS MODULE
setTimeout(() => {
    console.log("Executed after 2 seconds.");
}, 2000);
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval Count : ${count}`);
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Interval Stopped.");
    }
}, 1000);
// EVENT + CRYPTO EXAMPLE
user.on("secureLogin", (username, password) => {
    const hash = crypto
        .createHash("sha256")
        .update(password)
        .digest("hex");
    console.log(`User : ${username}`);
    console.log(`Password Hash : ${hash}`);
});
user.emit("secureLogin", "Admin", "Admin123");
// STREAM + CRYPTO EXAMPLE
const fileHash = crypto.createHash("md5");
const fileStream = fs.createReadStream("input.txt");
fileStream.on("data", (chunk) => {
    fileHash.update(chunk);
});
fileStream.on("end", () => {
    console.log("\nFile MD5 Hash:");
    console.log(fileHash.digest("hex"));
});
// BUFFER COMPARISON
const b1 = Buffer.from("Node");
const b2 = Buffer.from("Node");
console.log("Equal Buffers :", b1.equals(b2));
const mergedBuffer = Buffer.concat([b1, b2]);
console.log("Merged Buffer :", mergedBuffer.toString());

