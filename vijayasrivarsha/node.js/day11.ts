// Enum
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Manager = "MANAGER"
}

// Interface
interface Employee {
    id: number;
    name: string;
    role: Role;
}

// Class
class Person {
    constructor(
        public id: number,
        public name: string
    ) {}

    display(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
    }
}

// Inheritance
class Developer extends Person {
    constructor(
        id: number,
        name: string,
        public skill: string
    ) {
        super(id, name);
    }

    display(): void {
        super.display();
        console.log(`Skill: ${this.skill}`);
    }
}

// Generic Class
class DataStore<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

// Generic Function
function printLength<T extends { length: number }>(
    value: T
): void {
    console.log("Length:", value.length);
}

// Employee Object
const emp: Employee = {
    id: 101,
    name: "John",
    role: Role.Admin
};

console.log("Employee:");
console.log(emp);

// Developer Object
const dev = new Developer(
    1,
    "Alice",
    "TypeScript"
);

console.log("\nDeveloper:");
dev.display();

// Generic Example
const store = new DataStore<string>();

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
let bonus: number | null = null;

console.log("\nBonus:");
console.log(bonus ?? 5000);