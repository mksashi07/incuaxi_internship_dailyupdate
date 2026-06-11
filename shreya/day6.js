//methods slicing
let text="javascript";
let result=text.toUpperCase().slice(0,4);
console.log(result);
let numbers=[1,2,3,4,5];
let result=numbers.filter(num=>num%2===0).map(num=>num*10);
console.log(result);
//non-method slicing
let text="javascript";
let uppercase=text.toUpperCase();
let result=uppercase.slice(0,4);
console.log(result);
//logical operator
const temp=20;
if(temp>0 && temp <=30){
    console.log("the whether is good");
}
else{
    console.log("the whether is not good");
}
//strict inequality
const pi=3.14;
if(pi === "3.14"){
    console.log("that is pi");
}
else{
    console.log("that is not pi");
}
let username = "Shreya";

if (username === "Shreya") {
    console.log("Correct User");
} else {
    console.log("Wrong User");
}
//stictly inequality
let age = 18;

if (age !== 21) {
    console.log("Age is not 21");
}
//ternary statement
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);
//string search
//indexOf()
let text = "JavaScript is fun";
console.log(text.indexOf("is"));
//lastIndexOf()
let text = "Hello Hello";
console.log(text.lastIndexOf("Hello"));
//search()
let text = "I love JavaScript";
console.log(text.search("JavaScript"));
//match
let text = "Cats are cute";
console.log(text.match("cute"));
//matchAll()
let text = "car bus car bike";
let result = text.matchAll(/car/g);
for(let item of result) {
   console.log(item[0]);
}
//includes()
let text = "JavaScript";
console.log(text.includes("Script"));
//startWith()
let text = "Hello World";
console.log(text.startsWith("Hello"));
//endWith()
let text = "Hello World";
console.log(text.endsWith("World"));
//hoisting-------hoisting with var
console.log(a);
var a = 10;
console.log(a);
// Non-Hoisting with let
console.log(x);
let x = 20;//output:reference error
//array search
//indexOf()
let fruits = ["Apple", "Mango", "Banana", "Mango"];
console.log(fruits.indexOf("Mango"));
//lastIndexOf()
let fruits = ["Apple", "Mango", "Banana", "Mango"];
console.log(fruits.lastIndexOf("Mango"));
//include()
let numbers = [10, 20, 30];
console.log(numbers.includes(20));
//find()
let numbers = [5, 10, 15, 20];
let result = numbers.find(num => num > 10);
console.log(result);
//findIndex()
let numbers = [5, 10, 15, 20];
let result = numbers.findIndex(num => num > 10);
console.log(result);
//findLast()
let numbers = [10, 15, 20, 25];
let result = numbers.findLast(num => num > 15);
console.log(result);
//findLastIndex()
let numbers = [10, 15, 20, 25];
let result = numbers.findLastIndex(num => num > 15);
console.log(result);
//array sort
//alphabetic sort()
//sort()
let fruits = ["Banana", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
//array.sort()
let numbers = [40, 10, 30, 20];
numbers.sort();
console.log(numbers);
//array reverse()
let fruits = ["Apple", "Mango", "Banana"];
fruits.reverse();
console.log(fruits);
//array.tiSorted()
let numbers = [30, 10, 20];
let result = numbers.toSorted();
console.log(result);
console.log(numbers);
//array.toReversed()
let numbers = [1, 2, 3];
let result = numbers.toReversed();
console.log(result);
console.log(numbers);
//sorting objects
let students = [
   {name: "Ram", age: 22},
   {name: "Shreya", age: 19},
   {name: "Anu", age: 25}
];
students.sort((a, b) => a.age - b.age);
console.log(students);
//numeric.sort()
let numbers = [100, 25, 5, 40];
numbers.sort((a, b) => a - b);
console.log(numbers);
//descending numeric sort
let numbers = [100, 25, 5, 40];
numbers.sort((a, b) => a - b);
console.log(numbers);
//random sort()
let numbers = [1, 2, 3, 4, 5];
numbers.sort(() => Math.random() - 0.5);
console.log(numbers);
//math.min()
let numbers = [10, 5, 20, 3];
console.log(Math.min(...numbers));
//math.max()
let numbers = [10, 5, 20, 3];
console.log(Math.max(...numbers));
//array iteration
//forEach()
let numbers = [1, 2, 3];
numbers.forEach(function(num) {
    console.log(num);
});
//map()
let numbers = [1, 2, 3];
let result = numbers.map(function(num) {
    return num * 2;
});
console.log(result);
//flatmap()
let numbers = [1, 2, 3];
let result = numbers.flatMap(num => [num, num * 2]);
console.log(result);
//filter()
let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(even);
//reduce()
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);
console.log(sum);
//reduce right
let numbers = ["A", "B", "C"];
let result = numbers.reduceRight(function(total, num) {
    return total + num;
});
console.log(result);
//every()
let numbers = [2, 4, 6];
let result = numbers.every(function(num) {
    return num % 2 === 0;
});
console.log(result);
//some()
let numbers = [1, 3, 4];
let result = numbers.some(function(num) {
    return num % 2 === 0;
});
console.log(result);
//Array.from()
let text = "Hello";
let arr = Array.from(text);
console.log(arr);
//keys()
let fruits = ["Apple", "Banana", "Mango"];
let keys = fruits.keys();
for (let key of keys) {
    console.log(key);
}
//entries
let fruits = ["Apple", "Banana"];
let entries = fruits.entries();
for (let item of entries) {
    console.log(item);
}
//with()
let numbers = [10, 20, 30];
let newArray = numbers.with(1, 50);
console.log(newArray);
//set methods
//new set()
let numbers = new Set([1, 2, 3]);
console.log(numbers);
//add()
let fruits = new Set();
fruits.add("Apple");
fruits.add("Banana");
console.log(fruits);
//clear()
let numbers = new Set([1, 2, 3]);
numbers.clear();
console.log(numbers);
//delete()
let numbers = new Set([1, 2, 3]);
numbers.delete(2);
console.log(numbers);
//entries()
let fruits = new Set(["Apple", "Banana"]);
for (let item of fruits.entries()) {
    console.log(item);
}
//keys()
let fruits = new Set(["Apple", "Banana"]);
for (let key of fruits.keys()) {
    console.log(key);
}
//forEach()
let numbers = new Set([1, 2, 3]);
numbers.forEach(function(value) {
    console.log(value);
});
//has()
let fruits = new Set(["Apple", "Banana"]);
console.log(fruits.has("Apple"));
//values()
let fruits = new Set(["Apple", "Banana"]);
for (let value of fruits.values()) {
    console.log(value);
}
//size
let numbers = new Set([1, 2, 3, 4]);
console.log(numbers.size);