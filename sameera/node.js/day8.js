//buffer module
// Create a buffer from a string
const buf = Buffer.from('Hello, Node.js!');

// Buffers can be converted to strings
console.log(buf.toString()); // 'Hello, Node.js!'

// Access individual bytes
console.log(buf[0]); // 72 (ASCII for 'H')

// Buffers have a fixed length
console.log(buf.length); // 15

// Buffer.allocUnsafe()
// Create an uninitialized buffer of 10 bytes
const buffer2 = Buffer.allocUnsafe(10);
console.log(buffer2);

// Fill the buffer with zeros for security
buffer2.fill(0);
console.log(buffer2);
//Buffer.from()
// Create a buffer from a string
const buffer3 = Buffer.from('Hello, World!');
console.log(buffer3);

console.log(buffer3.toString());

// Create a buffer from an array of integers
const buffer4 = Buffer.from([65, 66, 67, 68, 69]);
console.log(buffer4);

console.log(buffer4.toString());

// Create a buffer from another buffer
const buffer5 = Buffer.from(buffer4);
console.log(buffer5);


//crypto module
const crypto = require('crypto');

// Create a SHA-256 hash of a string
const hash = crypto.createHash('sha256')
  .update('Hello, Node.js!')
  .digest('hex');
console.log('SHA-256 Hash:', hash);

//creating a hash
const crypto = require('crypto');

// Create a SHA-256 hash of a string
const hash = crypto.createHash('sha256')
  .update('Hello, Node.js!')
  .digest('hex');
console.log('SHA-256 Hash:', hash);

//Timers module
const { setTimeout, setInterval, setImmediate } = require('timers');

console.log('Starting timers...');

// Execute once after delay
setTimeout(() => {
  console.log('This runs after 1 second');
}, 1000);

// Execute repeatedly at interval
let counter = 0;
const interval = setInterval(() => {
  counter++;
  console.log(`Interval tick ${counter}`);
  if (counter >= 3) clearInterval(interval);
}, 1000);

// Execute in the next event loop iteration
setImmediate(() => {
  console.log('This runs in the next iteration of the event loop');
});

console.log('Timers scheduled');
