function loadStudent(id) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (
            xhr.readyState == 4 &&
            xhr.status == 200
        ) {
            console.log(
                xhr.responseText
            );
        }
    };
    xhr.open(
        "GET",
        "student.php?id=" + id,
        true
    );
    xhr.send();
}
loadStudent(1);
// JSON INTRODUCTION
let student = {
    id: 101,
    name: "Shreya",
    age: 21,
    course: "CSE"
};
console.log(student);
// JSON SYNTAX
let employee = {
    empId: 1001,
    empName: "Ravi",
    department: "IT"
};
console.log(employee);
// JSON VS XML
console.log("\nJSON VS XML");
console.log("JSON Uses Objects");
console.log("XML Uses Tags");
let jsonExample = {
    name: "Anil"
};
console.log(jsonExample);
// JSON DATA TYPES
let jsonData = {
    stringValue: "JavaScript",
    numberValue: 100,
    booleanValue: true,
    arrayValue: [
        "HTML",
        "CSS",
        "JS"
    ],
    objectValue: {
        city: "Hyderabad",
        state: "Telangana"
    },
    nullValue: null
};
console.log(jsonData);
console.log(
    "String:",
    jsonData.stringValue
);
console.log(
    "Number:",
    jsonData.numberValue
);
console.log(
    "Boolean:",
    jsonData.booleanValue
);
console.log(
    "Array:",
    jsonData.arrayValue
);
console.log(
    "Object:",
    jsonData.objectValue
);
console.log(
    "Null:",
    jsonData.nullValue
);
// JSON PARSE
let jsonString = `
{
    "name":"Shreya",
    "age":21,
    "course":"JavaScript"
}
`;
console.log(
    "JSON String:"
);
console.log(jsonString);
let parsedObject =
    JSON.parse(jsonString);
console.log(
    "Converted To Object:"
);
console.log(parsedObject);
console.log(
    parsedObject.name
);
console.log(
    parsedObject.course
);
// JSON STRINGIFY
let product = {
    productId: 501,
    productName: "Laptop",
    price: 50000
};
console.log(
    "Original Object:"
);
console.log(product);
let jsonOutput =
    JSON.stringify(
        product
    );
console.log(
    "JSON String:"
);
console.log(jsonOutput);
// ARRAY OF JSON OBJECTS
let students = [
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
];
students.forEach(student => {
    console.log(
        student.id,
        student.name
    );
});
// MODIFY JSON DATA
console.log(
    "\nMODIFY JSON DATA"
);
student.city = "Hyderabad";
student.phone =
    "9876543210";
console.log(student);
// DELETE PROPERTY
console.log(
    "\nDELETE PROPERTY"
);
delete student.age;
console.log(student);