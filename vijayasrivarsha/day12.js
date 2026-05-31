
// WINDOW OBJECT

// alert()
alert("Welcome to JavaScript!");

// confirm()
let isStudent = confirm("Are you a student?");
console.log("Student:", isStudent);

// prompt()
let name = prompt("Enter your name:");
console.log("Name:", name);


// LOCAL STORAGE API


localStorage.setItem("username", name);

let storedName = localStorage.getItem("username");
console.log("Stored Name:", storedName);


// WINDOW LOCATION


console.log("Current URL:", window.location.href);
console.log("Host Name:", window.location.hostname);

// TIMER WEB APIs

// setTimeout()
setTimeout(() => {
    console.log("This message appears after 3 seconds");
}, 3000);

// setInterval()
let count = 0;

let intervalId = setInterval(() => {
    count++;
    console.log("Counter:", count);

    if (count === 5) {
        clearInterval(intervalId);
        console.log("Interval Stopped");
    }
}, 1000);


// FETCH API

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log("\n===== User Data =====");
        console.log("Name:", data.name);
        console.log("Email:", data.email);
        console.log("Phone:", data.phone);
        console.log("Website:", data.website);
    })
    .catch(error => {
        console.log("Fetch Error:", error);
    });


// GEOLOCATION API


if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(
        (position) => {

            console.log("\n===== Location =====");
            console.log("Latitude:", position.coords.latitude);
            console.log("Longitude:", position.coords.longitude);

        },
        (error) => {
            console.log("Location Error:", error.message);
        }
    );

} else {
    console.log("Geolocation is not supported.");
}


// EVENT API

window.addEventListener("load", () => {
    console.log("Page Fully Loaded");
});

window.addEventListener("resize", () => {
    console.log(
        "Window Resized:",
        window.innerWidth,
        "x",
        window.innerHeight
    );
});


// NAVIGATOR API

console.log(" Browser Info ");
console.log("Browser:", navigator.userAgent);
console.log("Language:", navigator.language);
console.log("Online:", navigator.onLine);


// SCREEN API

console.log(" Screen Info ");
console.log("Width:", screen.width);
console.log("Height:", screen.height);
console.log("Color Depth:", screen.colorDepth);


// HISTORY API

console.log(" History Info ");
console.log("History Length:", history.length);

// END OF PROGRAM


console.log("All Window Object and Web API examples executed.");