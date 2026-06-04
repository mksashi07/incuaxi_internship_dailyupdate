// 1. WINDOW OBJECT
function windowInfo() {
    console.log("Inner Width:", window.innerWidth);
    console.log("Inner Height:", window.innerHeight);
    console.log("Outer Width:", window.outerWidth);
    console.log("Outer Height:", window.outerHeight);
    alert(
        "Window Width: " + window.innerWidth +
        "\nWindow Height: " + window.innerHeight
    );
}
// 2. SCREEN OBJECT
function screenInfo() {
    console.log("Screen Width:", screen.width);
    console.log("Screen Height:", screen.height);
    console.log("Available Width:", screen.availWidth);
    console.log("Available Height:", screen.availHeight);
    console.log("Color Depth:", screen.colorDepth);
    console.log("Pixel Depth:", screen.pixelDepth);
}
// 3. LOCATION OBJECT
function locationInfo() {
    console.log("URL:", location.href);
    console.log("Protocol:", location.protocol);
    console.log("Host:", location.host);
    console.log("Hostname:", location.hostname);
    console.log("Pathname:", location.pathname);
}
function reloadPage() {
    location.reload();
}
function goGoogle() {
    location.href = "https://www.google.com";
}
// 4. HISTORY OBJECT
function historyInfo() {
    console.log("History Length:", history.length);
}
function goBack() {
    history.back();
}
function goForward() {
    history.forward();
}
function goTwoPagesBack() {
    history.go(-2);
}
// 5. NAVIGATOR OBJECT
function navigatorInfo() {
    console.log("App Name:", navigator.appName);
    console.log("Version:", navigator.appVersion);
    console.log("Platform:", navigator.platform);
    console.log("Language:", navigator.language);
    console.log("Online:", navigator.onLine);
    console.log("User Agent:", navigator.userAgent);
}
//   6. POPUP BOXES
function showAlert() {
    alert("Welcome to JavaScript!");
}
function showConfirm() {
    let result = confirm(
        "Do you want to continue?"
    );
    if (result) {
        console.log("User clicked OK");
    } else {
        console.log("User clicked Cancel");
    }
}
function showPrompt() {
    let name = prompt(
        "Enter your name:"
    );
    console.log("User Name:", name);
}
// 7. TIMING FUNCTIONS
// setTimeout Example
function timeoutExample() {
    setTimeout(function () {
        console.log(
            "Executed after 3 seconds"
        );
    }, 3000);
}
// clearTimeout Example
function clearTimeoutExample() {
    let timer = setTimeout(function () {
        console.log("This will not run");
    }, 5000);
    clearTimeout(timer);
    console.log("Timeout Cleared");
}
// setInterval Example
let intervalId;
function startClock() {
    intervalId = setInterval(function () {
        let now = new Date();
        console.log(
            now.toLocaleTimeString()
        );
    }, 1000);
}
// clearInterval Example
function stopClock() {
    clearInterval(intervalId);
    console.log("Clock Stopped");
}
// 8. COOKIES
// Set Cookie
function setCookie() {
    document.cookie =
        "username=JavaScriptUser; max-age=3600";
    console.log("Cookie Set");
}
// Get Cookie
function getCookie() {
    console.log(
        "Cookies:",
        document.cookie
    );
}
// Delete Cookie
function deleteCookie() {
    document.cookie =
        "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    console.log("Cookie Deleted");
}
 //CALL FUNCTIONS
windowInfo();
screenInfo();
locationInfo();
historyInfo();
navigatorInfo();
showAlert();
showConfirm();
showPrompt();
timeoutExample();
clearTimeoutExample();
startClock();
setTimeout(() => {
    stopClock();
}, 5000);
setCookie();
getCookie();
deleteCookie();
// 1. APIs Introduction
console.log("JavaScript Web APIs Example");
function apiIntro() {
    console.log("Web APIs are provided by browsers.");
    console.log("Examples:");
    console.log("Fetch API");
    console.log("Geolocation API");
    console.log("History API");
    console.log("Storage API");
    console.log("Web Worker API");
}
apiIntro();
// 2. Fetch API
async function fetchUsers() {
    try {
        const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users =
        await response.json();
        console.log("Users Data:");
        console.table(users);
    }
    catch(error) {
        console.log(
            "Fetch Error:",
            error.message
        );
    }
}
fetchUsers();
// 3. Geolocation API
function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position){
                console.log(
                    "Latitude:",
                    position.coords.latitude
                );
                console.log(
                    "Longitude:",
                    position.coords.longitude
                );
            },
            function(error){
                console.log(
                    "Location Error:",
                    error.message
                );
            }
        );
    }
    else {
        console.log(
            "Geolocation not supported"
        );
    }
}
getLocation();
// 4. History API
function historyExample() {
    console.log(
        "History Length:",
        history.length
    );
}
historyExample();
function goBack() {
    history.back();
}
function goForward() {
    history.forward();
}
function goSpecificPage() {
    history.go(-1);
}
//  5. Pointer Events API
document.addEventListener(
    "pointerdown",
    function(event){
        console.log(
            "Pointer Down"
        );
        console.log(
            "Pointer Type:",
            event.pointerType
        );
        console.log(
            "X:",
            event.clientX
        );
        console.log(
            "Y:",
            event.clientY
        );
    }
);
document.addEventListener(
    "pointermove",
    function(event){
        console.log(
            "Pointer Moving:",
            event.clientX,
            event.clientY
        );
    }
);
// 6. Web Storage API
/* Local Storage */
localStorage.setItem(
    "name",
    "JavaScript Developer"
);
console.log(
    localStorage.getItem("name")
);
/* Session Storage */
sessionStorage.setItem(
    "course",
    "Web Development"
);
console.log(
    sessionStorage.getItem("course")
);
/* Remove Item */
localStorage.removeItem("name");
/* Clear Storage */
// localStorage.clear();
// 7. Form Validation API
function validateEmail(email) {
    let pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(pattern.test(email)) {
        console.log(
            "Valid Email"
        );
        return true;
    }
    else {
        console.log(
            "Invalid Email"
        );
        return false;
    }
}
validateEmail(
    "test@gmail.com"
);
validateEmail(
    "wrong-email"
);
// 8. Web Worker API
if(window.Worker) {
    console.log(
        "Web Worker Supported"
    );
    const worker =
    new Worker("worker.js");
    worker.postMessage(
        "Start Worker"
    );

    worker.onmessage =
    function(event){
        console.log(
            "Message From Worker:",
            event.data
        );
    };
}
else {
    console.log(
        "Web Worker Not Supported"
    );
}