console.log("===== JavaScript apply() Method Complete Program =====\n");

const employee1 = {
    id: 101,
    name: "Mounika",
    department: "CSE"
};

const employee2 = {
    id: 102,
    name: "Teja",
    department: "ECE"
};

function employeeDetails(city, state, salary) {
    console.log("Employee ID :", this.id);
    console.log("Employee Name :", this.name);
    console.log("Department :", this.department);
    console.log("City :", city);
    console.log("State :", state);
    console.log("Salary :", salary);
    console.log();
}

employeeDetails.apply(employee1, ["Hyderabad", "Telangana", 50000]);
employeeDetails.apply(employee2, ["Bangalore", "Karnataka", 60000]);

console.log("Function Borrowing Example\n");

const student1 = {
    rollNo: 1,
    name: "Ravi",
    branch: "CSE"
};

const student2 = {
    rollNo: 2,
    name: "Priya",
    branch: "ECE"
};

function displayStudent(college) {
    console.log("Roll No :", this.rollNo);
    console.log("Name :", this.name);
    console.log("Branch :", this.branch);
    console.log("College :", college);
    console.log();
}

displayStudent.apply(student1, ["ABC Engineering College"]);
displayStudent.apply(student2, ["XYZ Engineering College"]);

console.log("Math.max() Using apply()\n");

const marks = [78, 92, 85, 99, 67, 88];

const highestMark = Math.max.apply(null, marks);

console.log("Marks Array :", marks);
console.log("Highest Mark :", highestMark);
console.log();

console.log("Math.min() Using apply()\n");

const lowestMark = Math.min.apply(null, marks);

console.log("Lowest Mark :", lowestMark);
console.log();

console.log("Calculator Example\n");

function calculate(a, b, c) {
    console.log("Numbers :", a, b, c);
    console.log("Sum :", a + b + c);
    console.log("Average :", (a + b + c) / 3);
    console.log();
}

const numbers = [10, 20, 30];

calculate.apply(null, numbers);

console.log("Library Example\n");

const library = {
    libraryName: "Central Library"
};

function bookDetails(bookName, author, year) {
    console.log("Library :", this.libraryName);
    console.log("Book :", bookName);
    console.log("Author :", author);
    console.log("Year :", year);
    console.log();
}

bookDetails.apply(library, [
    "JavaScript Basics",
    "John Smith",
    2025
]);

console.log("Product Example\n");

const product = {
    category: "Electronics"
};

function productInfo(name, price, brand) {
    console.log("Category :", this.category);
    console.log("Product :", name);
    console.log("Price :", price);
    console.log("Brand :", brand);
    console.log();
}

productInfo.apply(product, [
    "Laptop",
    55000,
    "Dell"
]);

console.log("Addition Example\n");

function addNumbers(a, b, c, d, e) {
    console.log("Total :", a + b + c + d + e);
    console.log();
}

const values = [10, 20, 30, 40, 50];

addNumbers.apply(null, values);

console.log("Array Push Example\n");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

Array.prototype.push.apply(arr1, arr2);

console.log("Merged Array :", arr1);
console.log();

console.log("Greeting Example\n");

const person = {
    name: "Mounika"
};

function greet(message, country) {
    console.log(message + " " + this.name);
    console.log("Country :", country);
    console.log();
}

greet.apply(person, ["Welcome", "India"]);

console.log("Program Completed Successfully");