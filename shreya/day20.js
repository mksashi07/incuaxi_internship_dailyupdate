const student = {
    id: 101,
    name: "Shreya",
    branch: "CSE",
    cgpa: 9.2
};

console.log(student);
console.log("ID:", student.id);
console.log("Name:", student.name);
console.log("Branch:", student.branch);
console.log("CGPA:", student.cgpa);
// JSON ARRAY
const students = [
    {
        id: 101,
        name: "Shreya",
        branch: "CSE"
    },
    {
        id: 102,
        name: "Rahul",
        branch: "ECE"
    },
    {
        id: 103,
        name: "Priya",
        branch: "IT"
    },
    {
        id: 104,
        name: "Anil",
        branch: "MECH"
    }
];

students.forEach((student, index) => {
    console.log(
        index + 1,
        student.id,
        student.name,
        student.branch
    );
});

// JSON STRINGIFY
const jsonString = JSON.stringify(student);

console.log(jsonString);


// JSON STRINGIFY WITH FORMATTING


const formattedJson = JSON.stringify(student, null, 4);

console.log(formattedJson);

// JSON PARSE


const jsonText =
'{"id":201,"name":"Ravi","branch":"ECE","cgpa":8.7}';

const parsedObject = JSON.parse(jsonText);

console.log(parsedObject);
console.log("ID:", parsedObject.id);
console.log("Name:", parsedObject.name);
console.log("Branch:", parsedObject.branch);
console.log("CGPA:", parsedObject.cgpa);
// CONVERT ARRAY TO JSON STRING

const studentArrayString =
JSON.stringify(students);

console.log(studentArrayString);

// CONVERT JSON STRING TO ARRAY

const arrayString =
'[{"id":1,"name":"Asha"},{"id":2,"name":"Kiran"}]';

const parsedArray =
JSON.parse(arrayString);

parsedArray.forEach(item => {
    console.log(item.id, item.name);
});
// ADD NEW RECORD

students.push({
    id: 105,
    name: "Vijay",
    branch: "AI"
});

console.log(students);

// SEARCH RECORD

const foundStudent =
students.find(student => student.id === 103);

console.log(foundStudent);
// FILTER RECORDS

const cseStudents =
students.filter(student =>
student.branch === "CSE");

console.log(cseStudents);
// MAP DATA

const names =
students.map(student => student.name);

console.log(names);


// FETCH JSON DATA FROM API

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {

    console.log("Users From API");

    data.forEach(user => {
        console.log(
            user.id,
            user.name,
            user.email
        );
    });

})
.catch(error => {
    console.log("Error:", error);
});

// FETCH SINGLE USER
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(user => {

    console.log("\n===== SINGLE USER =====");

    console.log("ID:", user.id);
    console.log("Name:", user.name);
    console.log("Email:", user.email);

})
.catch(error => {
    console.log(error);
});
// JSONP SIMULATION
function displayData(data)
{
    console.log("JSONP Response");
    console.log(data);
}

displayData({
    id: 500,
    name: "JSONP User",
    branch: "CSE"
});
// NESTED JSON
const employee = {
    id: 1,
    name: "John",
    department: {
        deptId: 10,
        deptName: "Development"
    }
};

console.log(employee);
console.log(employee.department.deptName);