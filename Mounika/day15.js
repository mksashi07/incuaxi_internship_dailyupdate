// JavaScript call() Method

console.log("JAVASCRIPT call() METHOD DEMO");
console.log();

function employee(department, company, salary) {
    console.log("Employee Details");
    console.log("Employee ID   : " + this.id);
    console.log("Employee Name : " + this.name);
    console.log("Department    : " + department);
    console.log("Company       : " + company);
    console.log("Salary        : " + salary);
    console.log();
}

const emp1 = {
    id: 101,
    name: "Mounika"
};

const emp2 = {
    id: 102,
    name: "Teja"
};

const emp3 = {
    id: 103,
    name: "Siri"
};

const emp4 = {
    id: 104,
    name: "Anu"
};

const emp5 = {
    id: 105,
    name: "Rahul"
};

employee.call(emp1, "CSE", "IncuAxi", 25000);
employee.call(emp2, "ECE", "Infosys", 35000);
employee.call(emp3, "EEE", "TCS", 40000);
employee.call(emp4, "IT", "Wipro", 30000);
employee.call(emp5, "AIML", "Accenture", 45000);

function student(year, college) {
    console.log("Student Details");
    console.log("Student ID     : " + this.id);
    console.log("Student Name   : " + this.name);
    console.log("Branch         : " + this.branch);
    console.log("Year           : " + year);
    console.log("College        : " + college);
    console.log();
}

const student1 = {
    id: 1,
    name: "Mounika",
    branch: "CSE"
};

const student2 = {
    id: 2,
    name: "Siri",
    branch: "ECE"
};

const student3 = {
    id: 3,
    name: "Teja",
    branch: "EEE"
};

student.call(student1, "3rd Year", "ABC College");
student.call(student2, "2nd Year", "XYZ College");
student.call(student3, "4th Year", "PQR College");

const person1 = {
    name: "Mounika",
    city: "Hyderabad",
    display: function () {
        console.log("Person Name : " + this.name);
        console.log("City        : " + this.city);
        console.log();
    }
};

const person2 = {
    name: "Anu",
    city: "Vijayawada"
};

const person3 = {
    name: "Rahul",
    city: "Visakhapatnam"
};

person1.display.call(person2);
person1.display.call(person3);

function product(category, price) {
    console.log("Product Details");
    console.log("Product ID   : " + this.id);
    console.log("Product Name : " + this.name);
    console.log("Category     : " + category);
    console.log("Price        : " + price);
    console.log();
}

const product1 = {
    id: 1001,
    name: "Laptop"
};

const product2 = {
    id: 1002,
    name: "Mobile"
};

const product3 = {
    id: 1003,
    name: "Headphones"
};

product.call(product1, "Electronics", 50000);
product.call(product2, "Electronics", 20000);
product.call(product3, "Accessories", 3000);

function book(author, year) {
    console.log("Book Details");
    console.log("Book ID      : " + this.id);
    console.log("Book Name    : " + this.title);
    console.log("Author       : " + author);
    console.log("Year         : " + year);
    console.log();
}

const book1 = {
    id: 1,
    title: "JavaScript Basics"
};

const book2 = {
    id: 2,
    title: "Node.js Guide"
};

const book3 = {
    id: 3,
    title: "MongoDB Concepts"
};

book.call(book1, "John", 2023);
book.call(book2, "David", 2024);
book.call(book3, "Smith", 2025);

console.log("Definition:");
console.log("call() invokes a function");
console.log("immediately and allows");
console.log("an object to be used as");
console.log("the value of this.");

console.log();

console.log("Syntax:");
console.log("functionName.call(thisArg,arg1,arg2)");

console.log();

console.log("Purpose:");
console.log("1. Change this keyword");
console.log("2. Function borrowing");
console.log("3. Code reusability");
console.log("4. Immediate invocation");
console.log("5. Object method sharing");

console.log();

console.log("Program Completed Successfully");