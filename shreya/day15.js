// FETCH API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log("Fetch:", data));

// GEOLOCATION API
navigator.geolocation.getCurrentPosition(pos => {
  console.log(
    "Location:",
    pos.coords.latitude,
    pos.coords.longitude
  );
});

// STORAGE API
localStorage.setItem("username", "Shreya");
console.log(localStorage.getItem("username"));

// POINTER API
document.addEventListener("pointerdown", () => {
  console.log("Pointer Clicked");
});

// HISTORY API
console.log(history.length);

// VALIDATION API
let email = document.querySelector("input");
if (email && email.checkValidity()) {
  console.log("Valid Email");
}

// WEB WORKER API
const worker = new Worker("worker.js");

worker.postMessage("start");

worker.onmessage = (e) => {
  console.log("Worker Result:", e.data);
};
// WINDOW OBJECT
console.log("Inner Width :", window.innerWidth);
console.log("Inner Height :", window.innerHeight);
console.log("Outer Width :", window.outerWidth);
console.log("Outer Height :", window.outerHeight);
console.log("Window Name :", window.name);
function showWindowInfo() {
    console.log("Current URL :", window.location.href);
}
showWindowInfo();
// SCREEN OBJECT
console.log("Screen Width :", screen.width);
console.log("Screen Height :", screen.height);
console.log("Available Width :", screen.availWidth);
console.log("Available Height :", screen.availHeight);
console.log("Color Depth :", screen.colorDepth);
console.log("Pixel Depth :", screen.pixelDepth);
// LOCATION OBJECT
console.log("Full URL :", location.href);
console.log("Hostname :", location.hostname);
console.log("Protocol :", location.protocol);
console.log("Port :", location.port);
console.log("Path Name :", location.pathname);
console.log("Origin :", location.origin);
function reloadPage() {
    console.log("Reload Function Called");
    // location.reload();
}
// HISTORY OBJECT
console.log("\n===== HISTORY OBJECT =====");
console.log("History Length :", history.length);
function goBack() {
    console.log("Moving Back");
    // history.back();
}
function goForward() {
    console.log("Moving Forward");
    // history.forward();
}
function goSpecificPage() {
    console.log("Move One Step");
    // history.go(-1);
}
// NAVIGATOR OBJECT
console.log("App Name :", navigator.appName);
console.log("App Version :", navigator.appVersion);
console.log("Platform :", navigator.platform);
console.log("Language :", navigator.language);
console.log("User Agent :", navigator.userAgent);
console.log("Cookies Enabled :", navigator.cookieEnabled);
console.log("Online Status :", navigator.onLine);
// POPUP ALERT
function showAlert() {
    alert("Welcome To JavaScript");
}
showAlert();
// CONFIRM BOX
let result = confirm("Do You Like JavaScript ?");
if (result) {
    console.log("User Clicked OK");
}
else {
    console.log("User Clicked Cancel");
}
// PROMPT BOX
console.log("\n===== PROMPT BOX =====");
let userName = prompt("Enter Your Name");
console.log("User Name :", userName);
// TIMING FUNCTIONS
setTimeout(() => {
    console.log("Executed After 3 Seconds");
}, 3000);
// SET INTERVAL
let count = 0;
let timer = setInterval(() => {
    count++;
    console.log("Counter :", count);
    if (count === 5) {
        clearInterval(timer);
        console.log("Interval Stopped");
    }
}, 1000);
// DIGITAL CLOCK
let clock = setInterval(() => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    console.log(
        hours + ":" +
        minutes + ":" +
      seconds
    );
}, 1000);
setTimeout(() => {
    clearInterval(clock);
    console.log("Clock Stopped");
}, 10000);
// COOKIES
document.cookie = "username=Shreya";
console.log("Cookie Created");
console.log(document.cookie);
// COOKIE WITH EXPIRY
let expiryDate = new Date();
expiryDate.setTime(
    expiryDate.getTime() +
    (24 * 60 * 60 * 1000)
);
let expires =
    "expires=" +
    expiryDate.toUTCString();
document.cookie =
    "student=JavaScript;" +
    expires +
    ";path=/";
console.log("Cookie With Expiry Added");
console.log(document.cookie);
// DELETE COOKIE
document.cookie =
    "username=;" +
    "expires=Thu, 01 Jan 1970 00:00:00 UTC;" +    "path=/;";
console.log("Cookie Deleted");

