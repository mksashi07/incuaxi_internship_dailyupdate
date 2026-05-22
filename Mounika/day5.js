//Arrow Functions

const numbers = [1, 2, 3];
const squareNew = numbers.map(n => n * n);
console.log("New:", squareNew);

//Template Literals

const user = "Alice";
const role = "Admin";
const message = `Welcome back, ${user}!
Your current access level is: ${role}.`;
console.log(message);

// Destructuring

const configuration = { status: "success", data: { id: 101, speed: "high" } };
const coordinates = [12.97, 77.59];
const { status, data: { speed } } = configuration;
const [latitude, longitude] = coordinates;
console.log(`Status: ${status}, Speed: ${speed}`);
console.log(`Coordinates: Lat ${latitude}, Lon ${longitude}`);

// Spread Operator

const defaults = { theme: "dark", notifications: true };
const userProfile = { notifications: false, location: "India" };
const finalSettings = { ...defaults, ...userProfile };
const initialItems = [1, 2];
const combinedItems = [...initialItems, 3, 4];
console.log("Merged Object:", finalSettings);
console.log("Merged Array:", combinedItems);

//DOM Basics

const appFolder = { innerHTML: "" };
function updateDOM(element, text) {
    element.innerHTML = `<h1>${text}</h1>`;
    return element.innerHTML;
}
console.log("Rendered HTML:", updateDOM(appFolder, "Hello World from DOM!"));

//Promises

const checkServerStatus = new Promise((resolve, reject) => {
    let isOnline = true;
    if (isOnline) {
        resolve("Server is running smoothly.");
    } else {
        reject("Server down error.");
    }
});
checkServerStatus
    .then((message) => console.log("Success:", message))
    .catch((error) => console.log("Error:", error))

    //Async / Await

const fetchUserData = () => new Promise(res => setTimeout(() => res({ user: "Sam" }), 100));
async function runBackendTask() {
    console.log("Fetching user...");
    try {
        const result = await fetchUserData();
        console.log(`Welcome back, ${result.user}`);
    } catch (err) {
        console.error("Failed to load data", err);
    }
}
runBackendTask();


const db = {
    fetchUser: (id) => new Promise((resolve, reject) => {
        setTimeout(() => id === 1 ? resolve({ id: 1, name: "Alex", role: "Manager" }) : reject("User not found"), 50);
    }),
    fetchLogs: (role) => new Promise((resolve) => {
        setTimeout(() => resolve(["Login", "Update Profile", "Export Data"]), 50);
    })
};

const mockDOMElement = { innerHTML: "" };

const formatSystemMessage = (name, actionCount) => `System Alert: ${name} processed ${actionCount} historic logs.`;

async function runApplicationPipeline(userId) {
    try {
        const user = await db.fetchUser(userId);
        const { name, role } = user;
        
        const rawLogs = await db.fetchLogs(role);
        const [primaryLog, ...remainingLogs] = rawLogs;
        
        const updatedLogs = [primaryLog, "System Audit Initiated", ...remainingLogs];
        
        const processLogs = (logsArray) => logsArray.map(log => log.toUpperCase());
        const finalizedLogs = processLogs(updatedLogs);
        
        mockDOMElement.innerHTML = `
            <div class="dashboard">
                <h3>Welcome, ${name} (${role})</h3>
                <p>Latest Action: ${finalizedLogs[0]}</p>
                <small>${formatSystemMessage(name, finalizedLogs.length)}</small>
            </div>
        `;
        
        console.log("Pipeline successfully executed.");
        console.log("Processed Logs Array:", finalizedLogs);
        console.log("Updated DOM Output:", mockDOMElement.innerHTML.trim());

    } catch (error) {
        console.error("Pipeline failed Execution. Error Context:", error);
    }
}

runApplicationPipeline(1);
