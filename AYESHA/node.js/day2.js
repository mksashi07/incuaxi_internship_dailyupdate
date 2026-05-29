// Core Modules

const os = require("os");
const events = require("events");

console.log("Operating System:", os.platform());
console.log("CPU Architecture:", os.arch());

const eventEmitter = new events.EventEmitter();

eventEmitter.on("welcome", () => {
    console.log("Welcome Event Triggered");
});

eventEmitter.emit("welcome");


// HTTP Module

const http = require("http");

const httpServer = http.createServer((req,res)=>{

    res.write("Hello from HTTP Server");

    res.end();

});

httpServer.listen(3000,()=>{

    console.log(
        "HTTP server running at port 3000"
    );

});


// HTTPS Module


const https = require("https");

https.get(
    "https://jsonplaceholder.typicode.com/users",
    (response)=>{

        let data="";

        response.on(
            "data",
            chunk=>{
                data += chunk;
            }
        );

        response.on(
            "end",
            ()=>{

                console.log(
                    "HTTPS Data:"
                );

                console.log(data);

            }
        );

    }
);


// File System (fs)


const fs = require("fs");


// Create File
fs.writeFile(
    "sample.txt",
    "Hello Node.js",
    err=>{

        if(err){

            console.log(err);

            return;
        }

        console.log(
            "File Created"
        );

    }
);


// Read File
fs.readFile(
    "sample.txt",
    "utf-8",
    (err,data)=>{

        if(err){

            console.log(err);

            return;
        }

        console.log(
            "File Content:"
        );

        console.log(data);

    }
);


// Append File
fs.appendFile(
    "sample.txt",
    "\nNew Line Added",
    err=>{

        if(err){

            console.log(err);

            return;
        }

        console.log(
            "Content Added"
        );

    }
);


// Path Module

const path = require("path");

console.log(
    "File Name:",
    path.basename(__filename)
);

console.log(
    "Directory:",
    path.dirname(__filename)
);

console.log(
    "Extension:",
    path.extname(__filename)
);

console.log(
    "Join Path:",
    path.join(
        "users",
        "admin",
        "profile"
    )
);

console.log(
    "Absolute Path:",
    path.resolve(
        "sample.txt"
    )
);