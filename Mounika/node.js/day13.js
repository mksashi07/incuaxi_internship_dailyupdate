// WebSocket Chat Application

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
<title>WebSocket Chat</title>
<style>
body{
font-family:Arial;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
background:#f2f2f2;
}
.container{
width:500px;
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 0 10px gray;
}
h2{text-align:center;}
#messages{
height:300px;
overflow-y:auto;
border:1px solid #ccc;
list-style:none;
padding:0;
margin-bottom:10px;
}
#messages li{
padding:8px;
border-bottom:1px solid #eee;
}
form{display:flex;}
input{
flex:1;
padding:10px;
}
button{
padding:10px 20px;
cursor:pointer;
}
.info{
color:green;
font-weight:bold;
}
</style>
</head>
<body>

<div class="container">
<h2>Node.js WebSocket Chat</h2>

<ul id="messages"></ul>

<form id="chatForm">
<input
id="msg"
placeholder="Enter message"
autocomplete="off"
/>
<button>Send</button>
</form>
</div>

<script src="/socket.io/socket.io.js"></script>

<script>
const socket = io();

const form = document.getElementById("chatForm");
const input = document.getElementById("msg");
const messages = document.getElementById("messages");

function addMessage(text, cls=""){
const li = document.createElement("li");
li.textContent = text;
li.className = cls;
messages.appendChild(li);
messages.scrollTop = messages.scrollHeight;
}

socket.on("chat message",(msg)=>{
addMessage(msg);
});

socket.on("user status",(msg)=>{
addMessage(msg,"info");
});

form.addEventListener("submit",(e)=>{
e.preventDefault();

if(input.value.trim()!==""){
socket.emit("chat message",input.value);
input.value="";
}
});
</script>

</body>
</html>
`);
});

let users = 0;

io.on("connection",(socket)=>{

users++;

console.log("User Connected");

io.emit(
"user status",
"User Joined | Online Users: " + users
);

socket.on("chat message",(msg)=>{

console.log(msg);

io.emit(
"chat message",
msg
);

});

socket.on("disconnect",()=>{

users--;

console.log("User Disconnected");

io.emit(
"user status",
"User Left | Online Users: " + users
);

});

});

server.listen(3000,()=>{
console.log();
});
