// NODE.JS ADVANCED COMMUNICATION SERVER
// GraphQL + Socket.IO + WebSocket
const express = require("express");
const http = require("http");
const { graphqlHTTP } = require("express-graphql");
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require("graphql");

const socketIO = require("socket.io");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);

// SAMPLE DATA

let students = [
    {
        id: 1,
        name: "Mounika",
        course: "Node.js"
    },
    {
        id: 2,
        name: "Ravi",
        course: "React"
    }
];

// GRAPHQL SECTION
const StudentType = new GraphQLObjectType({
    name: "Student",
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        course: { type: GraphQLString }
    }
});

// Query

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        students: {
            type: new GraphQLList(StudentType),
            resolve() {
                return students;
            }
        }
    }
});

// Mutation

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addStudent: {
            type: StudentType,
            args: {
                name: { type: GraphQLString },
                course: { type: GraphQLString }
            },

            resolve(parent, args) {

                const student = {
                    id: students.length + 1,
                    name: args.name,
                    course: args.course
                };

                students.push(student);

                return student;
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
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

    console.log("Socket.IO User Connected");

    socket.emit(
        "welcome",
        "Welcome To Socket.IO Chat"
    );

    socket.on("chatMessage", (msg) => {

        console.log(
            "Chat Message:",
            msg
        );

        io.emit(
            "receiveMessage",
            msg
        );
    });

    socket.on("disconnect", () => {

        console.log(
            "Socket.IO User Disconnected"
        );
    });
});

// WEBSOCKET SECTION

const wss = new WebSocket.Server({
    port: 5000
});

wss.on("connection", (ws) => {

    console.log(
        "WebSocket Client Connected"
    );

    ws.send(
        "Welcome To WebSocket Server"
    );

    let count = 0;

    const timer = setInterval(() => {

        count++;

        ws.send(
            `Live Notification ${count}`
        );

    }, 5000);

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

        clearInterval(timer);

        console.log(
            "WebSocket Client Disconnected"
        );
    });
});
// EXPRESS ROUTES
app.get("/", (req, res) => {

    res.send(`
        <h1>Node.js Advanced Server</h1>

        <h3>Available Services</h3>

        <ul>
            <li>GraphQL API</li>
            <li>Socket.IO Chat</li>
            <li>WebSocket Notifications</li>
        </ul>
    `);
});
app.get("/students", (req, res) => {
    res.json(students);
});

// START SERVER
server.listen(3000, () => {
    console.log(
        "Express Server Running"
    );
    console.log(
        "GraphQL Playground"
    );
    console.log(
        "Socket.IO Ready"
    );
    console.log(
        "WebSocket Running"
    );
});
