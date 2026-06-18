//advanced communication
//1. GraphQL
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Student {
    id: ID
    name: String
  }

  type Query {
    students: [Student]
  }
`;

const students = [
  { id: 1, name: "Sameera" },
  { id: 2, name: "Ravi" }
];

const resolvers = {
  Query: {
    students: () => students
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});

//2.WebSockets
const WebSocket = require('ws');

const server = new WebSocket.Server({
  port: 8080
});

server.on('connection', ws => {
  ws.send("Connected to server");

  ws.on('message', message => {
    console.log("Client:", message.toString());
  });
});
//Socket.IO
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();

const server = http.createServer(app);

const io = new Server(server);

io.on('connection', socket => {

  console.log('User Connected');

  socket.emit(
    'message',
    'Welcome User'
  );

});

server.listen(3000);
//Socket.IO Chat Example
const io = require('socket.io')(3000);

io.on('connection', socket => {

  socket.on('chat', msg => {

    io.emit(
      'chat',
      msg
    );

  });

});