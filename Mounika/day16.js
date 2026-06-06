// JavaScript apply() Method

console.log("JAVASCRIPT APPLY() METHOD");
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

employee.apply(
    emp1,
    ["CSE", "IncuAxi", 25000]
);

employee.apply(
    emp2,
    ["ECE", "Infosys", 35000]
);

employee.apply(
    emp3,
    ["EEE", "TCS", 45000]
);

function student(year, college) {

    console.log("Student Details");
    console.log("Student ID    : " + this.id);
    console.log("Student Name  : " + this.name);
    console.log("Branch        : " + this.branch);
    console.log("Year          : " + year);
    console.log("College       : " + college);
    console.log();
}

const student1 = {
    id: 1,
    name: "Mounika",
    branch: "CSE"
};

const student2 = {
    id: 2,
    name: "Anu",
    branch: "ECE"
};

student.apply(
    student1,
    ["3rd Year", "ABC College"]
);

student.apply(
    student2,
    ["2nd Year", "XYZ College"]
);

const person1 = {

    name: "Mounika",

    display: function () {

        console.log("Person Name : " + this.name);
        console.log("City        : " + this.city);
        console.log();
    }
};

const person2 = {
    name: "Rahul",
    city: "Hyderabad"
};

const person3 = {
    name: "Teja",
    city: "Vijayawada"
};

person1.display.apply(person2);
person1.display.apply(person3);

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

product.apply(
    product1,
    ["Electronics", 50000]
);

product.apply(
    product2,
    ["Electronics", 25000]
);

console.log("Definition:");
console.log("apply() invokes a function");
console.log("immediately and passes");
console.log("arguments as an array.");
console.log();

console.log("Syntax:");
console.log(
    "functionName.apply(thisArg,[arg1,arg2])"
);
console.log();

console.log("Purpose:");
console.log("1. Change this keyword");
console.log("2. Function borrowing");
console.log("3. Pass arguments as array");
console.log("4. Code reusability");
console.log("5. Immediate invocation");
console.log();

console.log("Difference Between call() and apply()");
console.log("call()  -> arguments individually");
console.log("apply() -> arguments in array");
console.log();

console.log("Program Completed Successfully");