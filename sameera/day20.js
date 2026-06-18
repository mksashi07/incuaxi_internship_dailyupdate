//Frontend JS
//Fetch User Data from API
//index.
<html>
<body>

<button onclick="getUsers()">
Load Users
</button>

<ul id="users"></ul>

<script src="app.js"></script>

</body>
</html>
//app.js
async function getUsers() {

    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

    const users =
        await response.json();

    const list =
        document.getElementById("users");

    users.forEach(user => {

        const li =
            document.createElement("li");

        li.textContent =
            user.name;

        list.appendChild(li);
    });
}
//Backend JavaScript with Node.js
//Simple Server
const express =
    require("express");

const app = express();

app.get("/", (req, res) => {

    res.send(
        "Hello from Node.js"
    );

});

app.listen(3000, () => {

    console.log(
        "Server Running"
    );

});
//REST API
const express =
    require("express");

const app = express();

const students = [

    {
        id: 1,
        name: "Sameera"
    },

    {
        id: 2,
        name: "Ravi"
    }

];

app.get(
    "/students",
    (req, res) => {

        res.json(students);

    }
);

app.listen(3000);
//Authentication
const express =
    require("express");

const app = express();

app.use(express.json());

const user = {
    username: "admin",
    password: "1234"
};

app.post(
    "/login",
    (req, res) => {

        const {
            username,
            password
        } = req.body;

        if (
            username === user.username &&
            password === user.password
        ) {

            return res.json({
                message: "Login Success"
            });
        }

        res.status(401).json({
            message: "Invalid Credentials"
        });

    }
);

app.listen(3000);
//CRUD Operations

CRUD =

Create
Read
Update
Delete
app.post(
    "/students",
    (req, res) => {

        students.push(
            req.body
        );

        res.json({
            message:
            "Student Added"
        });

    }
);
