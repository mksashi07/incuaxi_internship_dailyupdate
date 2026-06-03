//DOM (Document Object Model)
//The DOM is a tree-like representation of a webpage. JavaScript can create, read, update, and delete elements in this tree.
//Create Elements Dynamically
// Create heading
const heading = document.createElement("h1");

heading.textContent = "Welcome to DOM";

// Add to page
document.body.appendChild(heading);

//DOM Navigation means moving between parent, child, and sibling elements.
const parent = document.createElement("div");

const child1 = document.createElement("h1");
child1.textContent = "Heading";

const child2 = document.createElement("p");
child2.textContent = "Paragraph";

parent.appendChild(child1);
parent.appendChild(child2);

document.body.appendChild(parent);

// Children
console.log(parent.children);

// First Child
console.log(parent.firstElementChild);

// Last Child
console.log(parent.lastElementChild);

// Parent
console.log(child1.parentElement);

// Next Sibling
console.log(child1.nextElementSibling);

// Previous Sibling
console.log(child2.previousElementSibling);

//The Window object represents the browser window and is the global object in JavaScript.
console.log(window);

console.log(window.innerWidth);
console.log(window.innerHeight);

//Alert
alert("Welcome User");

//Confirm
const result = confirm("Do you want to continue?");

console.log(result);

//Prompt
const name = prompt("Enter your name");

console.log(name);

//Location
console.log(window.location.href);console.log(window.location.href);

//Reload page
window.location.reload();

//Timer Web APIs
//setTimeout() - Runs once after a delay.
setTimeout(() => {
    console.log("Executed after 3 seconds");
}, 3000);

//setInterval() - Runs repeatedly.
const timer = setInterval(() => {
    console.log("Running...");
}, 1000);

//clearInterval()
const timer = setInterval(() => {
    console.log("Hello");
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 5000);

//Local Storage API
//Store Data
localStorage.setItem("name", "Mounika");

//Retrieve Data
const name = localStorage.getItem("name");

console.log(name);

//Remove Data
localStorage.removeItem("name");

//Session Storage API
sessionStorage.setItem("course", "JavaScript");

console.log(
    sessionStorage.getItem("course")
);

//Fetch API - Used to communicate with servers and APIs.
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

    //Geolocation API 
    navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log(
            position.coords.latitude
        );

        console.log(
            position.coords.longitude
        );
    }
);

//Clipboard API
navigator.clipboard.writeText(
    "JavaScript Tutorial"
);

//Read Text
navigator.clipboard.readText()
.then(text => {
    console.log(text);
});

//Notification API
Notification.requestPermission()
.then(permission => {

    if (permission === "granted") {

        new Notification(
            "Welcome to JavaScript"
        );

    }

});

//Navigator API - Browser Information
console.log(navigator.userAgent);

console.log(navigator.language);

console.log(navigator.platform);

console.log(navigator.onLine);

//History API
//Back Page
history.back();

//Forward Page
history.forward();

//Go to Specific Page
history.go(-2);

//COMPLETE EXAMPLE
// Create Elements
const title = document.createElement("h1");
title.textContent = "DOM Example";

document.body.appendChild(title);

// DOM Navigation
console.log(document.body.children);
console.log(title.parentElement);

// Window Object
console.log(window.innerWidth);

// Timer API
setTimeout(() => {
    console.log("Timer Finished");
}, 2000);

// Storage API
localStorage.setItem(
    "username",
    "Mounika"
);

console.log(
    localStorage.getItem("username")
);

// Navigator API
console.log(navigator.userAgent);