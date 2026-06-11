// Command Line Arguments
const args = process.argv;
console.log("All Arguments:");
console.log(args);
console.log("\nNode Path:");
console.log(args[0]);
console.log("\nFile Path:");
console.log(args[1]);
console.log("\nUser Arguments:");
for(let i = 2; i < args.length; i++)
{
    console.log(`Argument ${i - 1}: ${args[i]}`);
}
// V8 ENGINE INFORMATION
const v8 = require("v8");
console.log("V8 Version:");
console.log(process.versions.v8);
console.log("\nNode Version:");
console.log(process.version);
console.log("\nHeap Statistics:");
const heapStats = v8.getHeapStatistics();
console.log(heapStats);
// MEMORY USAGE
const memory = process.memoryUsage();
console.log(memory);
// SYSTEM INFORMATION
console.log("Platform:", process.platform);
console.log("Architecture:", process.arch);
console.log("Process ID:", process.pid);
// SIMPLE CALCULATOR USING CMD LINE
// Example:
// node app.js 10 20

if(args.length >= 4)
{
    let num1 = Number(args[2]);
    let num2 = Number(args[3]);

    console.log("Number 1:", num1);
    console.log("Number 2:", num2);

    console.log("Addition:", num1 + num2);
    console.log("Subtraction:", num1 - num2);
    console.log("Multiplication:", num1 * num2);

    if(num2 !== 0)
    {
        console.log("Division:", num1 / num2);
    }
    else
    {
        console.log("Division by zero not allowed");
    }
}
else
{
    console.log("Pass two numbers as arguments");
}
// V8 PERFORMANCE TEST
console.time("Loop Time");
let sum = 0;
for(let i = 1; i <= 1000000; i++)
{
    sum += i;
}
console.timeEnd("Loop Time");
console.log("Sum =", sum);
// CURRENT DIRECTORY
console.log("Current Directory:");
console.log(process.cwd());
// ENVIRONMENT VARIABLES
console.log("HOME:", process.env.HOME || process.env.USERPROFILE);