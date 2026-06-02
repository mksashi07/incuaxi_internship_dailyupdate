// Import Modules
const os = require("os");
const url = require("url");
const EventEmitter = require("events");
// OS MODULE
// Operating System Name
console.log("Platform:", os.platform());
// OS Type
console.log("OS Type:", os.type());
// Architecture
console.log("Architecture:", os.arch());
// CPU Information
console.log("CPU Count:", os.cpus().length);
// Total Memory
console.log(
    "Total Memory:",
    (os.totalmem() / 1024 / 1024 / 1024).toFixed(2),
    "GB"
);
// Free Memory
console.log(
    "Free Memory:",
    (os.freemem() / 1024 / 1024 / 1024).toFixed(2),
    "GB"
);
// Home Directory
console.log("Home Directory:", os.homedir());
// Temporary Directory
console.log("Temp Directory:", os.tmpdir());
// Host Name
console.log("Host Name:", os.hostname());
// Uptime
console.log(
    "System Uptime:",
    Math.floor(os.uptime() / 60),
    "minutes"
);
// User Information
console.log("User Info:");
console.log(os.userInfo());
// URL MODULE
const website =
"https://www.example.com:8080/products/mobile?brand=samsung&id=101#details";
// Create URL Object
const myURL = new URL(website);
console.log("Complete URL:");
console.log(myURL.href);
// Protocol
console.log("Protocol:", myURL.protocol);
// Host
console.log("Host:", myURL.host);
// Hostname
console.log("Hostname:", myURL.hostname);
// Port
console.log("Port:", myURL.port);
// Pathname
console.log("Pathname:", myURL.pathname);
// Query String
console.log("Search:", myURL.search);
// Hash
console.log("Hash:", myURL.hash);
// Get Query Parameters
console.log(
    "Brand:",
    myURL.searchParams.get("brand")
);
console.log(
    "ID:",
    myURL.searchParams.get("id")
);
// Add Query Parameter
myURL.searchParams.append(
    "category",
    "electronics"
);
console.log(
    "Updated URL:"
);
console.log(myURL.href);
// Delete Query Parameter
myURL.searchParams.delete("id");
console.log(
    "After Delete:"
);
console.log(myURL.href);
// EVENTS MODULE
// Create Event Emitter
const emitter = new EventEmitter();
// Register Event
emitter.on(
    "welcome",
    () => {
        console.log(
            "Welcome Event Triggered"
        );
    }
);
// Emit Event
emitter.emit("welcome");
// EVENT WITH PARAMETERS
emitter.on(
    "student",
    (name, course) => {
        console.log(
            `Student Name: ${name}`
        );
        console.log(
            `Course: ${course}`
        );
    }
);
emitter.emit(
    "student",
    "Shreya",
    "Node.js"
);
// MULTIPLE LISTENERS
emitter.on(
    "login",
    () => {
        console.log(
            "Login Activity Logged"
        );
    }
);
emitter.on(
    "login",
    () => {
        console.log(
            "Email Notification Sent"
        );
    }
);
console.log("\nUser Login:");
emitter.emit("login");
// ONCE EVENT
emitter.once(
    "payment",
    () => {
        console.log(
            "Payment Processed Once"
        );
    }
);
console.log("\nPayment Event:");
emitter.emit("payment");
emitter.emit("payment");
// REMOVE EVENT LISTENER
function logoutHandler() {
    console.log(
        "User Logged Out"
    );
}
emitter.on(
    "logout",
    logoutHandler
);
emitter.emit("logout");
// Remove Listener
emitter.off(
    "logout",
    logoutHandler
);
console.log(
    "\nListener Removed"
);
emitter.emit("logout");