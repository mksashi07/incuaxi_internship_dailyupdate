// BUFFER MODULE
const bufferA = Buffer.from("Welcome Node.js");
console.log("Buffer Data:");
console.log(bufferA);
console.log("Buffer As String:");
console.log(bufferA.toString());
const bufferB = Buffer.alloc(15);
console.log("Allocated Buffer:");
console.log(bufferB);
bufferB.write("Surya");
console.log("Buffer After Write:");
console.log(bufferB.toString());
console.log("Buffer Size:");
console.log(bufferA.length);

// BUFFER CONCAT
const firstBuffer = Buffer.from("Node ");
const secondBuffer = Buffer.from("Learning");
const mergedBuffer = Buffer.concat([
    firstBuffer,
    secondBuffer
]);
console.log("Merged Buffer:");
console.log(mergedBuffer.toString());


// BUFFER TO JSON
const bufferJSON = bufferA.toJSON();
console.log("JSON Format:");
console.log(bufferJSON);


// CRYPTO MODULE
const crypto = require("crypto");
const text = "nodejs@123";
const hashedText = crypto
    .createHash("sha256")
    .update(text)
    .digest("hex");
console.log("Hashed Value:");
console.log(hashedText);


// RANDOM BYTES
const randomValue = crypto
    .randomBytes(16)
    .toString("hex");
console.log("Random Value:");
console.log(randomValue);


// ENCRYPTION
const algorithm = "aes-256-cbc";
const secretKey = crypto.randomBytes(32);
const secretIV = crypto.randomBytes(16);
const encryptor = crypto.createCipheriv(
    algorithm,
    secretKey,
    secretIV
);
let encryptedText = encryptor.update(
    "Node.js Security",
    "utf8",
    "hex"
);
encryptedText += encryptor.final("hex");
console.log("Encrypted Text:");
console.log(encryptedText);


// DECRYPTION
const decryptor = crypto.createDecipheriv(
    algorithm,
    secretKey,
    secretIV
);
let decryptedText = decryptor.update(
    encryptedText,
    "hex",
    "utf8"
);
decryptedText += decryptor.final("utf8");
console.log("Decrypted Text:");
console.log(decryptedText);


// setTimeout()
setTimeout(() => {
    console.log("Executed After 2 Seconds");
}, 2000);


// setInterval()
let number = 1;
const timer = setInterval(() => {
    console.log("Counter:", number);
    number++;
    if (number > 5) {
        clearInterval(timer);
        console.log("Interval Cleared");
    }
}, 1000);


// setImmediate()
setImmediate(() => {
    console.log("Immediate Function Executed");
});


// process.nextTick()
process.nextTick(() => {
    console.log("Next Tick Executed");
});


// PRACTICAL TIMER EXAMPLE
function uploadFile(fileName, callback) {
    console.log(`Uploading ${fileName}...`);
    setTimeout(() => {
        console.log(
            `${fileName} Uploaded Successfully`
        );
        callback();
    }, 3000);
}
uploadFile("project.zip", () => {
    console.log("Callback Executed");
});