// NODE.JS ADVANCED DEBUGGING

function debugLog(message) {
    const time = new Date().toLocaleTimeString();
    console.log(`[DEBUG ${time}] ${message}`);
}

debugLog("Application Started");

console.time("ArrayProcessing");

const numbers = [];

for (let i = 1; i <= 100000; i++) {
    numbers.push(i);
}

const total = numbers.reduce((sum, value) => sum + value, 0);

console.timeEnd("ArrayProcessing");

console.log("Total Sum :", total);

console.log("MEMORY USAGE");

if (performance.memory) {
    console.log("Used JS Heap :", performance.memory.usedJSHeapSize);
    console.log("Total JS Heap :", performance.memory.totalJSHeapSize);
}

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received Successfully");
        }, 2000);
    });
}

async function runAsyncTask() {
    try {
        debugLog("Fetching Data...");
        const result = await fetchData();
        debugLog(result);
    } catch (error) {
        console.error(error.message);
    }
}

runAsyncTask();

function level1() {
    level2();
}

function level2() {
    level3();
}

function level3() {
    console.trace("Stack Trace Example");
}

level1();

const student = {
    id: 101,
    name: "Mounika",
    branch: "CSE",
    skills: ["JavaScript", "HTML", "CSS"]
};

console.log("OBJECT INSPECTION");
console.dir(student);

try {
    JSON.parse("{invalid json}");
} catch (error) {
    console.error("JSON Error :", error.message);
}

console.time("HeavyTask");

let count = 0;

for (let i = 0; i < 1000000; i++) {
    count += i;
}

console.timeEnd("HeavyTask");

console.log("Count :", count);

debugLog("Application Finished");

console.log("DEBUGGING DEMO COMPLETED");