// Node ES6+ Process Demo

// 1. Basic Info about Process
console.log("=== NODE PROCESS DEMO ===");
console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);

// 2. Command Line Arguments
console.log("\n=== COMMAND LINE ARGUMENTS ===");
console.log("argv:", process.argv);

// Example: custom arguments
const args = process.argv.slice(2);
console.log("Custom args:", args);

// 3. Environment Variables
console.log("\n=== ENVIRONMENT VARIABLES ===");
console.log("PATH exists:", process.env.PATH ? "YES" : "NO");

// Custom environment variable example
console.log("MY_VAR:", process.env.MY_VAR || "Not Set");

// 4. Standard Output (stdout)
process.stdout.write("\n=== STDOUT DEMO ===\n");
process.stdout.write("This is printed using stdout.write()\n");

// 5. Standard Input (stdin)
process.stdin.setEncoding("utf8");

console.log("\nType something and press ENTER (type 'exit' to quit):");

process.stdin.on("data", (data) => {
    const input = data.trim();

    console.log("You typed:", input);

    if (input.toLowerCase() === "exit") {
        console.log("Exiting program...");
        process.exit(0);
    } else {
        console.log("Try again or type 'exit'");
    }
});

// 6. Exit Event
process.on("exit", (code) => {
    console.log(`\nProcess is exiting with code: ${code}`);
});