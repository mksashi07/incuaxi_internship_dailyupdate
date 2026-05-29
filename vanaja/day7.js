//Es6
//1.Arrow Function
const square = n => n * n;
console.log(square(2));
//template literal
let name = "Ram";
console.log(`Hello ${name}`);
//3.destructuring
let person = {
   name: "Ram",
   age: 20
};
let {name, age} = person;
console.log(name); 
//Spread operator
let a = [1,2];
let b = [...a, 3];
console.log(b);

//closures
function outer() {
   let count = 0;
   return function() {
      count++;
      console.log(count);
   }
}
let result = outer();
result();
result();

//promises
let promise = new Promise((resolve, reject) => {
   resolve("Success");
});
//using .then()
promise.then(data => {
   console.log(data);
});
//with reject
let promise = new Promise((resolve, reject) => {
   reject("Error occurred");
});
promise.catch(error => {
   console.log(error);
});
//async/await
function getData() {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve("Data received");
      }, 2000);
   });
}
async function displayData() {
   let result = await getData();
   console.log(result);
}
displayData();
//fetch api
fetch("https://jsonplaceholder.typicode.com/users")
   .then(response => response.json())
   .then(data => console.log(data));
//fetch api with async/await
async function getUsers() {
   let response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
   );
   let data = await response.json();
   console.log(data);
}
getUsers();
//event looping
//call stack
function one() {
   console.log("One");
}
function two() {
   console.log("Two");
}
one();
two();
//example for event loop
console.log("Start");
setTimeout(() => {
   console.log("Timer");
}, 2000);
console.log("End");
