//datastructures in javascript
//array
let numbers = [10, 20, 30, 40];

console.log(numbers);
console.log(numbers[0]);
console.log(numbers[2]);
//push
numbers.push(50);
console.log(numbers);
//pop
numbers.pop();
console.log(numbers);
//loop
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//shift()
let fruits = ["Apple", "Banana", "Mango"];

fruits.shift();

console.log(fruits);
//unshift
let fruits = ["Banana", "Mango"];

fruits.unshift("Apple");

console.log(fruits);

let n = [3, 4];

n.unshift(1, 2);

console.log(n);
//length
let colors = ["Red", "Blue", "Green"];

console.log(colors.length);
//length in loop
let arr = [10, 20, 30];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// indexof
let fruitss = ["Apple", "Banana", "Mango"];

console.log(fruitss.indexOf("Banana"));
// sorting
let fruitss = ["Mango", "Apple", "Banana"];

fruitss.sort();

console.log(fruits);
let num= [100, 25, 3];

num.sort();

console.log(num);
//math.min
console.log(Math.min(10, 5, 20, 2));
//math.max
console.log(Math.max(10, 5, 20, 2));
//strings
let name = "Vishnu";

console.log(name);
//length
let text = "JavaScript";

console.log(text.length);
//index access
let word = "Vishu";

console.log(word[0]);
console.log(word[4]);
//uppercase()
let text = "hello";

console.log(text.toUpperCase());
//lowercase
console.log(text.toLowerCase());
//indexof
console.log(text.indexOf("E"));
//slicing
let text = "JavaScript";

console.log(text.slice(0, 4));
//replace
let text = "Hello Java";
console.log(text.replace("Java", "JavaScript"));
///trim
let text = "   Hello World   ";

console.log(text.trim());
//split string innto array
let fruits = "Apple,Banana,Mango";

console.log(fruits.split(","));
//join strings
let first = "Hello";
let second = "World";

console.log(first + " " + second);
//template literals
let name = "Vishnu";

console.log(`Welcome ${name}`);
//lop through string
let text = "Java";

for(let char of text) {
    console.log(char);
}
//reverse a string
let text = "hello";

let reversed = text.split("").reverse().join("");

console.log(reversed);
//stack
// Simple Stack Example in JavaScript

let stack = [];

// Push elements
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack after push:", stack);

// Peek top element
console.log("Top element:", stack[stack.length - 1]);

// Pop element
console.log("Removed element:", stack.pop());

// Final stack
console.log("Final Stack:", stack);

// Check size
console.log("Stack Size:", stack.length);

// Check empty
console.log("Is Stack Empty?", stack.length === 0);
//queue
// Simple Queue Operations in JavaScript

let queue = [];

// Enqueue (Add elements)
queue.push(10);
queue.push(20);
queue.push(30);

console.log("Queue after enqueue:", queue);

// Front element
console.log("Front element:", queue[0]);

// Dequeue (Remove first element)
console.log("Removed element:", queue.shift());

// Final queue
console.log("Final Queue:", queue);

// Queue size
console.log("Queue Size:", queue.length);

// Check empty
console.log("Is Queue Empty?", queue.length === 0);