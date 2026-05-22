//scopes in variables
let x=10;
function func(){
    let y=20;
    console.log(x,",",y);
}
//global and local variables
func();
let x=10;
function func1(){
    let y=15;
    console.log("Global variable",x);
    console.log("Local variable",y);
}
func1();
//global scope
const x = 10;

function fun1() {
    console.log(x);
}

fun1();
//local scope
function fun2(){
    let x = 10;
    console.log(x);
}

fun2();
//block scope
{
    var x = 10;
    const y = 20;
    let z = 30;
    
    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(x);
//lexical scope
function func1() {
    const x = 10;

    function func2() {
        const y = 20;
        console.log(`${x} ${y}`);
    }

    func2();
}

func1();
//module scope
export const number = 10;

export function add(a, b) {
  return a + b;
}
//stings
//length
let s = 'JavaScript';
let len = s.length;

console.log("String Length: " + len);
//concatenation
let s1 = 'Java';
let s2 = 'Script';
let res = s1 + s2;

console.log("Concatenated String: " + res);
//escape characters
const s1 = "\'GfG\' is a learning portal";
const s2 = "\"GfG\" is a learning portal";
const s3 = "\\GfG\\ is a learning portal";

console.log(s1);
console.log(s2);
console.log(s3);
//substring
let s1 = 'JavaScript Tutorial';
let s2 = s1.substring(0, 10);

console.log(s2);
//upper and lower cases
let s = 'JavaScript';
let uCase = s.toUpperCase();
let lCase = s.toLowerCase();

console.log(uCase);
console.log(lCase);
//searching
let s1 = 'def abc abc';
let i = s1.indexOf('abc');

console.log(i);
//objects
//1 creation using object literals
let obj = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log(obj);
//output:{"name":"Sourav","age":23,"job":"Developer"}
// 2 creation  using new object()constructor
 let obj = new Object();
obj.name= "Sourav",
obj.age= 23.
obj.job= "Developer";

console.log(obj);
//output:{"name":"Sourav","age":23,"job":"Developer"}
 //object properies
 let obj = { name: "Sourav", age: 23 };
console.log(obj.name);
console.log(obj["age"]);
//modified object properties
let obj = { name: "Sourav", age: 22 };
console.log(obj);
obj.age = 23;
console.log(obj);
//adding properties
let obj = { model: "Tesla" };
obj.color = "Red";
console.log(obj);
//removing properties
let obj = { model: "Tesla", color: "Red" };
delete obj.color;
console.log(obj);
//arrays
let a = ["red", "green", "blue"];
console.log(a);
//creating an array
let a = [];
console.log(a);
let b = [10, 20, 30];
console.log(b);
//creat an arra using new keyword
let a = new Array(10, 20, 30);
console.log(a);
//accesing elements of an array
let emotions = ["HAPPY", "ANGRY", "IRRITATION"];
console.log(emotions[0]);
console.log(emotions[1]);
//first and last element
let a = ["breakfast", "lunch", "dinner"];
let first = a[0];
console.log("First Item: ", first);
let last = a[a.length-1];
console.log("last element: " ,last);
//adding an element
let a = ["HTML", "CSS", "JS"];
a.push("Node.js");
a.unshift("Web Development");
console.log(a);
//removing
let a = ["HTML", "CSS", "JS"];
console.log("Original Array: " + a);
let lst = a.pop();
console.log("After Removing the last: " + a);
let fst = a.shift();
console.log("After Removing the First: " + a);
a.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a);
//length
let a = ["HTML", "CSS", "JS"];
let len = a.length;
console.log("Array Length: " + len);
//iterations of ana array
let a = ["HTML", "CSS", "JS"];
let len = a.length;
console.log("Array Length: " + len);
let a = ["HTML", "CSS", "JS", "React"];
let b = ["Node.js", "Express.js"];
let concateArray = a.concat(b);
console.log("Concatenated Array: ", concateArray);
//converion array to string
let a = ["HTML", "CSS", "JS"];
console.log(a.toString());
//sort
const fruits =["appale","grapes","orange"];
fruits.sort();
fruits.reverse();
//functions
function greet(name) { 
  console.log("Hello " + name);
}
greet("Alice"); 
//types of functions
//named function
 function greet() {
  return "Hello!";
}
console.log(greet());
//anonymous fnction
const greet = function() {
  return "Hi there!";
};
console.log(greet());
//function expression
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3));
//arrow function
const square = n => n * n;
console.log(square(4));