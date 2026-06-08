// AJAX & XMLHttpRequest 
console.log("AJAX Example Started");
// 2. XMLHttpRequest Object
const xhr = new XMLHttpRequest();
console.log("Ready State:", xhr.readyState);
// 3. XMLHttpRequest Example
function loadJSONData() {
    const request = new XMLHttpRequest();
    // Configure request
    request.open(
        "GET",
        "https://jsonplaceholder.typicode.com/users",
        true
    );
    // Track request progress
    request.onreadystatechange = function () {
        console.log(
            "Current ReadyState:",
            request.readyState
        );
        if (
            request.readyState === 4 &&
            request.status === 200
        ) {
            console.log("JSON Response Received");
            const data = JSON.parse(request.responseText);
            data.forEach(user => {
                console.log(
                    `${user.id} - ${user.name}`
                );
            });
        }
    };
    request.send();
}
// 4. AJAX Server Response
function serverResponseExample() {
    const request = new XMLHttpRequest();
    request.open(
        "GET",
        "https://jsonplaceholder.typicode.com/posts/1",
       true
    );
    request.onload = function () {
        if (request.status === 200) {
            console.log("\nServer Response");
            console.log(
                "Status:",
                request.status
            );
            console.log(
                "Status Text:",
                request.statusText
            );
            console.log(
                "Response Text:"
            );

            console.log(
                request.responseText
            );
        }
    };
    request.onerror = function () {
        console.log("Request Failed");
    };

    request.send();
}
// 5. AJAX XML Example
function loadXMLData() {
    const request = new XMLHttpRequest();
    request.open(
        "GET",
        "sample.xml",
        true
    );
    request.onreadystatechange = function () {

        if (
            request.readyState === 4 &&
            request.status === 200
        ) {

            const xmlDoc =
                request.responseXML;

            const books =
                xmlDoc.getElementsByTagName(
                    "book"
                );

            console.log(
                "\nXML Data:"
            );

            for (
                let i = 0;
                i < books.length;
                i++
            ) {

                console.log(
                    books[i]
                        .getElementsByTagName(
                            "title"
                        )[0]
                        .textContent
                );
            }
        }
    };

    request.send();
}
// XMLHttpRequest Properties
console.log("\nXMLHttpRequest Properties");
const demo = new XMLHttpRequest();
console.log("readyState:", demo.readyState);
console.log("responseText:", demo.responseText);
console.log("responseXML:", demo.responseXML);
console.log("status:", demo.status);
console.log("statusText:", demo.statusText);
// XMLHttpRequest MethodS
console.log("\nXMLHttpRequest Methods");
const methodDemo = new XMLHttpRequest();
methodDemo.open(
    "GET",
    "https://jsonplaceholder.typicode.com/todos/1"
);
console.log("open() method used");
methodDemo.send();
console.log("send() method used");
// Execute Examples
loadJSONData();
serverResponseExample();
// Uncomment if sample.xml exists
// loadXMLData();
console.log("\nAJAX Program Completed");