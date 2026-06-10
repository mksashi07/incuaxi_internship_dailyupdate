//Memory Management is the process of allocating, using, and releasing memory efficiently in JavaScript applications.
//Stack memory - stores primitive data types fast acess , fixed size
let name = "Mounika";
let age = 22;

console.log(name);
console.log(age);

let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);

//Heap Memory - Stores objects and arrays ,  Dynamic size ,Reference-based storage
const student = {
    id: 101,
    name: "Mounika"
};

console.log(student);

let user1 = {
    name: "Mounika"
};

let user2 = user1;

user2.name = "Harika";

console.log(user1.name);
console.log(user2.name);

//Garbage Collection
let employee = {
    id: 1,
    name: "Surya"
};

employee = null;

console.log(employee);

//Regular Expressions are patterns used to search, validate, match, and replace text in strings.
//Check Email Format
const email = "mounika@gmail.com";

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(pattern.test(email));

//Extract Numbers
const text = "Order ID: 12345";

const numbers = text.match(/\d+/);

console.log(numbers[0]);

//Replace All Spaces
const sentence = "JavaScript is awesome";

const result = sentence.replace(/\s/g, "-");

console.log(result);

//A Generator is a special function that can pause and resume its execution. 
//Generator functions use function* and yield.
//Basic Generator
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//Generator with Messages
function* greet() {
    yield "Hello";
    yield "Welcome";
    yield "JavaScript";
}

const gen = greet();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//Infinite Generator
function* counter() {
    let count = 1;

    while (true) {
        yield count++;
    }
}

const gen = counter();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//An Iterator is an object that allows sequential access to elements one at a time.

//An iterator contains a next() method.
//Array Iterator
const fruits = ["Apple", "Mango", "Orange"];

const iterator = fruits[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//String Iterator
const name = "JS";

const iterator = name[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//Custom Iterator
const numbers = {
    start: 1,
    end: 3,

    [Symbol.iterator]() {
        let current = this.start;
        let last = this.end;

        return {
            next() {
                if (current <= last) {
                    return {
                        value: current++,
                        done: false
                    };
                }

                return {
                    done: true
                };
            }
        };
    }
};

for (const num of numbers) {
    console.log(num);
}
