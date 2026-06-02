// NODE.JS ADVANCED COMMUNICATION
// GraphQL + Socket.IO + WebSocket
const express = require("express");
const http = require("http");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt
} = require("graphql");
const socketIO = require("socket.io");
const WebSocket = require("ws");
const app = express();
const server = http.createServer(app);
// GRAPHQL SECTION
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    course: { type: GraphQLString }
  })
});
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      resolve(parent, args) {
        return {
          id: 101,
          name: "Pavithra",
          course: "Node.js"
        };
      }
    }
  }
});
const schema = new GraphQLSchema({
  query: RootQuery
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
// SOCKET.IO SECTION
const io = socketIO(server);
io.on("connection", (socket) => {
  console.log("Socket.IO Client Connected");
  socket.emit(
    "welcome",
    "Welcome To Socket.IO Server"
  );
  socket.on("chatMessage", (msg) => {
    console.log("Message:", msg);
    io.emit(
      "receiveMessage",
      msg
    );
  });
  socket.on("disconnect", () => {
    console.log("Client Disconnected");
  });
});
// WEBSOCKET SECTION
const wss = new WebSocket.Server({
  port: 5000
});
wss.on("connection", (ws) => {
  console.log("WebSocket Client Connected");
  ws.send(
    "Welcome To WebSocket Server"
  );
  ws.on("message", (message) => {
    console.log(
      "Received:",
      message.toString()
    );
    ws.send(
      `Server Reply: ${message}`
    );
  });
  ws.on("close", () => {
    console.log(
      "WebSocket Disconnected"
    );
  });
});
// NORMAL EXPRESS ROUTE
app.get("/", (req, res) => {
  res.send(
    "Node.js Communication Server Running"
  );
});
// SERVER START
server.listen(3000, () => {
  console.log(
    "Express Server Running"
  );
  console.log(
    "GraphQL URL:"
  );
  console.log(
    "http://localhost:3000/graphql"
  );
  console.log(
    "Socket.IO Ready"
  );
  console.log(
    "WebSocket Running On Port 5000"
  );
});
