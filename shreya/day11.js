// 1. ARRAY BUFFER
const buffer = new ArrayBuffer(16);
console.log("Buffer Size:", buffer.byteLength);
// 2. TYPED ARRAYS
// Int8Array
const int8 = new Int8Array(buffer);
int8[0] = 10;
int8[1] = 20;
int8[2] = 30;
console.log("Int8Array:", int8);
// Uint8Array
const uint8 = new Uint8Array(buffer);
console.log("Uint8Array:", uint8);
// Float32Array
const floatArray = new Float32Array(3);
floatArray[0] = 1.5;
floatArray[1] = 2.5;
floatArray[2] = 3.5;
console.log("Float32Array:", floatArray);
// 3. TYPED ARRAY METHODS
const numbers = new Int16Array([10, 20, 30, 40, 50]);
console.log("Original:", numbers);
// forEach
numbers.forEach(value => {
    console.log("forEach:", value);
});
// map
const doubled = numbers.map(value => value * 2);
console.log("map:", doubled);
// filter
const filtered = numbers.filter(value => value > 20);
console.log("filter:", filtered);
// find
const found = numbers.find(value => value === 30);
console.log("find:", found);
// reduce
const sum = numbers.reduce((a, b) => a + b, 0);
console.log("reduce:", sum);
// slice
console.log("slice:", numbers.slice(1, 4));
// includes
console.log("includes 40:", numbers.includes(40));
// indexOf
console.log("indexOf 30:", numbers.indexOf(30));
// 4. TYPED ARRAY REFERENCE
const sharedBuffer = new ArrayBuffer(8);
const view1 = new Uint8Array(sharedBuffer);
const view2 = new Int16Array(sharedBuffer);
view1[0] = 100;
view1[1] = 50;
console.log("View1:", view1);
console.log("View2:", view2);
console.log("Both arrays share the same memory");
// 5. DATAVIEW
const buffer2 = new ArrayBuffer(8);
const dataView = new DataView(buffer2);
// Writing data
dataView.setInt8(0, 127);
dataView.setInt16(1, 300);
dataView.setFloat32(3, 3.14);
// Reading data
console.log("Int8:", dataView.getInt8(0));
console.log("Int16:", dataView.getInt16(1));
console.log("Float32:", dataView.getFloat32(3));
// 6. ATOMICS
const sharedArrayBuffer = new SharedArrayBuffer(4);
const sharedArray = new Int32Array(sharedArrayBuffer);
sharedArray[0] = 10;
console.log("Initial:", sharedArray[0]);
Atomics.add(sharedArray, 0, 5);
console.log("After Add:", sharedArray[0]);
Atomics.sub(sharedArray, 0, 2);
console.log("After Sub:", sharedArray[0]);
Atomics.store(sharedArray, 0, 100);
console.log("After Store:", sharedArray[0]);
console.log("Load:", Atomics.load(sharedArray, 0));
Atomics.compareExchange(sharedArray, 0, 100, 200);
console.log("After CompareExchange:", sharedArray[0]);
// META PROGRAMMING
// Object Creation
const employee = {
    id: 101,
    name: "Shreya",
    department: "IT"
};
console.log(employee);
// Inspect Properties
console.log("Keys:", Object.keys(employee));
console.log("Values:", Object.values(employee));
console.log("Entries:", Object.entries(employee));
// Add Property Dynamically
employee.salary = 50000;
console.log("After Adding Salary:", employee);
// Modify Property Dynamically
employee.department = "Development";
console.log("After Modification:", employee);
// Delete Property Dynamically
delete employee.salary;
console.log("After Delete:", employee);
// REFLECT API
const student = {
    name: "Rahul",
    age: 21
};
// Reflect.get()
console.log(
    "Name:",
    Reflect.get(student, "name")
);
// Reflect.set()
Reflect.set(student, "age", 22);
console.log(
    "Updated Age:",
    student.age
);
// Reflect.has()
console.log(
    "Has age?",
    Reflect.has(student, "age")
);
// Reflect.deleteProperty()
Reflect.deleteProperty(student, "age");
console.log(
    "After Delete:",
    student
);
// REFLECT DEFINE PROPERTY
const product = {};
Reflect.defineProperty(
    product,
    "price",
    {
        value: 1000,
        writable: true,
        enumerable: true
    }
);
console.log(product);
// REFLECT.OWNKEYS()
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2025
};
console.log(
    Reflect.ownKeys(car)
);
// REFLECT.CONSTRUCT()
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const p1 =
    Reflect.construct(
        Person,
        ["Shreya", 22]
    );
console.log(p1);
// PROXY BASICS
const target = {
    name: "JavaScript"
};
const proxy =
new Proxy(target, {});
console.log(proxy.name);
// GET TRAP
const user = {
    username: "admin"
};
const userProxy =
new Proxy(user, {
    get(target, property) {
        console.log(
            `Reading ${property}`
        );
        return target[property];
    }
});
console.log(userProxy.username);
// SET TRAP
const account = {};
const accountProxy =
new Proxy(account, {
    set(target, property, value) {
        console.log(
            `Setting ${property} = ${value}`
        );
        target[property] = value;
        return true;
    }
});
accountProxy.balance = 5000;
console.log(account);
// VALIDATION USING PROXY
const person = {};
const personProxy =
new Proxy(person, {
    set(target, property, value) {
        if (
            property === "age" &&
            value < 0
        ) {
            throw new Error(
                "Age cannot be negative"
            );
        }
        target[property] = value;
        return true;
    }
});
personProxy.age = 25;
console.log(personProxy);
// DELETE PROPERTY TRAP
const data = {
    name: "NodeJS"
};
const dataProxy =
new Proxy(data, {
    deleteProperty(
        target,
        property
    ) {
        console.log(
            `${property} deleted`
        );
        delete target[property];
        return true;
    }
});
delete dataProxy.name;
console.log(data);
// HAS TRAP
const course = {
    title: "JavaScript"
}; const courseProxy 
new Proxy(course, {
    has(target, property) {
        console.log(
            `Checking ${property}`
        );
        return property in target;
    }
});
console.log(
    "title" in courseProxy
);
// APPLY TRAP
function multiply(a, b) {
    return a * b;
}
const multiplyProxy =
new Proxy(multiply, {
    apply(
        target,
        thisArg,
        argumentsList
    ) {
        console.log(
            "Function Called"
        );
        return Reflect.apply(
            target,
            thisArg,
            argumentsList
        );
    }
});
console.log(
    multiplyProxy(5, 4)
);
// CONSTRUCT TRAP
console.log("\nCONSTRUCT TRAP");
function Employee(name) {
    this.name = name;
}
const EmployeeProxy =
new Proxy(Employee, {
    construct(
        target,
        args
    ) {
        console.log(
            "Constructor Called"
        );
        return new target(...args);
    }
});
const emp =
new EmployeeProxy("Shreya");
console.log(emp);
// REFLECT + PROXY
const bank = {
    accountNo: 12345,
    balance: 10000
};
const bankProxy =
new Proxy(bank, {
    get(target, property) {
        console.log(
            `Getting ${property}`
        );
        return Reflect.get(
            target,
            property
        );
    },
    set(target, property, value) {
        console.log(
            `Setting ${property}`
        );
        return Reflect.set(
            target,
            property,
            value
        );
    }
});
console.log(
    bankProxy.balance
);
bankProxy.balance = 20000;
console.log(
    bankProxy.balance
);
