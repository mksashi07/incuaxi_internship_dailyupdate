// Function Declaration
function greet() {
    console.log("Hello from Function Declaration");
}
greet();

// Function Expression
const welcome = function () {
    console.log("Hello from Function Expression");
};
welcome();

// Arrow Function
const sayHi = () => {
    console.log("Hello from Arrow Function");
};
sayHi();

// Parameters
function add(a, b) {
    console.log("Sum:", a + b);
}
add(10, 20);

// Arguments
function showDetails(name, age) {
    console.log("Name:", name);
    console.log("Age:", age);
}
showDetails("Surya", 22);

// Return Statement
function multiply(a, b) {
    return a * b;
}
const result = multiply(5, 4);
console.log("Multiplication:", result);

// String Creation
let firstName = "Surya";
console.log(firstName);

// Template Literals
let city = "Anantapur";
console.log(`My name is ${firstName} and I am from ${city}`);

// String Methods
let text = "JavaScript Learning";
console.log("Length:", text.length);
console.log("Upper Case:", text.toUpperCase());
console.log("Lower Case:", text.toLowerCase());
console.log("Slice:", text.slice(0, 10));
console.log("Includes:", text.includes("JavaScript"));
console.log("Replace:", text.replace("Learning", "Course"));

// Creating Arrays
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

// Accessing Elements
console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);
console.log("Third Fruit:", fruits[2]);

// Updating Elements
fruits[1] = "Orange";
console.log("Updated Array:", fruits);

// Object Creation
const student = {
    name: "Surya",
    age: 22,
    course: "JavaScript",
    displayInfo: function () {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
};

// Object Properties
console.log(student.name);
console.log(student.age);
console.log(student.course);

// Object Method
student.displayInfo();

// getElementById()
const heading = document.getElementById("title");
console.log(heading);

// innerHTML
heading.innerHTML = "Welcome to JavaScript";

// textContent
heading.textContent = "Learning DOM";

// getElementsByClassName()
const paragraphs = document.getElementsByClassName("text");
console.log(paragraphs[0].textContent);
console.log(paragraphs[1].textContent);

// querySelector()
const firstBox = document.querySelector(".box");
console.log(firstBox.textContent);

// querySelectorAll()
const allBoxes = document.querySelectorAll(".box");
allBoxes.forEach(box => {
    console.log(box.textContent);
});