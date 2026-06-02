// 1. JSON OBJECT
const student = {
    name: "Manju",
    age: 21,
    course: "JavaScript"
};
console.log("Original JS Object:");
console.log(student);
// 2. CONVERT JS OBJECT TO JSON
// JSON.stringify()
const jsonData = JSON.stringify(student);
console.log("Converted to JSON:");
console.log(jsonData);
// 3. CONVERT JSON TO JS OBJECT
// JSON.parse()
const parsedData = JSON.parse(jsonData);
console.log("Converted back to JS Object:");
console.log(parsedData);
// 4. JSON ARRAY EXAMPLE
const users = [
    {
        id: 1,
        name: "Manju"
    },
    {
        id: 2,
        name: "Sravya"
    }
];

const usersJSON = JSON.stringify(users);
console.log("JSON Array:");
console.log(usersJSON);
const usersObject = JSON.parse(usersJSON);
console.log("Parsed JSON Array:");
console.log(usersObject);
// 5. STORE JSON IN LOCAL STORAGE
localStorage.setItem("studentData", jsonData);
const storedData = localStorage.getItem("studentData");
const convertedData = JSON.parse(storedData);
console.log("Data from Local Storage:");
console.log(convertedData);
// 6. BOM - WINDOW OBJECT
// console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);
// Alert
// window.alert("Welcome to BOM Example");
// Open new tab
// window.open("https://google.com");
// 7. BOM - LOCATION OBJECT
console.log("Current URL:");
console.log(window.location.href);
console.log("Hostname:");
console.log(window.location.hostname);
console.log("Pathname:");
console.log(window.location.pathname);
// Redirect to another website
// window.location.href = "https://google.com";
// 8. BOM - NAVIGATOR OBJECT
console.log("Browser Name:");
console.log(navigator.appName);
console.log("Browser Version:");
console.log(navigator.appVersion);
console.log("Online Status:");
console.log(navigator.onLine);
console.log("Platform:");
console.log(navigator.platform);
// 9. BOM - SCREEN OBJECT
console.log("Screen Width:", screen.width);
console.log("Screen Height:", screen.height);
console.log("Available Width:", screen.availWidth);
console.log("Available Height:", screen.availHeight);
// 10. setTimeout()
setTimeout(() => {
    console.log("This message appears after 2 seconds");
}, 2000);
// 11. setInterval()
let count = 1;

const interval = setInterval(() => {

    console.log("Counter:", count);

    count++;

    // Stop interval after 5 counts
    if (count > 5) {
        clearInterval(interval);
        console.log("Interval Stopped");
    }

}, 1000);

// 12. CONFIRM & PROMPT
// Confirm Box
// const result = confirm("Do you like JavaScript?");

// console.log(result);

// Prompt Box
// const userName = prompt("Enter your name");

// console.log(userName);

