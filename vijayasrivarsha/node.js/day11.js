"use strict";
// Enum
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Manager"] = "MANAGER";
})(Role || (Role = {}));
// Class
class Person {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
    }
}
// Inheritance
class Developer extends Person {
    skill;
    constructor(id, name, skill) {
        super(id, name);
        this.skill = skill;
    }
    display() {
        super.display();
        console.log(`Skill: ${this.skill}`);
    }
}
// Generic Class
class DataStore {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
// Generic Function
function printLength(value) {
    console.log("Length:", value.length);
}
// Employee Object
const emp = {
    id: 101,
    name: "John",
    role: Role.Admin
};
console.log("Employee:");
console.log(emp);
// Developer Object
const dev = new Developer(1, "Alice", "TypeScript");
console.log("\nDeveloper:");
dev.display();
// Generic Example
const store = new DataStore();
store.add("Node.js");
store.add("React");
store.add("TypeScript");
console.log("\nStored Data:");
console.log(store.getAll());
// Generic Function Example
console.log("\nLength Examples:");
printLength("Hello World");
printLength([1, 2, 3, 4, 5]);
// Optional Chaining
const company = {
    manager: {
        name: "Robert"
    }
};
console.log("\nManager Name:");
console.log(company?.manager?.name);
// Nullish Coalescing
let bonus = null;
console.log("\nBonus:");
console.log(bonus ?? 5000);
