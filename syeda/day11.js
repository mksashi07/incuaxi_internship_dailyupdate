const fruits = new Set();

// Add values
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");
fruits.add("Apple"); // Duplicate ignored
console.log("Set:");
console.log(fruits);

// Check existence
console.log("\nHas Banana?", fruits.has("Banana"));

// Delete value
fruits.delete("Orange");

// ===== MAP =====
const students = new Map();

// Add key-value pairs
students.set(101, "John");
students.set(102, "Alice");
students.set(103, "Bob");

console.log("\nMap:");
console.log(students);

// Get value
console.log("\nStudent 102:", students.get(102));

// ===== ITERATION =====

// Iterate Set
console.log("\nIterating Set:");
for (const fruit of fruits) {
    console.log(fruit);
}

// Iterate Map Keys
console.log("\nMap Keys:");
for (const key of students.keys()) {
    console.log(key);
}

// Iterate Map Values
console.log("\nMap Values:");
for (const value of students.values()) {
    console.log(value);
}

// Iterate Map Entries
console.log("\nMap Entries:");
for (const [id, name] of students) {
    console.log(`ID: ${id}, Name: ${name}`);
}

// Convert Set to Array and use array iteration
const fruitArray = [...fruits];

console.log("\nArray Iteration:");
fruitArray.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});

// Iterate a String
const word = "JavaScript";

console.log("\nString Iteration:");
for (const char of word) {
    console.log(char);
}