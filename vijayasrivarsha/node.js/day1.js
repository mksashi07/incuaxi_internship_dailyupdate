//MODULES
//add.js

function add(a, b) {
    return a + b;
}

module.exports = add;

//Export Multiple Functions
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

module.exports = { add, sub };


//commonjs

//Destructuring Import

const { add, multiply } = require('./math');

console.log(add(3, 2));
console.log(multiply(3, 2));

//Exporting a Single Object
const user = {
    name: "Varsha",
    age: 18
};

module.exports = user;
//Exporting a Class

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}`;
    }
}

module.exports = Person;

//import & export

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}
import * as math from './math.js';

console.log(math.add(5, 2));
console.log(math.sub(5, 2));


export class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hi ${this.name}`;
    }
}
import { Person } from './person.js';

const p1 = new Person("Varsha");
console.log(p1.greet());
//requires

const { add, sub } = require('./math');

console.log(add(4, 2));
console.log(sub(4, 2));

