const output = document.getElementById("output");

// ===============================
// WINDOW OBJECT
// ===============================

console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);

// ===============================
// ALERT
// ===============================

document.getElementById("alertBtn").addEventListener("click", () => {
    window.alert("Welcome to Web APIs!");
});

// ===============================
// CONFIRM
// ===============================

document.getElementById("confirmBtn").addEventListener("click", () => {

    const result = window.confirm("Do you like JavaScript?");

    output.textContent = result
        ? "User clicked OK"
        : "User clicked Cancel";
});

// ===============================
// PROMPT
// ===============================

document.getElementById("promptBtn").addEventListener("click", () => {

    const name = window.prompt("Enter your name:");

    output.textContent = `Hello ${name}`;
});

// SETTIMEOUT
// LOCal

setTimeout(() => {
    console.log("Executed after 3 seconds");
}, 3000);
// SETINTERVAL

let count = 0;

const timer = setInterval(() => {

    count++;

    console.log(`Interval Count: ${count}`);

    if (count === 5) {
        clearInterval(timer);
    }

}, 1000);

// ===============================TION OBJECT

document.getElementById("locationBtn").addEventListener("click", () => {

    console.log(location.href);
    console.log(location.hostname);
    console.log(location.protocol);

    output.textContent = location.href;
});

// NAVIGATOR OBJECT
document.getElementById("navigatorBtn").addEventListener("click", () => {

    output.textContent =
        `Browser: ${navigator.userAgent}`;
});

// ===============================
// LOCAL STORAGE API
// ===============================

document.getElementById("localStorageBtn").addEventListener("click", () => {

    localStorage.setItem("username", "Manju");

    output.textContent =
        localStorage.getItem("username");
});
// SESSION STORAGE API
document.getElementById("sessionStorageBtn").addEventListener("click", () => {

    sessionStorage.setItem("course", "JavaScript");

    output.textContent =
        sessionStorage.getItem("course");
});
// FETCH API
document.getElementById("fetchBtn").addEventListener("click", async () => {

    try {

        const response =
            await fetch("https://jsonplaceholder.typicode.com/users/1");

        const data = await response.json();

        output.textContent =
            `Name: ${data.name}`;

    } catch (error) {

        console.error(error);
    }
});
// GEOLOCATION API
document.getElementById("geoBtn").addEventListener("click", () => {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(position => {

            output.textContent =
                `Latitude: ${position.coords.latitude},
                 Longitude: ${position.coords.longitude}`;
        });

    } else {

        output.textContent =
            "Geolocation not supported";
    }
});
// CLIPBOARD API

document.getElementById("clipboardBtn").addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(
            "JavaScript Web API Example"
        );

        output.textContent =
            "Text copied to clipboard";

    } catch (error) {

        console.error(error);
    }
});