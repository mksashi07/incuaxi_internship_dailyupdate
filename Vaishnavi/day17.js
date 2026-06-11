//Fetch API is a modern JavaScript API used to make HTTP requests to servers and retrieve data asynchronously. It returns a Promise.
//GET Request Example
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Error:", error);
  });

  //POST Request Example
  fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "JavaScript",
    body: "Fetch API Example"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

//Fetch Single User
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(user => {
    console.log("Name:", user.name);
    console.log("Email:", user.email);
  })
  .catch(error => console.log(error));

//API (Application Programming Interface) - An API is a set of rules that allows different software applications to communicate with each other.
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data));

  //Student API Data
  const students = [
  { id: 1, name: "Mounika" },
  { id: 2, name: "Ravi" }
];

console.log(students);

  //AJAX (Asynchronous JavaScript and XML)
  //AJAX is a technique that allows web pages to communicate with servers without reloading the entire page.
  //AJAX Example Using XMLHttpRequest
  const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};

xhr.send();

//Get User Data
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://jsonplaceholder.typicode.com/users/1"
);

xhr.onload = function () {
  console.log(xhr.responseText);
};

xhr.send();

//JavaScript Execution Context - An Execution Context is the environment in which JavaScript code is executed.
//Types of Execution Context
// Global Execution Context (GEC)
//Created when a JavaScript program starts.
var name = "Mounika";

function greet() {
  console.log("Hello");
}

greet();

//Function Execution Context (FEC) - Created whenever a function is called.
function add(a, b) {
  var result = a + b;
  console.log(result);
}

add(10, 20);

//Execution Context Example
var x = 10;

function first() {
  var y = 20;
  second();
}

function second() {
  var z = 30;
  console.log(z);
}

first();

//Nested Functions
var name = "JavaScript";

function outer() {
  var course = "Node.js";

  function inner() {
    console.log(name);
    console.log(course);
  }

  inner();
}

outer();

//Call Stack is a data structure that keeps track of function calls during program execution.
function one() {
  console.log("Function One");
}

function two() {
  one();
  console.log("Function Two");
}

two();

//Example
function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.log("Inside Third");
}

first();

//Call Stack Overflow Example
//Infinite Recursion
function test() {
  test();
}

test();

//Three Functions

function A() {
  console.log("A");
}

function B() {
  A();
  console.log("B");
}

function C() {
  B();
  console.log("C");
}

C();
