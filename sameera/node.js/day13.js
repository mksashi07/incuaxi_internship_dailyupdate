//Event Loop
//Basic EventEmitter Example
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greet', () => {
    console.log('Hello Sameera!');
});

emitter.emit('greet');
//Passing Data with Events
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('student', (name, marks) => {
    console.log(`Name: ${name}`);
    console.log(`Marks: ${marks}`);
});

emitter.emit('student', 'Sameera', 95);
//Multiple Event Listeners
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('login', () => {
    console.log('Checking Credentials');
});

emitter.on('login', () => {
    console.log('Creating Session');
});

emitter.on('login', () => {
    console.log('Login Successful');
});

emitter.emit('login');
//Event Loop Example
console.log("Start");

setTimeout(() => {
    console.log("Timer Finished");
}, 0);

console.log("End");
//setImmediate()
console.log("Start");

setImmediate(() => {
    console.log("setImmediate");
});

console.log("End");
//process.nextTick()
console.log("Start");

process.nextTick(() => {
    console.log("nextTick");
});

console.log("End");
//Event Loop Priority
console.log("Start");

process.nextTick(() => {
    console.log("nextTick");
});

setTimeout(() => {
    console.log("setTimeout");
}, 0);

setImmediate(() => {
    console.log("setImmediate");
});

console.log("End");
//Custom Student Event System
const EventEmitter = require('events');

class Student extends EventEmitter {}

const student = new Student();

student.on('result', (name, marks) => {

    if (marks >= 35) {
        console.log(`${name} Passed`);
    } else {
        console.log(`${name} Failed`);
    }

});

student.emit('result', 'Sameera', 90);
student.emit('result', 'Rahul', 25);
//Ticket Booking System
const EventEmitter = require('events');

const booking = new EventEmitter();

booking.on('book', (user) => {
    console.log(`${user} booked ticket`);
});

booking.on('book', () => {
    console.log('Sending Confirmation Email');
});

booking.emit('book', 'Sameera');
//Medium-Level Event-Based Notification System
const EventEmitter = require('events');

class Notification extends EventEmitter {}

const notifier = new Notification();

notifier.on('orderPlaced', orderId => {
    console.log(`Order ${orderId} placed`);
});

notifier.on('orderPlaced', orderId => {
    console.log(`Email sent for Order ${orderId}`);
});

notifier.on('orderPlaced', orderId => {
    console.log(`SMS sent for Order ${orderId}`);
});

notifier.emit('orderPlaced', 101);
