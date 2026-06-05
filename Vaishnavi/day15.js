// BROWSER OBJECT MODEL(BOM)
//The Window Object is the top-level object in a browser. All global JavaScript objects, functions, and variables automatically become members of the window object.
console.log(window);

window.alert("Welcome to JavaScript!");

console.log(window.innerWidth);
console.log(window.innerHeight);

//Display browser window size
console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);

alert("Welcome to our website!");

//The Screen Object contains information about the user's screen.
console.log("Width:", screen.width);
console.log("Height:", screen.height);
console.log("Available Width:", screen.availWidth);
console.log("Available Height:", screen.availHeight);
console.log("Color Depth:", screen.colorDepth);

//Detect screen resolution
console.log("Screen Width:", screen.width);
console.log("Screen Height:", screen.height);

if(screen.width >= 1920){
    console.log("Full HD Screen");
}else{
    console.log("Normal Screen");
}

//The Location Object contains information about the current URL and allows navigation to another page.
console.log(location.href);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.protocol);

//Show current website URL
console.log("Current URL:", location.href);
console.log("Domain Name:", location.hostname);

//The History Object stores the URLs visited during the current browser session.
history.back();
history.forward();
history.go(-2);

//Get History Length
console.log(history.length);

//The Navigator Object contains information about the browser.
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.language);
console.log(navigator.platform);
console.log(navigator.onLine);
console.log(navigator.userAgent);

//Popup boxes are used to interact with users.
//Alert Box - Displays a message with an OK button.
alert("Welcome to JavaScript");
//Confirm Box - Displays a message with OK and Cancel buttons.
let result = confirm("Are you sure?");

console.log(result);

//Prompt Box - Accepts input from the user.
let name = prompt("Enter your name");

console.log(name);

//Timing functions execute code after a specified time interval.
//setTimeout() - Runs a function once after a delay.
setTimeout(() => {
    console.log("Executed after 3 seconds");
}, 3000);

//clearTimeout() - Stops a timeout.
let timer = setTimeout(() => {
    console.log("Hello");
}, 5000);

clearTimeout(timer);

//setInterval() - Runs a function repeatedly.
setInterval(() => {
    console.log("Running...");
}, 1000);

//clearInterval() - Stops an interval.
let count = 0;

let timer = setInterval(() => {
    count++;
    console.log(count);

    if(count === 5){
        clearInterval(timer);
    }
}, 1000);

//Cookies are small pieces of data stored in the browser to remember user information.
document.cookie = "username=Mounika";

//Create Cookie with Expiry
document.cookie =
"username=Mounika; expires=Fri, 31 Dec 2027 12:00:00 UTC";

//Read Cookies 
console.log(document.cookie);

//Delete Cookie
document.cookie =
"username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

//COMPLETE EXAMPLE
console.log("Screen Width:", screen.width);

console.log("Current URL:", location.href);

console.log("Browser:", navigator.userAgent);

alert("Welcome!");

let user = prompt("Enter Name:");

console.log("User:", user);

document.cookie = "username=" + user;

setTimeout(() => {
    console.log("Cookie Data:", document.cookie);
}, 2000);