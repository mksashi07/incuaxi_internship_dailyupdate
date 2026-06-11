// JSON OBJECTS
let student = {
    id: 101,
    name: "Shreya",
    age: 21,
    course: "CSE",
    city: "Hyderabad"
};
console.log(student);
console.log("Student ID:");
console.log(student.id);
console.log("Student Name:");
console.log(student.name);
console.log("Student Age:");
console.log(student.age);
console.log("Student Course:");
console.log(student.course);
// ADD PROPERTY
student.email =
    "shreya@gmail.com";
student.phone =
    "9876543210";
console.log(student);
// UPDATE PROPERTY
student.city = "Bangalore";
console.log(student);
// DELETE PROPERTY
delete student.age;
console.log(student);
// JSON STRINGIFY
let jsonString =
    JSON.stringify(student);
console.log(jsonString);
// JSON PARSE
let objectData =
    JSON.parse(jsonString);
console.log(objectData);
// JSON ARRAYS
let students = [
    {
        id: 1,
        name: "Shreya",
        marks: 90
    },
    {
        id: 2,
        name: "Ravi",
        marks: 85
    },
    {
        id: 3,
        name: "Anil",
        marks: 95
    },
    {
        id: 4,
        name: "Kiran",
        marks: 80
    }
];
console.log(students);
// DISPLAY ARRAY DATA
students.forEach(student => {
    console.log(
        student.id,
        student.name,
        student.marks
    );
});
// ARRAY LENGTH
console.log(
    students.length
);
// ADD NEW STUDENT
students.push({
    id: 5,
    name: "Rahul",
    marks: 88
});
console.log(students);
// REMOVE STUDENT
students.pop();
console.log(students);
// FIND STUDENT
let result =
    students.find(
        student => student.id === 2
    );
console.log(result);
// FILTER STUDENTS
let filteredStudents =
    students.filter(
        student =>
        student.marks > 85
    );
console.log(filteredStudents);
// SORT STUDENTS
students.sort(
    (a, b) =>
    b.marks - a.marks
);
console.log(students);
// MAP FUNCTION
let names =
    students.map(
        student =>
        student.name
    );
console.log(names);
// REDUCE FUNCTION
let totalMarks =
    students.reduce(
        (sum, student) =>
        sum + student.marks,
        0
    );
console.log(
    "Total Marks:",
    totalMarks
);
console.log(
    "Average Marks:",
    totalMarks /
    students.length
);
// JSON SERVER INTRO
console.log(
    "JSON Server provides fake REST API"
);
console.log(
    "Used for frontend testing"
);
// SIMULATED SERVER DATA
let serverData = {
    users: [
        {
            id: 1,
            name: "Shreya"
        },
        {
            id: 2,
            name: "Ravi"
        },
        {
            id: 3,
            name: "Anil"
        }
    ]
};
console.log(serverData);
// SIMULATED GET REQUEST
function getUsers() {
    console.log(
        "Fetching Users..."
    );
    return serverData.users;
}
console.log(
    getUsers()
);
// SIMULATED POST REQUEST
function addUser(user) {
    serverData.users.push(user);
    console.log(
        "User Added Successfully"
    );
}
addUser({
    id: 4,
    name: "Kiran"
});
console.log(
    serverData.users
);
// SIMULATED PUT REQUEST
function updateUser(id, newName) {
    let user =
        serverData.users.find(
            user =>
            user.id === id
        );
    if(user) {
        user.name = newName;
        console.log(
            "User Updated"
        );
    }
}
updateUser(
    2,
    "Ravi Kumar"
);
console.log(
    serverData.users
);
// SIMULATED DELETE REQUEST
function deleteUser(id) {
    serverData.users =
    serverData.users.filter(
        user =>
        user.id !== id
    );
    console.log(
        "User Deleted"
    );
}
deleteUser(1);
console.log(
    serverData.users
);
// CONVERT SERVER DATA TO JSON
let serverJSON =
JSON.stringify(
    serverData
);
console.log(serverJSON);
// CONVERT JSON TO OBJECT
let parsedServerData =
JSON.parse(
    serverJSON
);
console.log(
    parsedServerData
);
// SEARCH USER
let searchResult =
serverData.users.find(
    user =>
    user.name === "Kiran"
);
console.log(
    searchResult
);
// DISPLAY USERS
serverData.users.forEach(user => {
    console.log(
        user.id,
        user.name
    );
});