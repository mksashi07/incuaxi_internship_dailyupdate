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
console.log("util.format():", formattedText);
// util.types
console.log("\nutil.types Examples:");
console.log("Is Date?", util.types.isDate(new Date()));
console.log("Is Promise?", util.types.isPromise(Promise.resolve()));
console.log("Is RegExp?", util.types.isRegExp(/abc/));
// util.inspect()
const student = {
  name: "Shreya",
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
try {
  assert.strictEqual(10 + 10, 20);
  console.log("Assertion 1 Passed");
  assert.deepStrictEqual(
    { name: "Shreya" },
    { name: "Shreya" }
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
// dns-demo.js
// 1. DNS Lookup
dns.lookup("google.com", (err, address, family) => {
    if (err) {
        console.error("Lookup Error:", err.message);
        return;
    }
    console.log("1. DNS LOOKUP");
    console.log("IP Address:", address);
    console.log("IP Family:", family);
});
// 2. Resolve IPv4 Addresses
dns.resolve4("google.com", (err, addresses) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("2. IPv4 ADDRESSES");
    console.log(addresses);
});
// 3. Resolve IPv6 Addresses
dns.resolve6("google.com", (err, addresses) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("3. IPv6 ADDRESSES");
    console.log(addresses);
});
// 4. Reverse Lookup
dns.reverse("8.8.8.8", (err, hostnames) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("4. REVERSE LOOKUP");
    console.log(hostnames);
});
// 5. MX Records
dns.resolveMx("gmail.com", (err, records) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("5. MX RECORDS");
    console.table(records);
});
// 6. NS Records
dns.resolveNs("google.com", (err, records) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("6. NS RECORDS");
    console.log(records);
});
// 7. TXT Records
dns.resolveTxt("google.com", (err, records) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("7. TXT RECORDS");
    console.log(records);
});
// 8. CNAME Records
dns.resolveCname("www.github.com", (err, records) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("8. CNAME RECORDS");
    console.log(records);
});
// 9. SOA Record
dns.resolveSoa("google.com", (err, record) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("9. SOA RECORD");
    console.log(record);
});