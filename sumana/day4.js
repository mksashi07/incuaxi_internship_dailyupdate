// IMPLICIT TYPE CONVERSION

// String Coercion
console.log("5" + 5); // "55"

// Numeric Coercion
console.log("10" - 5); // 5
console.log("5" * 2);  // 10
console.log("20" / 2); // 10

// Boolean Coercion
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

// Equality Operators
console.log(5 == "5");  // true
console.log(5 === "5"); // false


// EXPLICIT TYPE CONVERSION

// Convert to String
console.log(String(123)); // "123"

// Convert to Number
console.log(Number("100")); // 100

// parseInt()
console.log(parseInt("10px")); // 10

// parseFloat()
console.log(parseFloat("10.5em")); // 10.5

// Unary Plus
console.log(+"42"); // 42

// Convert to Boolean
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

// COMMON PITFALLS (GOTCHAS)

// + Operator
console.log("5" + 1); // "51"

// null and undefined
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN

// Empty Array and Object
console.log(Number([])); // 0
console.log(Number({})); // NaN

// JavaScript Arrays 

// Creating Arrays
let fruits = ["Apple", "Banana", "Mango"];
let numbers = [10, 20, 30, 40, 50];

console.log("Fruits Array:", fruits);
console.log("Numbers Array:", numbers);

// Accessing Array Elements
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// Using at() for negative indexing
console.log("Last Number using at():", numbers.at(-1));

// Modifying Array Elements

fruits[1] = "Orange";
console.log("Modified Fruits:", fruits);

// Array Methods

// push() → Add element at end
numbers.push(60);
console.log("After push():", numbers);

// pop() → Remove last element
numbers.pop();
console.log("After pop():", numbers);

// unshift() → Add element at beginning
numbers.unshift(5);
console.log("After unshift():", numbers);

// shift() → Remove first element
numbers.shift();
console.log("After shift():", numbers);

// splice() → Add/Remove elements
fruits.splice(1, 1, "Grapes");
console.log("After splice():", fruits);

// slice() → Copy portion of array
let slicedArray = numbers.slice(1, 4);
console.log("Slice Array:", slicedArray);

// Looping Through Arrays


// for loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of loop
console.log("Using for...of loop:");
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach()
console.log("Using forEach():");
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});


// map() Method


let doubled = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubled);

// filter() Method

let greaterThanTwenty = numbers.filter(num => num > 20);
console.log("Numbers Greater Than 20:", greaterThanTwenty);

// reduce() Method


let total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Sum of Numbers:", total);


// find() Method

let found = numbers.find(num => num > 25);
console.log("First Number Greater Than 25:", found);

// findIndex() Method


let foundIndex = numbers.findIndex(num => num > 25);
console.log("Index of Number Greater Than 25:", foundIndex);

// some() Method
console.log("Any Number > 40:", numbers.some(num => num > 40));
// every() Method
console.log("All Numbers > 5:", numbers.every(num => num > 5));

// sort() Method

let unsorted = [5, 2, 9, 1, 7];

unsorted.sort((a, b) => a - b);

console.log("Sorted Array:", unsorted);

// reverse() Method
unsorted.reverse();

console.log("Reversed Array:", unsorted);

// includes() Method
console.log("Includes Mango:", fruits.includes("Mango"));

// includes() Method
console.log("Index of Grapes:", fruits.indexOf("Grapes"));


let nestedArray = [1, 2, [3, 4], [5, 6]];

console.log("Flat Array:", nestedArray.flat());

// Spread Operator
let arr1 = [1, 2];
let arr2 = [3, 4];

let combined = [...arr1, ...arr2];

console.log("Combined Array:", combined);
// Array Destructuring

let colors = ["Red", "Blue", "Green"];

let [firstColor, secondColor] = colors;

console.log("First Color:", firstColor);
console.log("Second Color:", secondColor);
// Method Chaining
let result = numbers
    .filter(num => num > 10)
    .map(num => num * 2)
    .reduce((sum, num) => sum + num, 0);

console.log("Method Chaining Result:", result);

