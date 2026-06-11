// 1. JavaScript Object
let student = {
    name: "Vanaja",
    age: 20,
    city: "Anantapur",
    course: "JavaScript",
    isStudent: true,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        state: "Andhra Pradesh",
        country: "India"
    }
};
console.log("JavaScript Object");
console.log(student);
// 2. Object to JSON
// JSON.stringify()
let jsonData = JSON.stringify(student);
console.log("Object to JSON");
console.log(jsonData);
// 3. JSON to Object
// JSON.parse()
let objData = JSON.parse(jsonData);
console.log("JSON to Object");
console.log(objData);
// 4. Access JSON Data
console.log("Access Data");
console.log(objData.name);
console.log(objData.age);
console.log(objData.skills[0]);
console.log(objData.address.state);
// 5. Array to JSON
let fruits = ["Apple", "Banana", "Mango"];
let fruitsJSON = JSON.stringify(fruits);
console.log("Array to JSON");
console.log(fruitsJSON);
// 6. JSON Array
let employees = [
    {
        id: 1,
        name: "Ram"
    },
    {
        id: 2,
        name: "Sita"
    }
];
console.log("JSON Array");
console.log(employees);
console.log(employees[0].name);
console.log(employees[1].name);
// 7. Nested JSON Object
let company = {
    companyName: "IncuxAI",
    employees: {
        emp1: {
            name: "Ravi",
            role: "Developer"
        },
        emp2: {
            name: "Anu",
            role: "Designer"
        }
    }
};
console.log("Nested JSON Object");
console.log(company);
console.log(company.employees.emp1.name);
console.log(company.employees.emp2.role);
// 8. Convert JSON String to Object
let personJSON =
'{"name":"Krishna","age":25,"city":"Hyderabad"}';
let personObj = JSON.parse(personJSON);
console.log("JSON String to Object");
console.log(personObj);
// 9. Loop Through JSON Data
console.log("Looping JSON Data");
for(let key in objData)
{
    console.log(key + " : " + objData[key]);
}
// 10. Fetch API with JSON
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data => {
    console.log("Fetch API JSON Data");
    console.log(data);
})
.catch(error => {
    console.log(error);
});
// 11. JSON Methods
console.log("JSON Methods");
console.log(JSON.stringify(student));
console.log(JSON.parse(jsonData));
// 12. JSON Data Types
let jsonTypes = {
    string: "Hello",
    number: 100,
    boolean: true,
    array: [1, 2, 3],
    object: {
        city: "Anantapur"
    },
    nullValue: null
};
console.log("JSON Data Types");
console.log(jsonTypes);
// 13. Add New Data
objData.email = "vanaja@gmail.com";
console.log("After Adding Data");
console.log(objData);
// 14. Delete Data
delete objData.city;
console.log("After Deleting Data");
console.log(objData);
// 15. Update Data
objData.course = "NodeJS";
console.log("After Updating Data");
console.log(objData);
// 16. Convert Object Keys to Array
console.log("Object Keys");
console.log(Object.keys(objData));
// 17. Convert Object Values to Array
console.log("Object Values");
console.log(Object.values(objData));
// 18. Check JSON Type
console.log(typeof jsonData);
console.log(typeof objData);
// 19. Pretty Print JSON
let prettyJSON =
JSON.stringify(student, null, 4);
console.log("Pretty JSON");
console.log(prettyJSON);
// 20. Final Message
console.log("Complete JSON Topic Finished");

