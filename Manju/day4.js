//array
console.log(years["2"] !== years["02"]);
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); 
fruits.length = 10;
console.log(fruits); 
console.log(Object.keys(fruits)); 
console.log(fruits.length);
console.log(fruits[8]); 
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
colors.reverse();
 arr.copyWithin(0, 1, 2); // mutates arr
const arr2 = arr.slice().copyWithin(0, 1, 2); 
const arr3 = [...arr].copyWithin(0, 1, 2); 
const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(Array.prototype.join.call(arrayLike, "+")); 
const arrayEmpty = new Array(2);

console.log(arrayEmpty.length);
console.log(arrayEmpty[0]); 
console.log(0 in arrayEmpty);
console.log(1 in arrayEmpty); 
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
Array.from(mapper.keys());
//object
const obj = Object.create(null);
const obj2 = { __proto__: null };
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

hasPerson("hasOwnProperty"); // true
getAge("toString"); // [Function: toString]
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
//push() add at the end
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);

//pop
let fruits = ["Apple", "Banana", "Mango"];

fruits.pop();

console.log(fruits);
//shift 
let fruits = ["Apple", "Banana", "Mango"];

fruits.shift();

console.log(fruits);
//looping through loops
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//for..of loop 
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
//for each()
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
//concat
let arr1 = [1, 2];
let arr2 = [3, 4];

let result = arr1.concat(arr2);

console.log(result);
//includes
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Banana"));
//indexof()
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.indexOf("Mango"));
//slice()
let numbers = [10, 20, 30, 40, 50];

let result = numbers.slice(1, 4);

console.log(result);
//splice
let fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1, "Orange");

console.log(fruits);
//reverse
let numbers = [1, 2, 3, 4];

numbers.reverse();

console.log(numbers);
//sort()
let numbers = [4, 2, 1, 3];

numbers.sort();

console.log(numbers);
//map()
let numbers = [1, 2, 3];

let result = numbers.map(num => num * 2);

console.log(result);
//filter
let numbers = [1, 2, 3, 4, 5];

let even = numbers.filter(num => num % 2 === 0);

console.log(even);
//reduce
let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum);
//find()
let numbers = [10, 20, 30, 40];

let result = numbers.find(num => num > 20);

console.log(result);