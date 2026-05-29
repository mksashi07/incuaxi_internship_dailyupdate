// 1. AJAX INTRO
console.log("1. AJAX INTRO");
function ajaxIntro() {
    console.log("AJAX allows data exchange without page reload.");
}
ajaxIntro();

// 2. AJAX XMLHTTPREQUEST
console.log("\n2. AJAX XMLHTTPREQUEST");
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("Response:", xhr.responseText);
    }
};
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.send();

// 3. AJAX REQUEST (GET REQUEST)
console.log("\n3. AJAX REQUEST");
function getUsers() {
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    request.onload = function () {
        if (request.status === 200) {
            const users = JSON.parse(request.responseText);
            users.forEach(user => {
                console.log(user.name);
            });
        }
    };
    request.send();
}
getUsers();

// 4. AJAX RESPONSE
console.log("\n4. AJAX RESPONSE");
function getPost() {
    const responseXHR = new XMLHttpRequest();
    responseXHR.open("GET", "https://jsonplaceholder.typicode.com/posts/2");
    responseXHR.onload = function () {
        const data = JSON.parse(responseXHR.responseText);
        console.log("Title:", data.title);
        console.log("Body:", data.body);
    };
    responseXHR.send();
}
getPost();

// 5. AJAX XML FILE
console.log("\n5. AJAX XML FILE");
function loadXML() {
    const xmlXHR = new XMLHttpRequest();
    xmlXHR.open("GET", "sample.xml", true);
    xmlXHR.onload = function () {
        const xmlData = xmlXHR.responseXML;
        if (xmlData) {
            const heading = xmlData.getElementsByTagName("heading")[0].textContent;
            console.log("XML Heading:", heading);
        } else {
            console.log("No XML file found.");
        }
    };
    xmlXHR.send();
}
loadXML();

// 6. AJAX PHP
console.log("\n6. AJAX PHP");

function callPHP() {
    const phpXHR = new XMLHttpRequest();
    phpXHR.open("GET", "server.php", true);

    phpXHR.onload = function () {
        console.log("PHP Response:", phpXHR.responseText);
    };

    phpXHR.send();
}

callPHP();

// 7. AJAX ASP
console.log("\n7. AJAX ASP");
function callASP() {
    const aspXHR = new XMLHttpRequest();

    aspXHR.open("GET", "server.asp", true);

    aspXHR.onload = function () {
        console.log("ASP Response:", aspXHR.responseText);
    };

    aspXHR.send();
}

callASP();

// 8. AJAX DATABASE
console.log("\n8. AJAX DATABASE");
function getDatabaseData() {
    const dbXHR = new XMLHttpRequest();
    dbXHR.open("GET", "https://jsonplaceholder.typicode.com/comments", true);
    dbXHR.onload = function () {
        const comments = JSON.parse(dbXHR.responseText);

        console.log("Database Records:");

        comments.slice(0, 5).forEach(comment => {
            console.log(comment.email);
        });
    };

    dbXHR.send();
}

getDatabaseData();

// 9. AJAX APPLICATIONS
console.log("\n9. AJAX APPLICATIONS");
function searchApplication() {
    const appXHR = new XMLHttpRequest();
    appXHR.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    appXHR.onload = function () {
        const todos = JSON.parse(appXHR.responseText);

        const completed = todos.filter(todo => todo.completed);

        console.log("Completed Tasks:");
        console.log(completed.slice(0, 3));
    };

    appXHR.send();
}

searchApplication();

// 10. AJAX EXAMPLES (POST REQUEST)
console.log("\n10. AJAX EXAMPLES");
function createPost() {
    const postXHR = new XMLHttpRequest();
    postXHR.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

    postXHR.setRequestHeader("Content-Type", "application/json");

    postXHR.onload = function () {
        console.log("POST Response:");
        console.log(postXHR.responseText);
    };

    const data = JSON.stringify({
        title: "JavaScript AJAX",
        body: "AJAX POST Example",
        userId: 1
    });

    postXHR.send(data);
}

createPost();

// 11. AJAX USING FETCH API
console.log("\n11. AJAX USING FETCH API");
fetch("https://jsonplaceholder.typicode.com/albums/1")
    .then(response => response.json())
    .then(data => {
        console.log("Album Title:", data.title);
    })
    .catch(error => {
        console.log("Error:", error);
    });

// 12. AJAX ASYNC AWAIT
console.log("\n12. AJAX ASYNC AWAIT");
async function loadData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos/1"
        );
        const data = await response.json();
        console.log("Photo URL:", data.url);
    } catch (error) {
        console.log("Fetch Error:", error);
    }
}

loadData();

// 13. READY STATE VALUES
console.log("\n13. READY STATE VALUES");
const readyXHR = new XMLHttpRequest();
readyXHR.onreadystatechange = function () {
    console.log("Ready State:", readyXHR.readyState);
};
readyXHR.open("GET", "https://jsonplaceholder.typicode.com/users/1");
readyXHR.send();

// 14. STATUS CODES
console.log("\n14. STATUS CODES");
const statusXHR = new XMLHttpRequest();
statusXHR.onload = function () {
    console.log("Status Code:", statusXHR.status);
};
statusXHR.open("GET", "https://jsonplaceholder.typicode.com/posts/3");
statusXHR.send();

// 15. ERROR HANDLING
console.log("\n15. ERROR HANDLING");
const errorXHR = new XMLHttpRequest();
errorXHR.onerror = function () {
    console.log("Network Error Occurred");
};
errorXHR.open("GET", "wrong-url");
errorXHR.send();

// 16. LOADING JSON DATA
console.log("\n16. LOADING JSON DATA");
fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(res => res.json())
    .then(user => {
        console.log(user);
    });

// 17. LIVE SEARCH SIMULATION
console.log("\n17. LIVE SEARCH SIMULATION");
function liveSearch(keyword) {
    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${keyword}`)
        .then(res => res.json())
        .then(results => {
            console.log("Search Results:");
            console.log(results);
        });
}
liveSearch("qui");

// 18. AUTO REFRESH DATA
console.log("\n18. AUTO REFRESH DATA");
function autoRefresh() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(data => {
            console.log("Auto Refreshed Data:", data.title);
        });
}

// 19. AJAX FORM SUBMISSION
console.log("\n19. AJAX FORM SUBMISSION");
function submitForm() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "Ayesha",
            password: "12345"
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log("Form Submitted:", data);
        });
}
submitForm();

// 20. COMPLETE
console.log("\nAJAX ALL EXAMPLES COMPLETED");