console.log("AJAX PROGRAM STARTED");
// AJAX INTRODUCTION
function ajaxIntro() {
    console.log("AJAX = Asynchronous JavaScript And XML");
    console.log("AJAX allows communication");
    console.log("with server without reloading page");
}
ajaxIntro();
// AJAX XMLHTTPREQUEST OBJECT
function xmlhttpDemo() {
    let xhr = new XMLHttpRequest();
    console.log("XMLHttpRequest Object Created");
    console.log(xhr);
}
xmlhttpDemo();
// AJAX GET REQUEST
function getUsers() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/users",
        true
    );
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 &&
            xhr.status === 200) {
            console.log("GET Request Success");
            console.log(xhr.responseText);
        }
    };
}
getUsers();
// AJAX POST REQUEST
function createUser() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "POST",
        "https://jsonplaceholder.typicode.com/posts",
        true
    );
    xhr.setRequestHeader(
        "Content-Type",
        "application/json"
    );
    let data = {
        name: "Shreya",
        course: "JavaScript"
    };
    xhr.send(JSON.stringify(data));
    xhr.onload = function () {
        console.log("POST Request Success");
        console.log(xhr.responseText);
    };
}
createUser();
// AJAX READY STATE DEMO
function readyStateDemo() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log(
            "Ready State :",
            xhr.readyState
        );
    };
    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/posts/1",
        true
    );
    xhr.send();
}
readyStateDemo();
// AJAX RESPONSE DEMO
function responseDemo() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/posts/1",
        true
    );
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("Response Received");
            console.log(xhr.responseText);
            let data =
                JSON.parse(xhr.responseText);
            console.log("Title:");
            console.log(data.title);
        }
    };
    xhr.send();
}
responseDemo();
// AJAX ERROR HANDLING
function errorDemo() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        "wrongfile.json",
        true
    );
    xhr.onerror = function () {
        console.log(
            "Network Error Occurred"
        );
    };
    xhr.send();
}
errorDemo();
// AJAX TIMEOUT
function timeoutDemo() {
    let xhr = new XMLHttpRequest();
    xhr.timeout = 3000;
    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/posts",
        true
    );
    xhr.ontimeout = function () {
        console.log(
            "Request Timed Out"
        );
    };
    xhr.send();
}
timeoutDemo();
// AJAX XML FILE DEMO
function loadXMLFile() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        "students.xml",
        true
    );
    xhr.onload = function () {
        if (xhr.status === 200) {
            let xml =
                xhr.responseXML;
            console.log(
                "XML File Loaded"
            );
            let students =
                xml.getElementsByTagName(
                    "student"
                );
            for (
                let i = 0;
                i < students.length;
                i++
            ) {
                console.log(
                    students[i]
                    .getElementsByTagName(
                        "name"
                    )[0]
                    .textContent
                );
            }
        }
    };
    xhr.send();
}
loadXMLFile();
// AJAX STATUS CODE DEMO
function statusCodeDemo() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/posts/2",
        true
    );
    xhr.onload = function () {
        console.log(
            "Status Code :",
            xhr.status
        );
        console.log(
            "Status Text :",
          xhr.statusText
        );
    };
    xhr.send();
}
statusCodeDemo();
// AJAX RESPONSE HEADERS
function headerDemo() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/posts/3",
        true
    );
    xhr.onload = function () {
        console.log(
            xhr.getAllResponseHeaders()
        );
    };
    xhr.send();
}
headerDemo();