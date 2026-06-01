// IMPORT MODULES
const assert = require("assert");
const util = require("util");
const readline = require("readline");

// UTIL MODULE EXAMPLES

// util.format()
const formattedText = util.format(
  "Hello %s, your score is %d",
  "Ayesha",
  95
);

console.log("\n===== UTIL MODULE =====");
console.log("util.format():", formattedText);

// util.types
console.log("\nutil.types Examples:");
console.log("Is Date?", util.types.isDate(new Date()));
console.log("Is Promise?", util.types.isPromise(Promise.resolve()));
console.log("Is RegExp?", util.types.isRegExp(/abc/));

// util.inspect()
const student = {
  name: "Ayesha",
  age: 20,
  skills: ["Node.js", "JavaScript", "MongoDB"],
  address: {
    city: "Hindupur",
    state: "Andhra Pradesh"
  }
};

console.log("\nutil.inspect():");
console.log(util.inspect(student, { colors: true, depth: null }));

// util.promisify()
function addNumbers(a, b, callback) {
  setTimeout(() => {
    callback(null, a + b);
  }, 1000);
}

const addAsync = util.promisify(addNumbers);

// ASSERT MODULE EXAMPLES
console.log("\n===== ASSERT MODULE =====");

try {
  assert.strictEqual(10 + 10, 20);
  console.log("Assertion 1 Passed");

  assert.deepStrictEqual(
    { name: "Ayesha" },
    { name: "Ayesha" }
  );
  console.log("Assertion 2 Passed");

  assert.ok(true);
  console.log("Assertion 3 Passed");

  // This will fail intentionally
  assert.strictEqual(5 * 5, 20);
} catch (error) {
  console.log("Assertion Failed:");
  console.log(error.message);
}

// READLINE MODULE EXAMPLES

console.log("\n===== READLINE MODULE =====");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

// MAIN FUNCTION

async function main() {
  try {
    // util.promisify example
    const result = await addAsync(15, 25);

    console.log("\nPromisify Result:");
    console.log("15 + 25 =", result);

    // Readline inputs
    const name = await askQuestion("\nEnter your name: ");
    const age = await askQuestion("Enter your age: ");

    console.log("\n===== USER DETAILS =====");
    console.log(`Name : ${name}`);
    console.log(`Age  : ${age}`);

    // Assertions using user input
    try {
      assert.ok(name.length > 0, "Name should not be empty");
      assert.ok(Number(age) > 0, "Age must be greater than 0");

      console.log("\nUser data validation successful");
    } catch (err) {
      console.log("\nValidation Error:");
      console.log(err.message);
    }

  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    rl.close();
  }
}

// START PROGRAM

main();