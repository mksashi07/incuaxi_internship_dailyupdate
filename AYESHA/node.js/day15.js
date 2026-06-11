/*---------------------------------------
1. VARIABLES
---------------------------------------*/
let name = "Sumana";
const country = "India";
var age = 22;

console.log(name, country, age);

/*---------------------------------------
2. DATA TYPES
---------------------------------------*/
let str = "JavaScript";
let num = 100;
let isActive = true;
let data = null;
let value;
let person = { id: 1 };
let colors = ["Red", "Blue"];

console.log(typeof str);
console.log(typeof num);
console.log(typeof isActive);
console.log(typeof value);

/*---------------------------------------
3. OPERATORS
---------------------------------------*/
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a > b);
console.log(a === b);

/*---------------------------------------
4. TEMPLATE LITERALS
---------------------------------------*/
console.log(`Hello ${name}, Welcome to ${country}`);

/*---------------------------------------
5. CONDITIONAL STATEMENTS
---------------------------------------*/
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

/*---------------------------------------
6. SWITCH
---------------------------------------*/
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other Day");
}

/*---------------------------------------
7. LOOPS
---------------------------------------*/

// For Loop
for (let i = 1; i <= 3; i++) {
    console.log("For:", i);
}

// While Loop
let count = 1;
while (count <= 3) {
    console.log("While:", count);
    count++;
}

/*---------------------------------------
8. FUNCTIONS
---------------------------------------*/
function add(x, y) {
    return x + y;
}

console.log(add(10, 20));

/*---------------------------------------
9. ARROW FUNCTION
---------------------------------------*/
const multiply = (x, y) => x * y;

console.log(multiply(5, 4));

/*---------------------------------------
10. ARRAY METHODS
---------------------------------------*/
const nums = [1, 2, 3, 4, 5];

nums.forEach(n => console.log("forEach:", n));

const doubled = nums.map(n => n * 2);
console.log(doubled);

const even = nums.filter(n => n % 2 === 0);
console.log(even);

const total = nums.reduce((acc, cur) => acc + cur, 0);
console.log(total);

/*---------------------------------------
11. OBJECTS
---------------------------------------*/
const student = {
    id: 1,
    name: "John",
    course: "JavaScript",

    display() {
        console.log(this.name);
    }
};

student.display();

/*---------------------------------------
12. DESTRUCTURING
---------------------------------------*/
const { id, course } = student;
console.log(id, course);

/*---------------------------------------
13. SPREAD OPERATOR
---------------------------------------*/
const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];
console.log(merged);

/*---------------------------------------
14. REST PARAMETER
---------------------------------------*/
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5));

/*---------------------------------------
15. STRING METHODS
---------------------------------------*/
let text = "JavaScript Revision";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.includes("Java"));

/*---------------------------------------
16. DATE
---------------------------------------*/
const today = new Date();

console.log(today);
console.log(today.getFullYear());

// 17. JSON
const user = {
    name: "Alex",
    age: 25
};

const jsonData = JSON.stringify(user);
console.log(jsonData);

const parsed = JSON.parse(jsonData);
console.log(parsed);