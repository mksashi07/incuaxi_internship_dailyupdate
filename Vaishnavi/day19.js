//Event Bubbling and Capturing - When an event occurs on an element, it travels through the DOM in two phases:
//Event Capturing - Event moves from parent → child.
document.body.addEventListener("click", () => {
    console.log("Body Clicked");
});

document.addEventListener("click", () => {
    console.log("Document Clicked");
});

const btn = document.createElement("button");
btn.textContent = "Click Me";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
    console.log("Button Clicked");
});

//Event Bubbling - Event moves from child → parent.
document.body.addEventListener(
    "click",
    () => {
        console.log("Body Capturing");
    },
    true
);

document.addEventListener(
    "click",
    () => {
        console.log("Document Capturing");
    },
    true
);

//Capturing and Bubbling Together
document.addEventListener(
    "click",
    () => console.log("Document Capture"),
    true
);

document.addEventListener(
    "click",
    () => console.log("Document Bubble")
);

const btn = document.createElement("button");
document.body.appendChild(btn);

btn.addEventListener("click", () => {
    console.log("Button Click");
});

//Debouncing delays function execution until the user stops triggering the event for a specified time.
//Debouncing Search Input
function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const search = debounce((text) => {
    console.log("Searching:", text);
}, 1000);

search("J");
search("JS");
search("JavaScript");

//Debouncing API Call
function debounce(fn, delay) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const fetchData = debounce((id) => {
    console.log("Fetching user:", id);
}, 2000);

fetchData(1);
fetchData(2);
fetchData(3);

//Debouncing Window Resize
function debounce(fn, delay) {
    let timer;

    return () => {
        clearTimeout(timer);

        timer = setTimeout(fn, delay);
    };
}

window.addEventListener(
    "resize",
    debounce(() => {
        console.log("Window resized");
    }, 500)
);

//Throttling limits function execution to once every specified interval.
//Throttling Scroll Event
function throttle(fn, delay) {
    let flag = true;

    return function () {
        if (!flag) return;

        fn();

        flag = false;

        setTimeout(() => {
            flag = true;
        }, delay);
    };
}

window.addEventListener(
    "scroll",
    throttle(() => {
        console.log("Scrolling");
    }, 1000)
);

//Throttling Button Click
function throttle(fn, delay) {
    let last = 0;

    return function () {
        let now = Date.now();

        if (now - last >= delay) {
            fn();
            last = now;
        }
    };
}

const clickHandler = throttle(() => {
    console.log("Button clicked");
}, 2000);

clickHandler();

//Mouse Move Throttling
function throttle(fn, delay) {
    let waiting = false;

    return function () {
        if (waiting) return;

        fn();

        waiting = true;

        setTimeout(() => {
            waiting = false;
        }, delay);
    };
}

document.addEventListener(
    "mousemove",
    throttle(() => {
        console.log("Mouse Moving");
    }, 500)
);

//Fetch API is a modern JavaScript API used to make HTTP requests to servers and APIs. It returns a Promise.
//GET Request
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// GET Request Using Async/Await
async function getUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUser();