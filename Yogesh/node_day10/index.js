const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // Home Route
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>Node.js Learning Project</h1>
            <p>Welcome to my Node.js Server</p>
            <a href="/about">About</a><br>
            <a href="/students">Students API</a>
        `);
    }

    // About Route
    else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>About Project</h1>
            <p>This project demonstrates Node.js HTTP server and routing.</p>
        `);
    }

    // JSON API Route
    else if (req.url === "/students" && req.method === "GET") {

        const students = [
            {
                id: 1,
                name: "Yogesh",
                course: "JavaScript"
            },
            {
                id: 2,
                name: "Ravi",
                course: "Node.js"
            },
            {
                id: 3,
                name: "Rahul",
                course: "Express.js"
            }
        ];

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(students));
    }

    // Create File Route
    else if (req.url === "/create-file" && req.method === "GET") {

        fs.writeFile(
            "message.txt",
            "This file was created using Node.js",
            (err) => {

                if (err) {
                    res.writeHead(500);
                    return res.end("Error creating file");
                }

                res.writeHead(200);
                res.end("File Created Successfully");
            }
        );
    }

    // Read File Route
    else if (req.url === "/read-file" && req.method === "GET") {

        fs.readFile("message.txt", "utf8", (err, data) => {

            if (err) {
                res.writeHead(500);
                return res.end("Error reading file");
            }

            res.writeHead(200, {
                "Content-Type": "text/plain"
            });

            res.end(data);
        });
    }

    // Not Found Route
    else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end("<h1>404 Page Not Found</h1>");
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


/* Output 
Server running at http://localhost:3000
http://localhost:3000/about
http://localhost:3000/students
http://localhost:3000/create-file- to create file
http://localhost:3000/read-file - to read file
*/