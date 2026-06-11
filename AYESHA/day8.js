// JS MODULES

// Modules Intro
// file: math.js
function add(a, b) {
    return a + b;
}

console.log(add(5, 10));

// Modules Export
// file: user.js
export const name = "Ayesha";

export function greet() {
    console.log("Welcome User");
}

// Modules Import
// file: app.js
import { name, greet } from "./user.js";

console.log(name);
greet();

// Modules Namespace
// file: calculator.js
export function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}

// file: main.js
import * as calc from "./calculator.js";

console.log(calc.add(10,5));
console.log(calc.sub(10,5));

// Modules Dynamic
async function loadModule(){
    const module = await import("./user.js");

    console.log(module.name);

    module.greet();
}

loadModule();

// JS META & PROXY

// Meta Programming
const person = {
    name:"Ayesha"
};

person.age = 20;

console.log(person);


// Meta Reflect
const user = {
    username:"john"
};

Reflect.set(user,"city","Chennai");

console.log(Reflect.get(user,"city"));


// Meta Proxy
const student = {
    name:"Alex"
};

const proxyObj = new Proxy(student,{
    get(target,prop){
        return prop in target ? target[prop] : "Not Found";
    }
});

console.log(proxyObj.name);
console.log(proxyObj.age);


// Meta Reference
const obj = {
    title:"JavaScript"
};

console.log(Reflect.ownKeys(obj));

// TYPED ARRAYS

// Typed Arrays
const numbers = new Int8Array([1,2,3,4]);

console.log(numbers);


// Typed Methods
const arr = new Uint8Array([10,20,30]);

arr.set([100,200],1);

console.log(arr);

console.log(arr.slice(0,2));


// Typed Reference
const buffer1 = new ArrayBuffer(8);

const intView = new Int32Array(buffer1);

intView[0]=100;

console.log(intView);


// Array Buffers
const buffer = new ArrayBuffer(16);

console.log(buffer.byteLength);


// DataViews
const buf = new ArrayBuffer(8);

const view = new DataView(buf);

view.setInt8(0,127);

console.log(view.getInt8(0));


// JS Atomics
const shared = new SharedArrayBuffer(4);

const atomicArray = new Int32Array(shared);

Atomics.store(atomicArray,0,20);

console.log(Atomics.load(atomicArray,0));

Atomics.add(atomicArray,0,5);

console.log(Atomics.load(atomicArray,0));

// JS STRICT MODE
"use strict";

let message = "Strict Mode Enabled";

console.log(message);

// Strict mode prevents accidental globals

function test(){

    // x=10; // Error

    let x=10;

    console.log(x);
}

test();