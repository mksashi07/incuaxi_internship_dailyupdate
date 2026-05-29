// JSON INTRO

console.log("===== JSON INTRO =====");
const studentJSON = `
{
  "name": "Ayesha",
  "age": 20,
  "course": "CSE"
}
`;
console.log(studentJSON);

// JSON SYNTAX
console.log("\n===== JSON SYNTAX =====");
const syntaxExample = {
  name: "Rahul",
  age: 21,
  isStudent: true
};
console.log(syntaxExample);

// JSON vs XML
console.log("\n===== JSON vs XML =====");
const jsonData = {
  name: "Ayesha"
};

const xmlData = `
<student>
  <name>Ayesha</name>
</student>
`;

console.log("JSON:");
console.log(jsonData);

console.log("XML:");
console.log(xmlData);

// JSON DATA TYPES
console.log("\n===== JSON DATA TYPES =====");
const dataTypes = {
  string: "Hello",
  number: 100,
  boolean: true,
  array: [1, 2, 3],
  object: { city: "Anantapur" },
  nullValue: null
};

console.log(dataTypes);

// JSON PARSE
console.log("\n===== JSON PARSE =====");

const jsonString = '{"name":"Ayesha","age":20}';

const parsedObject = JSON.parse(jsonString);

console.log(parsedObject);
console.log(parsedObject.name);
console.log(parsedObject.age);

// JSON STRINGIFY

console.log("\n===== JSON STRINGIFY =====");

const jsObject = {
  name: "Ayesha",
  age: 20
};

const stringifiedData = JSON.stringify(jsObject);

console.log(stringifiedData);

// JSON OBJECTS

console.log("\n===== JSON OBJECTS =====");

const student = {
  name: "Ayesha",
  age: 20,
  branch: "CSE"
};

console.log(student);
console.log(student.name);
console.log(student.branch);

// JSON ARRAYS

console.log("\n===== JSON ARRAYS =====");

const colors = ["Red", "Green", "Blue"];

console.log(colors);
console.log(colors[0]);
console.log(colors[2]);

const students = [
  { name: "Ayesha", age: 20 },
  { name: "Rahul", age: 21 }
];

console.log(students);
console.log(students[1].name);

// JSON SERVER (SIMULATION)

console.log("\n===== JSON SERVER =====");

// Fake database data
const db = {
  students: [
    { id: 1, name: "Ayesha" },
    { id: 2, name: "Rahul" }
  ]
};

console.log("Server Data:");
console.log(db);

// JSON PHP (SIMULATION)

console.log("\n===== JSON PHP =====");

// Simulating PHP json_encode output
const phpData = {
  name: "Ayesha",
  age: 20
};

const phpJSON = JSON.stringify(phpData);

console.log("PHP JSON Output:");
console.log(phpJSON);

// JSON HTML (SIMULATION)

console.log("\n===== JSON HTML =====");

const htmlData = {
  title: "Student Details",
  studentName: "Ayesha"
};

const htmlContent = `
<h1>${htmlData.title}</h1>
<p>${htmlData.studentName}</p>
`;

console.log(htmlContent);

// JSON JSONP

console.log("\n===== JSON JSONP =====");

function display(data) {
  console.log("JSONP Response:");
  console.log(data);
}

// Simulated JSONP callback
display({
  name: "Ayesha",
  age: 20
});

// END

console.log("\n===== ALL JSON TOPICS COMPLETED =====");