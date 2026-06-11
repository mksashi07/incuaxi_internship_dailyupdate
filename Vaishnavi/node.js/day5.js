//ES Modules (ECMAScript Modules) are the modern way to organize and reuse JavaScript code using:
//export
//import
//Named Export - Named exports allow exporting multiple values from a file.
//
//math.js
export const add = (a, b) => {
    return a + b;
};

export const sub = (a, b) => {
    return a - b;
};
//app.js
import { add, sub } from './math.js';

console.log(add(10, 5));
console.log(sub(10, 5));

//Default Export - A module can have one default export.
//message.js
export default function message() {
    console.log("Welcome to Node.js ES Modules");
}
//app.js
import message from './message.js';
message();
 
//Combining Default and Named Exports
//user.js
export const name = "Mounika";
export default function greet() {
    console.log("Hello Mouni");
}
//app.js
import greet, { name } from './user.js';
greet();
console.log(name);

//Renaming Imports and Exports
//math.js
const multiply = (a, b) => a * b;

export { multiply as mul };
//app.js
import { mul as multiplication } from './math.js';
console.log(multiplication(5, 4));

//import Everything - Use * to import all exports.
//math.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

//app.js
import * as math from './math.js';

console.log(math.add(5, 2));
console.log(math.sub(5, 2));

