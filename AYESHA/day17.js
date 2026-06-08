// EVENTS & EVENT HANDLING
 

console.log("=== EVENTS & EVENT HANDLING ===");

// Simulating Event Handling using Node.js EventEmitter
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

// Event Listener
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Event Trigger
emitter.emit('greet', 'Sumana');

// Multiple Event Listeners
emitter.on('login', (user) => {
    console.log(`${user} logged in`);
});

emitter.on('login', (user) => {
    console.log(`Welcome back ${user}`);
});

emitter.emit('login', 'John');

// Once Event
emitter.once('payment', () => {
    console.log('Payment processed');
});

emitter.emit('payment');
emitter.emit('payment'); // Will not execute again

// Removing Event Listener
function logoutHandler(user) {
    console.log(`${user} logged out`);
}

emitter.on('logout', logoutHandler);

emitter.emit('logout', 'John');

emitter.removeListener('logout', logoutHandler);

emitter.emit('logout', 'John'); // No output


/**************************************
 * TYPED ARRAYS
 **************************************/

console.log("\n=== TYPED ARRAYS ===");

// Int8Array
const intArray = new Int8Array([10, 20, 30]);
console.log("Int8Array:", intArray);

// Uint8Array
const uintArray = new Uint8Array([255, 100, 50]);
console.log("Uint8Array:", uintArray);

// Float32Array
const floatArray = new Float32Array([1.5, 2.5, 3.5]);
console.log("Float32Array:", floatArray);

// Iteration
floatArray.forEach(value => {
    console.log("Value:", value);
});


/**************************************
 * ARRAYBUFFER
 **************************************/

console.log("\n=== ARRAYBUFFER ===");

// Create 8 bytes memory block
const buffer = new ArrayBuffer(8);

console.log("Buffer Size:", buffer.byteLength, "bytes");


// * ARRAYBUFFER + TYPED ARRAY 

console.log("\n=== ARRAYBUFFER WITH VIEW ===");

const view = new Uint8Array(buffer);

view[0] = 100;
view[1] = 200;

console.log("Buffer Data:", view);


/**************************************
 * DATAVIEW
 **************************************/

console.log("\n=== DATAVIEW ===");

const dataView = new DataView(buffer);

dataView.setInt8(0, 50);
dataView.setInt8(1, 75);

console.log("Byte 0:", dataView.getInt8(0));
console.log("Byte 1:", dataView.getInt8(1));


/**************************************
 * BINARY DATA PROCESSING
 **************************************/

console.log("\n=== BINARY DATA ===");

const binaryBuffer = new ArrayBuffer(4);

const binaryView = new Uint8Array(binaryBuffer);

binaryView[0] = 65;
binaryView[1] = 66;
binaryView[2] = 67;
binaryView[3] = 68;

console.log("Binary Bytes:", binaryView);

const text = String.fromCharCode(...binaryView);
console.log("Converted Text:", text);


/**************************************
 * TYPED ARRAY METHODS
 **************************************/

console.log("\n=== TYPED ARRAY METHODS ===");

const numbers = new Int16Array([10, 20, 30, 40, 50]);

console.log("Original:", numbers);

const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

const filtered = numbers.filter(num => num > 25);
console.log("Filtered:", filtered);

const total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Sum:", total);


/**************************************
 * REAL-WORLD EXAMPLE
 **************************************/

console.log("\n=== IMAGE PIXEL DATA EXAMPLE ===");

// RGB values
const pixels = new Uint8ClampedArray([
    255, 0, 0,      // Red
    0, 255, 0,      // Green
    0, 0, 255       // Blue
]);

console.log("Pixel Data:", pixels);