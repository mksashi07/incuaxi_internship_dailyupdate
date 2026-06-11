// AJAX INTRODUCTION
console.log("\nAJAX INTRODUCTION");
console.log(
    "AJAX = Asynchronous JavaScript And XML"
);
console.log(
    "AJAX allows data exchange with server"
);
console.log(
    "without reloading the web page"
);
// AJAX XMLHTTPREQUEST OBJECT
let xhr = new XMLHttpRequest();
console.log("Object Created");
console.log(xhr);
// AJAX REQUEST
function getData() {
    let request =
        new XMLHttpRequest();
    request.onreadystatechange =
        function () {
        console.log(
            "Ready State:",
            request.readyState
        );
        if (
            request.readyState === 4 &&
            request.status === 200
        ) {
            console.log(
                "Request Successful"
            );
            console.log(
                request.responseText
            );
        }
    };
    request.open(
        "GET",
        "https://jsonplaceholder.typicode.com/posts/1",
        true
    );
    request.send();
}
getData();
// AJAX RESPONSE
function responseDemo() {
    let request =
        new XMLHttpRequest();
    request.onload =
        function () {
        if (
            request.status === 200
        ) {
            console.log(
                "Response Received"
            );
            let data =
                JSON.parse(
                    request.responseText
                );
            console.log(
                "User ID:",
                data.userId
            );
            console.log(
                "Title:",
                data.title
            );
        }
    };
    request.open(
        "GET",
        "https://jsonplaceholder.typicode.com/posts/2",
        true
    );
    request.send();
}
responseDemo();
// AJAX XML FILE
console.log("\nAJAX XML FILE");
function loadXML() {
    let request =
        new XMLHttpRequest();
    request.onreadystatechange =
        function () {
        if (
            request.readyState === 4 &&
            request.status === 200
        ) {
            let xml =
              request.responseXML;
            console.log(
                "XML Loaded Successfully"
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
                let name =
                    students[i]
                    .getElementsByTagName(
                        "name"
                    )[0]
                    .textContent;
                console.log(
                    "Student:",
                    name
                );
            }
        }
    };
    request.open(
        "GET",
        "students.xml",
        true
    );
    request.send();
}
// Uncomment if XML file exists
// loadXML();
// AJAX PHP
function loadPHP() {
    let request =
        new XMLHttpRequest();
    request.onload =
        function () {
        if (
            request.status === 200
        ) {
            console.log(
                "PHP Response:"
            );
            console.log(
                request.responseText
            );
        }
    };
    request.open(
        "GET",
        "server.php",
        true
    );
    request.send();
}
// Uncomment if PHP server exists
// loadPHP();
// AJAX ASP
function loadASP() {
    let request =
        new XMLHttpRequest();
    request.onload =
        function () {
        if (
            request.status === 200
        ) {
            console.log(
                "ASP Response:"
            );
            console.log(
                request.responseText
            );

        }
    };
    request.open(
        "GET",
        "server.asp",
        true
    );
    request.send();
}
// Uncomment if ASP server exists
// loadASP();
// AJAX POST REQUEST
function createPost() {
    let request =
        new XMLHttpRequest();
    request.open(
        "POST",
        "https://jsonplaceholder.typicode.com/posts",
        true
    );
    request.setRequestHeader(
        "Content-Type",
        "application/json"
    );
    request.onload =
        function () {
        console.log(
            "POST Response:"
        );
        console.log(
            request.responseText
        );
    };
    let data = {
        title: "JavaScript",
        body: "AJAX Example",
        userId: 1
    };
    request.send(
        JSON.stringify(data)
    );
}
createPost();
// AJAX ERROR HANDLING
function errorDemo() {
    let request =
        new XMLHttpRequest();
    request.onerror =
        function () {
        console.log(
            "Network Error"
        );
    };
    request.open(
        "GET",
        "wrongfile.txt",
      true
    );
    request.send();
}
errorDemo();