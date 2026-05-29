//set() and get()

let person = new Map();

person.set("name", "Venky");
person.set("role", "Developer");

console.log(person.get("name"));
console.log(person.get("role"));

//has()

let user = new Map();

user.set("email", "test@gmail.com");

console.log(user.has("email"));
console.log(user.has("phone"));

let items = new Map();

items.set("pen", 10);
items.set("book", 5);

items.delete("pen");

console.log(items);

let fruits = new Map();

fruits.set("apple", 2);
fruits.set("banana", 4);

console.log(fruits.size);

let colors = new Map();

colors.set("red", "#ff0000");
colors.set("green", "#00ff00");

for(let [key, value] of colors) {
    console.log(key, value);
}

let student = new Map();

student.set("name", "Mounika");
student.set("age", 21);

console.log(student);


let user = new Map();

user.set("city", "Hyderabad");

console.log(user.get("city"));



//Math Methods
//1. Math.round()-Rounds a number to the nearest integer.
console.log(Math.round(4.6));
console.log(Math.round(4.4));
//2. Math.floor() - Rounds down to the nearest value
console.log(Math.floor(4.9));
//3. Math.ceil() - Rounds upto nearest ;
console.log(Math.ceil(4.1));
//4. Math.trunc() - Removes decimal point
console.log(Math.trunc(8.99));
//math.pow() - Returns power of a number.
console.log(Math.pow(2, 3));
//6. Math.sqrt() -Returns square root.
console.log(Math.sqrt(64));
//7. Math.cbrt() -Returns cube root.
console.log(Math.cbrt(27));
//8. Math.abs() -Returns positive value.
console.log(Math.abs(-25));
//9. Math.max() - Returns largest number.
console.log(Math.max(10, 20, 30, 5));
//10. Math.min() - Returns smallest number.
console.log(Math.min(10, 20, 30, 5));
//11. Math.random() - Generates random number between 0 and 1.
console.log(Math.random());
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);
//12. Math.PI  - Returns value of PI.
console.log(Math.PI);
//13. Math.sin() - Returns sine value.
console.log(Math.sin(0));
//14. Math.cos() - Returns cosine value.
console.log(Math.cos(0));
//15. Math.log() - Returns natural logarithm.
console.log(Math.log(1));
//Date & Time

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    console.log(hours + ":" + minutes + ":" + seconds);
}
showTime();
// JavaScript Sets Example
// Student Management System
// 1. Creating a Set
let students = new Set();

students.add("Thanmai");
students.add("Mounika");
students.add("Puneeth");

console.log("Student Set:");
console.log(students);


// 2. Adding Values
let courses = new Set();

courses.add("JavaScript");
courses.add("Node.js");
courses.add("React");
courses.add("MongoDB");

console.log("\nCourses:");
console.log(courses);


// 3. Duplicate Values are Not Allowed
let marks = new Set();

marks.add(95);
marks.add(95);
marks.add(88);

console.log("\nMarks Set:");
console.log(marks);


// 4. has() Method - Check Value Exists or Not
let fruits = new Set(["Apple", "Banana", "Mango"]);

console.log("\nChecking Fruits:");
console.log(fruits.has("Mango"));
console.log(fruits.has("Orange"));


// 5. delete() Method
let rollNumbers = new Set([101, 102, 103, 104]);

rollNumbers.delete(103);

console.log("\nRoll Numbers After Delete:");
console.log(rollNumbers);


// 6. clear() Method
let items = new Set(["Pen", "Book", "Bag"]);

items.clear();

console.log("\nItems After Clear:");
console.log(items);


// 7. size Property
let employees = new Set(["Thanmai", "Harish", "Pavithra"]);

console.log("\nTotal Employees:");
console.log(employees.size);


// 8. Looping Through a Set
let cities = new Set(["Hyderabad", "Bangalore", "Chennai"]);

console.log("\nCities:");
for(let city of cities) {
    console.log(city);
}


// 9. Converting Array to Set
// Used to Remove Duplicate Values
let numbers = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers = new Set(numbers);

console.log("\nUnique Numbers:");
console.log(uniqueNumbers);


// 10. Converting Set to Array
let setData = new Set([10, 20, 30]);

let arrayData = [...setData];

console.log("\nArray Data:");
console.log(arrayData);


// 11. Complete Set Example
let studentNames = new Set();

// Adding Students
studentNames.add("Thanmai");
studentNames.add("Mounika");
studentNames.add("Puneeth");
studentNames.add("Niharika");
studentNames.add("Thanmai"); // Duplicate ignored

console.log("\nStudent Names:");
console.log(studentNames);


// Check Student
console.log("\nChecking Student:");
console.log(studentNames.has("Thanmai"));


// Delete Student
studentNames.delete("Puneeth");


// Loop Through Students
console.log("\nStudent List:");
for(let student of studentNames) {
    console.log(student);
}


// Total Students
console.log("\nTotal Students:");
console.log(studentNames.size);