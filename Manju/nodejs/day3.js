const fs = require("fs");
const fsPromises = require("fs").promises;
// 1. writeFile() using CALLBACK
fs.writeFile("sample.txt", "Hello from Node.js!\n", (err) => {
  if (err) {
    console.log("Error while writing file:", err);
    return;
  }

  console.log("File created successfully!");
});
// 2. appendFile() using CALLBACK
fs.appendFile("sample.txt", "This line is appended.\n", (err) => {
  if (err) {
    console.log("Error while appending:", err);
    return;
  }
  console.log("Data appended successfully!");
});
// 3. readFile() using CALLBACK
fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error while reading file:", err);
    return;
  }

  console.log("\nFile Content using Callback:");
  console.log(data);
});
// 4. mkdir() using CALLBACK
fs.mkdir("DemoFolder", (err) => {
  if (err) {
    console.log("Folder creation error:", err.message);
    return;
  }

  console.log("Folder created successfully!");
});
// 5. unlink() using CALLBACK
// Deletes a file
// Uncomment after creating delete.txt
/*
fs.unlink("delete.txt", (err) => {
  if (err) {
    console.log("Error deleting file:", err);
    return;
  }

  console.log("File deleted successfully!");
});
*/
// 6. PROMISES Example
fsPromises
  .writeFile("promise.txt", "This file is created using Promises.\n")
  .then(() => {
    console.log("\nPromise File Created");

    return fsPromises.appendFile(
      "promise.txt",
      "Appending data using Promises.\n"
    );
  })
  .then(() => {
    console.log("Promise Data Appended");

    return fsPromises.readFile("promise.txt", "utf8");
  })
  .then((data) => {
    console.log("\nPromise File Content:");
    console.log(data);
  })
  .catch((err) => {
    console.log("Promise Error:", err);
  });
// 7. ASYNC / AWAIT Example
async function fileOperations() {
  try {
    // write file
    await fsPromises.writeFile(
      "async.txt",
      "Async/Await Example\n"
    );

    console.log("\nAsync File Created");
    // append data
    await fsPromises.appendFile(
      "async.txt",
      "Adding more content using async/await.\n"
    );
    console.log("Async Data Appended");

    // read file
    const data = await fsPromises.readFile(
      "async.txt",
      "utf8"
    );

    console.log("\nAsync File Content:");
    console.log(data);

  } catch (error) {
    // Error Handling
    console.log("Async/Await Error:", error);
  }
}
fileOperations();
// 8. Custom CALLBACK Function Example
function greet(name, callback) {
  console.log("\nHello " + name);

  callback();
}
function completed() {
  console.log("Callback function executed!");
}
greet("Manju", completed);


