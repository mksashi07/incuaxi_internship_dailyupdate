//conditions
//if condition

h==10
if (h <11) {
  greeting = "Good day";
}
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
//(condition) ? expression1 : expression2
let isTrue = true;
let discount = isTrue? 0.2 : 0;
let marksList = [75, 45, 92, 60, 30, 88];

for (let i = 0; i < marksList.length; i++) {

    let marks = marksList[i];

    // continue example
    if (marks < 35) {
        console.log("Student Failed");
        continue;
    }

    // break example
    if (marks === 92) {
        console.log("Topper Marks Found");
        break;
    }

    if (marks >= 90) {
        console.log("Grade A");
    } else if (marks >= 60) {
        console.log("Grade B");
    } else {
        console.log("Grade C");
    }
}
//loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//funtion
function add(a, b) {
    return a + b;
}

console.log(add(5, 3));

const square = (n) => n * n;

console.log(square(4));
//hoisting
console.log(x); // undefined

var x = 10;

console.log(x);
//object
let student = {
    name: "Vishnu",
    age: 19,
    course: "B.Tech"
};

console.log(student.name);
console.log(student.age);
//data object
let today = new Date();

console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth() + 1);
//arrays
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);

fruits.push("Orange");

console.log(fruits);
//set
let numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(10);

console.log(numbers);
//map
let map = new Map();

map.set("name", "Vishnu");
map.set("age", 19);

console.log(map.get("name"));
//math module
console.log(Math.sqrt(25));
console.log(Math.max(10, 20, 30));
console.log(Math.random());
//Regular Expression
let text = "JavaScript";

let pattern = /Script/;

console.log(pattern.test(text));
//Error Handling
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("Error occurred");
} finally {
    console.log("Completed");
}//Type casting
let num = "100";

console.log(typeof num);

num = Number(num);

console.log(typeof num);