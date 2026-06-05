const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Socket.IO Chat App</title>
        <style>
            body{
                font-family: Arial;
                margin:20px;
            }
            #messages{
                border:1px solid gray;
                height:300px;
                overflow:auto;
                padding:10px;
            }
            li{
                margin:5px;
            }
            input{
                width:300px;
                padding:8px;
            }
            button{
                padding:8px;
            }
        </style>
    </head>

    <body>

        <h2>Simple Chat Application</h2>

        <ul id="messages"></ul>

        <input
            id="message"
            type="text"
            placeholder="Enter Message"
        >

        <button onclick="sendMessage()">
            Send
        </button>

        <script src="/socket.io/socket.io.js"></script>

        <script>

            const socket = io();

            socket.on(
                "chat message",
                function(msg){

                    const li =
                        document.createElement("li");

                    li.textContent = msg;

                    document
                        .getElementById("messages")
                        .appendChild(li);
                }
            );

            function sendMessage(){

                const messageBox =
                    document.getElementById("message");

                const msg =
                    messageBox.value;

                if(msg.trim() !== ""){

                    socket.emit(
                        "chat message",
                        msg
                    );

                    messageBox.value = "";
                }
            }

        </script>

    </body>
    </html>
    `);
});

io.on("connection", (socket) => {

    console.log("User Connected");

    io.emit(
        "chat message",
        "A user joined the chat"
    );

    socket.on(
        "chat message",
        (msg) => {

            console.log("Message:", msg);

            io.emit(
                "chat message",
                msg
            );
        }
    );

    socket.on(
        "disconnect",
        () => {

            console.log(
                "User Disconnected"
            );

            io.emit(
                "chat message",
                "A user left the chat"
            );
        }
    );
});

server.listen(
    3000,
    () => {

        console.log(
            "Server Running On Port 3000"
        );

        console.log(
            "Open http://localhost:3000"
        );
    }
);