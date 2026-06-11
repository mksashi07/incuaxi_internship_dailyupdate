const fs = require("fs");
const fsPromises = require("fs").promises;
const https = require("https");

console.log("Start");

// 1. setTimeout (Async)
setTimeout(() => {
    console.log("1. setTimeout executed");
}, 2000);

// 2. Callback (fs.readFile)
fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) {
        console.log("2. Error reading file:", err.message);
        return;
    }
    console.log("2. File content (callback):", data);
});

// 3. Promise (fs.promises)
fsPromises.readFile("test.txt", "utf8")
    .then(data => {
        console.log("3. File content (promise):", data);
    })
    .catch(err => {
        console.log("3. Error (promise):", err.message);
    });

// 4. Async/Await
async function readFileAsync() {
    try {
        const data = await fsPromises.readFile("test.txt", "utf8");
        console.log("4. File content (async/await):", data);
    } catch (err) {
        console.log("4. Error (async/await):", err.message);
    }
}
readFileAsync();

// 5. HTTP Request (Async)
https.get("https://jsonplaceholder.typicode.com/posts/1", (res) => {
    let data = "";

    res.on("data", chunk => {
        data += chunk;
    });

    res.on("end", () => {
        console.log("5. API Response:", JSON.parse(data));
    });
});

console.log("End");

const fs = require("fs");

console.log("Start");
//file system

// 1. Create a folder (mkdir)
fs.mkdir("myFolder", { recursive: true }, (err) => {
    if (err) {
        console.log("Error creating folder:", err.message);
        return;
    }
    console.log("1. Folder created");

    // 2. Write a file (writeFile)
    fs.writeFile("myFolder/test.txt", "Hello World\n", (err) => {
        if (err) {
            console.log("Error writing file:", err.message);
            return;
        }
        console.log("2. File written");

        // 3. Append to file (appendFile)
        fs.appendFile("myFolder/test.txt", "This is appended text\n", (err) => {
            if (err) {
                console.log("Error appending file:", err.message);
                return;
            }
            console.log("3. File appended");

            // 4. Read file (readFile)
            fs.readFile("myFolder/test.txt", "utf8", (err, data) => {
                if (err) {
                    console.log("Error reading file:", err.message);
                    return;
                }
                console.log("4. File content:\n", data);

                // 5. Delete file (unlink)
                fs.unlink("myFolder/test.txt", (err) => {
                    if (err) {
                        console.log("Error deleting file:", err.message);
                        return;
                    }
                    console.log("5. File deleted");
                });
            });
        });
    });
});

console.log("End");