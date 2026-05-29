// 1. ARROW FUNCTIONS
// Normal Function
function add(a, b) {
  return a + b;
}
document.write(add(2, 3));
document.write("<br><br>");

// Arrow Function
const subtract = (a, b) => {
  return a - b;
};
document.write(subtract(10, 5));
document.write("<br><br>");

// Short Arrow Function
const multiply = (a, b) => a * b;
document.write(multiply(5, 2));
document.write("<br><br>");

// 2. TEMPLATE LITERALS
let name = "Surya";
let age = 22;

// Normal String
document.write("Hello " + name);
document.write("<br><br>");

// Template Literal
document.write(`Hello ${name}`);
document.write("<br><br>");

// Multiple Variables
document.write(`My name is ${name} and I am ${age} years old`);
document.write("<br><br>");


// 3. ARRAY DESTRUCTURING
let colors = ["Red", "Blue", "Green"];

// Without Destructuring
let firstColor = colors[0];
let secondColor = colors[1];
document.write(firstColor);
document.write("<br>");
document.write(secondColor);
document.write("<br><br>");

// With Destructuring
let [first, second] = colors;
document.write(first);
document.write("<br>");
document.write(second);
document.write("<br><br>");


// 4. OBJECT DESTRUCTURING
let student = {
  studentName: "Surya",
  studentAge: 22
};
let { studentName, studentAge } = student;
document.write(studentName);
document.write("<br>");
document.write(studentAge);
document.write("<br><br>");


// 5. SPREAD OPERATOR
// Copy Array
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
document.write(arr2);
document.write("<br><br>");

// Merge Arrays
let a = [1, 2];
let b = [3, 4];
let result = [...a, ...b];
document.write(result);
document.write("<br><br>");

// Copy Object
let user = {
  username: "Surya"
};
let newUser = {
  ...user,
  age: 22
};
document.write(newUser.username + " " + newUser.age);
document.write("<br><br>");


// 6. PROMISES
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task Completed");
  } else {
    reject("Task Failed");
  }
});

promise
  .then((result) => {
    document.write(result);
    document.write("<br><br>");
  })
  .catch((error) => {
    document.write(error);
  });


// 7. ASYNC / AWAIT
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Received");
    }, 2000);
  });
}
async function getData() {
  let result = await fetchData();
  document.write(result);
}
getData();
