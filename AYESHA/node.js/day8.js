/* 
1. CRYPTO MODULE
*/
console.log("\n================ CRYPTO MODULE ================\n");

// Random Bytes
const randomBytes = crypto.randomBytes(16).toString("hex");
console.log("Random Bytes:", randomBytes);

// Hashing using SHA256
const text = "Hello Node.js Crypto";
const hash = crypto.createHash("sha256").update(text).digest("hex");
console.log("\nOriginal Text:", text);
console.log("SHA256 Hash:", hash);

// HMAC
const secretKey = "mySecretKey";
const hmac = crypto
  .createHmac("sha256", secretKey)
  .update("Important Message")
  .digest("hex");

console.log("\nHMAC:", hmac);

// AES Encryption & Decryption
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const message = "This is a secret message";

// Encrypt
const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = cipher.update(message, "utf8", "hex");
encrypted += cipher.final("hex");

console.log("\nEncrypted Message:", encrypted);

// Decrypt
const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");

console.log("Decrypted Message:", decrypted);

/* 
2. TIMERS MODULE
 */

console.log("\n================ TIMERS MODULE ================\n");

// setTimeout
setTimeout(() => {
  console.log("setTimeout -> Executed after 2 seconds");
}, 2000);

// setInterval
let count = 0;

const intervalId = setInterval(() => {
  count++;

  console.log(`setInterval -> Count: ${count}`);

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Interval Stopped");
  }
}, 1000);

// setImmediate
setImmediate(() => {
  console.log("setImmediate -> Executed immediately after current event loop");
});

// process.nextTick
process.nextTick(() => {
  console.log("process.nextTick -> Executed before next event loop");
});

/* 
3. DNS MODULE
 */
console.log("\n================ DNS MODULE ================\n");

// Lookup Domain
dns.lookup("google.com", (err, address, family) => {
  if (err) {
    console.log("Lookup Error:", err);
    return;
  }
  console.log("dns.lookup()");
  console.log("IP Address:", address);
  console.log("IP Family:", family);
});

// Resolve IPv4 Addresses
dns.resolve4("google.com", (err, addresses) => {
  if (err) {
    console.log("resolve4 Error:", err);
    return;
  }

  console.log("\ndns.resolve4()");
  console.log("IPv4 Addresses:", addresses);
});

// Resolve MX Records
dns.resolveMx("gmail.com", (err, records) => {
  if (err) {
    console.log("resolveMx Error:", err);
    return;
  }

  console.log("\ndns.resolveMx()");
  console.log("MX Records:");

  records.forEach((record, index) => {
    console.log(
      `${index + 1}. Exchange: ${record.exchange}, Priority: ${record.priority}`
    );
  });
});

// Reverse DNS Lookup
dns.reverse("8.8.8.8", (err, hostnames) => {
  if (err) {
    console.log("Reverse Lookup Error:", err);
    return;
  }

  console.log("\ndns.reverse()");
  console.log("Hostnames:", hostnames);
});
