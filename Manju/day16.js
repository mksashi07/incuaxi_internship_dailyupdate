// Meta Programming using Reflect

const student = {
    name: "Sravya",
    age: 21
};

// Get property value
console.log(Reflect.get(student, "name"));

// Set property value
Reflect.set(student, "age", 22);

console.log(student);

// Check if property exists
console.log(Reflect.has(student, "age"));

// Delete property
Reflect.deleteProperty(student, "age");

console.log(student);
const user = {
    name: "Manju",
    age: 20
};

const handler = {
    get(target, property) {
        console.log(`Accessing ${property}`);
        return target[property];
    },

    set(target, property, value) {
        console.log(`Setting ${property} to ${value}`);
        target[property] = value;
        return true;
    }
};

const proxyUser = new Proxy(user, handler);

// Access property
console.log(proxyUser.name);

// Modify property
proxyUser.age = 21;

console.log(proxyUser);
// Original Object
const product = {
    name: "Laptop",
    price: 50000
};

// Proxy Handler
const handler = {
    get(target, prop) {
        console.log(`Getting ${prop}`);
        return Reflect.get(target, prop);
    },

    set(target, prop, value) {
        console.log(`Updating ${prop} to ${value}`);
        return Reflect.set(target, prop, value);
    }
};

// Create Proxy
const proxyProduct = new Proxy(product, handler);

// Access property
console.log(proxyProduct.name);

// Modify property
proxyProduct.price = 55000;

// Display object
console.log(product);
const student = {
    name: "Sravya",
    age: 21
};

// Get property value
console.log(Reflect.get(student, "name"));

// Set property value
Reflect.set(student, "age", 22);

console.log(student);
const employee = {
    id: 101,
    department: "IT"
};

// Check if property exists
console.log(Reflect.has(employee, "department"));

// Delete property
Reflect.deleteProperty(employee, "department");

console.log(employee);
class Person {
    constructor(name) {
        this.name = name;
    }
}

// Create object using Reflect
const obj = Reflect.construct(Person, ["Manju"]);

console.log(obj);
const user = {
    name: "Manju",
    age: 20
};

// Get property
console.log("Name:", Reflect.get(user, "name"));

// Set property
Reflect.set(user, "age", 21);

// Check property
console.log("Has age?", Reflect.has(user, "age"));

// Delete property
Reflect.deleteProperty(user, "age");

// Display object
console.log(user);

// Function example
function multiply(a, b) {
    return a * b;
}

console.log("Multiplication:", Reflect.apply(multiply, null, [5, 4]));