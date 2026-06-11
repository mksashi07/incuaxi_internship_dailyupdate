//Using window in JavaScript

console.log(window.innerWidth);   
console.log(window.innerHeight);  
window.alert("Hello from BOM!");

alert("Hi");        
console.log("Test"); 

// User Interaction (alert, confirm, prompt)

// Alert
alert("Welcome!");

// Confirm
let isOk = confirm("Are you sure?");
console.log(isOk);

// Prompt
let username = prompt("Enter your name:");
console.log(username);


//location (URL control)

console.log(location.href);      
console.log(location.protocol);  
console.log(location.pathname); 

// go to previous page
history.back();    

// go forward
history.forward(); 

// go 2 pages back
history.go(-2); 

// navigator (Browser details)
console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.onLine);

if (navigator.onLine) {
    console.log("User is online");
} else {
    console.log("User is offline");
}

//screen

console.log(screen.width);
console.log(screen.height);
console.log(screen.colorDepth);

//Timing Functions (setTimeout, setInterval) setTimeout (runs once)

setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

let count = 0;

let interval = setInterval(() => {
    count++;
    console.log("Count:", count);

    if (count === 5) {
        clearInterval(interval);
    }
}, 1000);

//window.open() (Open new tab)

window.open("https://google.com");

//Callback Hell

function loginUser(username, callback) {
    setTimeout(() => {
        console.log("User logged in:", username);
        callback({ userId: 1 });
    }, 1000);
}

function getUserData(userId, callback) {
    setTimeout(() => {
        console.log("Fetched user data");
        callback({ name: "Varsha" });
    }, 1000);
}

function getPosts(callback) {
    setTimeout(() => {
        console.log("Fetched posts");
        callback(["Post1", "Post2"]);
    }, 1000);
}

function getComments(callback) {
    setTimeout(() => {
        console.log("Fetched comments");
        callback(["Good", "Nice"]);
    }, 1000);
}


loginUser("Varsha", (user) => {
    getUserData(user.userId, (data) => {
        getPosts((posts) => {
            getComments((comments) => {
                console.log("Final Data:");
                console.log(data, posts, comments);
            });
        });
    });
});


//promises

function loginUser(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User logged in:", username);
            resolve({ userId: 1 });
        }, 1000);
    });
}

function getUserData(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched user data");
            resolve({ name: "Varsha" });
        }, 1000);
    });
}

function getPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched posts");
            resolve(["Post1", "Post2"]);
        }, 1000);
    });
}

function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched comments");
            resolve(["Good", "Nice"]);
        }, 1000);
    });
}

loginUser("Varsha")
    .then(user => getUserData(user.userId))
    .then(data => getPosts())
    .then(posts => getComments())
    .then(comments => {
        console.log("All Done!");
    });


