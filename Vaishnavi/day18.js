//A Shallow Copy creates a new object, but nested objects or arrays are still referenced from the original object.
//Shallow Copy using Spread Operator
const student = {
    name: "Mounika",
    address: {
        city: "Anantapur"
    }
};

const copyStudent = { ...student };

copyStudent.name = "Vaishnavi";
copyStudent.address.city = "Hyderabad";

console.log(student);
console.log(copyStudent);

//Shallow Copy using Object.assign()
const employee = {
    id: 101,
    department: {
        name: "IT"
    }
};

const copyEmployee = Object.assign({}, employee);

copyEmployee.department.name = "HR";

console.log(employee.department.name);
console.log(copyEmployee.department.name);

//A Deep Copy creates a completely independent copy of an object including all nested objects and arrays.
//Deep Copy using structuredClone()
const student = {
    name: "Mounika",
    address: {
        city: "Anantapur"
    }
};

const deepCopy = structuredClone(student);

deepCopy.address.city = "Bangalore";

console.log(student.address.city);
console.log(deepCopy.address.city);

//Deep Copy using JSON Methods
const product = {
    name: "Laptop",
    details: {
        brand: "Dell"
    }
};

const deepCopy = JSON.parse(JSON.stringify(product));

deepCopy.details.brand = "HP";

console.log(product.details.brand);
console.log(deepCopy.details.brand);

//The this keyword refers to the object that is currently executing the function.
//this inside an Object
const student = {
    name: "Mounika",

    display() {
        console.log(this.name);
    }
};

student.display();

//this inside Constructor Function
function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

const emp1 = new Employee("Mounika", 50000);

console.log(emp1.name);
console.log(emp1.salary);

//this in Arrow Function
const person = {
    name: "Mounika",

    normalFunction: function () {
        console.log(this.name);
    },

    arrowFunction: () => {
        console.log(this.name);
    }
};

person.normalFunction();
person.arrowFunction();

//Event Delegation is a technique where a parent element handles events for its child elements using event bubbling.
//Event Delegation with Buttons
const container = document.getElementById("container");

container.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        console.log(event.target.innerText + " clicked");
    }
});

//Event Delegation with List Items
const menu = document.getElementById("menu");

menu.addEventListener("click", function(event) {

    if (event.target.tagName === "LI") {
        console.log("Selected:", event.target.textContent);
    }

});

const menu = document.getElementById("menu");

menu.addEventListener("click", function(event) {

    if (event.target.tagName === "LI") {
        console.log("Selected:", event.target.textContent);
    }

});
