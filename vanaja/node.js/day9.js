// assert + readline 
const assert = require("assert");
const readline = require("readline");

// Assert Module Examples
try {
    assert.strictEqual(2 + 2, 4);
    console.log("Assertion 1 Passed");

    assert.notStrictEqual(5, "5");
    console.log("Assertion 2 Passed");

    assert.deepStrictEqual(
        { name: "Vanaja", age: 21 },
        { name: "Vanaja", age: 21 }
    );
    console.log("Assertion 3 Passed");

} catch (err) {
    console.error("Assertion Failed:", err.message);
}

// Readline Module
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {

    rl.question("Enter your age: ", (age) => {

        console.log("\nUser Details");
        console.log("Name:", name);
        console.log("Age:", age);

        try {
            assert.ok(name.length > 0, "Name cannot be empty");
            assert.ok(Number(age) > 0, "Age must be greater than 0");

            console.log("\nValidation Successful");
        } catch (err) {
            console.log("\nValidation Error:", err.message);
        }

        rl.close();
    });
});

rl.on("close", () => {
    console.log("\nProgram Ended");
});
// URL Module - Complete Example

const myUrl = new URL(
  "https://www.example.com/products/mobile?id=101&name=iPhone&price=50000"
);

// Complete URL
console.log("Full URL:", myUrl.href);

// Protocol
console.log("Protocol:", myUrl.protocol);

// Hostname
console.log("Hostname:", myUrl.hostname);

// Host
console.log("Host:", myUrl.host);

// Pathname
console.log("Pathname:", myUrl.pathname);

// Search String
console.log("Search:", myUrl.search);

// Query Parameters
console.log("ID:", myUrl.searchParams.get("id"));
console.log("Name:", myUrl.searchParams.get("name"));
console.log("Price:", myUrl.searchParams.get("price"));

// Add New Query Parameter
myUrl.searchParams.append("brand", "Apple");

// Update Existing Parameter
myUrl.searchParams.set("price", "60000");

// Delete Parameter
myUrl.searchParams.delete("id");

// Check Parameter Exists
console.log("Has Name:", myUrl.searchParams.has("name"));

// Loop Through All Parameters
console.log("\nAll Query Parameters:");
for (const [key, value] of myUrl.searchParams) {
    console.log(`${key}: ${value}`);
}

// Updated URL
console.log("\nUpdated URL:");
console.log(myUrl.href);