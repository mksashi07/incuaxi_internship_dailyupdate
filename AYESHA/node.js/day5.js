// NODE.JS - V8 ENGINE, ARCHITECTURE,
// EVENT LOOP (Single File Example)
// Run: node app.js

// 1. NODE V8 ENGINE
console.log("===== V8 ENGINE =====");
let num = 10;
function square(x){
    return x * x;
}
console.log("Square:", square(num));

// 2. NODE ARCHITECTURE
// Example using File System
console.log("\n===== NODE ARCHITECTURE =====");
const fs = require("fs");
console.log("Reading file started...");
fs.writeFile(
    "sample.txt",
    "Hello Node Architecture",
    (err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(
            "File created successfully"
        );
        fs.readFile(
            "sample.txt",
            "utf8",
            (err,data)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(
                    "File Data:",
                    data
                );
            }
        );
    }
);
console.log("Node continues executing");

// 3. NODE EVENT LOOP
console.log("\n===== EVENT LOOP =====");
console.log("Start");
setTimeout(()=>{
    console.log(
        "setTimeout executed"
    );
},0);
setImmediate(()=>{
    console.log(
        "setImmediate executed"
    );
});
process.nextTick(()=>{
    console.log(
        "nextTick executed"
    );
});
Promise.resolve()
.then(()=>{
    console.log(
        "Promise executed"
    );
});
console.log("End");

