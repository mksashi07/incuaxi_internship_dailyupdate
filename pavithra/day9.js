// JAVASCRIPT SCOPES, ITERATIONS,
// OBJECTS AND MAPS COMPLETE DEMO
console.log("JAVASCRIPT DEMO START");
// 1. SCOPES
let globalVariable = "I am Global";
console.log("\nGlobal Scope");
console.log(globalVariable);
function functionScopeDemo() {
    let functionVariable =
        "I am Function Scope";
    console.log(functionVariable);
    console.log(globalVariable);
}
functionScopeDemo();
// Block Scope
{
    let blockVariable =
        "I am Block Scope";
    const blockConstant =
        "Block Constant";
    console.log(blockVariable);
    console.log(blockConstant);
}
// Nested Scope
function outerFunction() {
    let outer = "Outer Variable";
    function innerFunction() {
        let inner = "Inner Variable";
        console.log(outer);
        console.log(inner);
    }
    innerFunction();
}
outerFunction();
// FOR LOOP
console.log("\nFor Loop");
for (let x = 1; x <= 5; x++) {
    console.log(x);
}
// WHILE LOOP
console.log("\nWhile Loop");
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}
// DO WHILE LOOP
console.log("\nDo While Loop");
let number = 1;
do {
    console.log(number);
    number++;
}
while (number <= 5);
// Array Iterations
let fruits =
[
    "Apple",
    "Banana",
    "Orange",
    "Mango"
];
console.log("\nfor...of");
for (let fruit of fruits) {
    console.log(fruit);
}
// forEach
console.log("\nforEach");
fruits.forEach(function(item, index) {
    console.log(index, item);
});
// OBJECTS
console.log("\nOBJECTS");
const student = {
    id: 101,
    name: "Ravi",
    age: 21,
    city: "Hyderabad",
    display() {
        console.log(
            this.name +
            " from " +
            this.city
        );
    }
};
console.log(student);
console.log(student.name);
console.log(student.age);
student.display();
// Update Object
student.age = 22;
student.course = "JavaScript";
console.log(student);
// Nested Object
const employee = {
    empId: 1001,
    name: "Mounika",
    address: {
        city: "Anantapur",
        state: "Andhra Pradesh"
    },
    salary: 50000
};
console.log(employee);
console.log(employee.address.city);
console.log(employee.address.state);
// Object Methods
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    }
};
console.log(
    calculator.add(10, 20)
);
console.log(
    calculator.subtract(20, 5)
);
console.log(
    calculator.multiply(5, 5)
);
// MAPS
console.log("\nMAPS");
const studentsMap = new Map();
// Add Data
studentsMap.set(1, "Ravi");
studentsMap.set(2, "Sita");
studentsMap.set(3, "Ram");
studentsMap.set(4, "Krishna");
// Display Map
console.log(studentsMap);
// Get Value
console.log(
    studentsMap.get(2)
);
// Check Key
console.log(
    studentsMap.has(3)
);
// Map Size
console.log(
    studentsMap.size
);
// Iterate Map
console.log("\nMap Entries");
for (let [key, value]
    of studentsMap) {
    console.log(
        key,
        value
    );
}
// Keys
console.log("\nMap Keys");
for (let key
    of studentsMap.keys()) {
    console.log(key);
}
//Array of Object
console.log(
    "\nArray of Objects"
);
const employees = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "David"
    },
    {
        id: 3,
        name: "Alex"
    }
];
employees.forEach(emp => {
    console.log(
        emp.id,
        emp.name
    );
});
