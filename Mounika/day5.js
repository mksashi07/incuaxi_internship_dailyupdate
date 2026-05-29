
//An object stores data in key-values
let student = {
    name: "Vaishnavi",
    age: 21,
    course: "JavaScript"
};
console.log(student);

//Accessing Object Properties
//There are 2 ways:1.Dot notation 
let student = {
    name: "Rupa",
    age: 21
};
console.log(student.name);

// 2.Bracket notation
let student = {
    name: "Rupa",
    age: 21
};
console.log(student["age"]);
//An object stores data in key-values
let student = {
    name: "Vaishnavi",
    age: 21,
    course: "JavaScript"
};
console.log(student);

//Accessing Object Properties
//There are 2 ways:1.Dot notation 
let student = {
    name: "Rupa",
    age: 21
};
console.log(student.name);

// 2.Bracket notation
let student = {
    name: "Rupa",
    age: 21
};
console.log(student["age"]);
//Object methods - Functions inside objects are called methods.
let student = {
    name: "Mounika",
    hello: function() {
        console.log("I love javascript");
    }
};
student.hello();
//this keyword - this refers to the current object.
let student = {
    name: "Puneeth",
    display: function() {
        console.log(this.name);
    }
};
student.display();

//Object.keys() - it returns all keys in the object
let student = {
    name: "Rupa",
    age: 27,
    city: "Adoni"
};
console.log(Object.keys(student));

//Object.values - it returns all values of an object
let student = {
    name: "Mounika",
    age: 21,
    city: "Vijayawada"
};
console.log(Object.values(student));

//Object Example
let student = {
    name: "Puneeth",
    marks: 89,
    department: "cse",
    details: function() {
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
        console.log("Department:", this.department);
    }
};

//this keyword - this refers to the current object.
let student = {
    name: "Puneeth",
    display: function() {
        console.log(this.name);
    }
};
student.display();

//Object.keys() - it returns all keys in the object
let student = {
    name: "Rupa",
    age: 27,
    city: "Adoni"
};
console.log(Object.keys(student));

//Object.values - it returns all values of an object
let student = {
    name: "Mounika",
    age: 21,
    city: "Vijayawada"
};
console.log(Object.values(student));

//Object Example
let student = {
    name: "Puneeth",
    marks: 89,
    department: "cse",
    details: function() {
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
        console.log("Department:", this.department);
    }
};
student.details();
console.log(Object.keys(student));
console.log(Object.values(student));
//String - it  is a sequence of characters used to store text.
let name = "Mounika";
let city = 'Ananthapur';
console.log(name);
console.log(city);

//length - it returns the number of characters in a string.
let text = "Ilovejavascript";
console.log(text.length);

// toUpperCase() - Converts all characters into uppercase letters.
let student = "Ilovejavascript";
console.log(student.toUpperCase());

//toLowerCase() - Converts all characters into lowercase letters.
let student = "IloveJavaScript";
console.log(student.toLowerCase());

//trim() - Remove spaces from beginning and ending
let text = "   JavaScript   ";
console.log(text.trim());

//substring() Extracts part of a string.
let text = "JavaScript";
console.log(text.snbstring(0,7));

//replace() - Replaces one with another
let text = "I like Java";
let result = text.replace("Java", "Mango so much");
console.log(result);

// Strings Example
let language = " javascript ";
let name = "Mounika";
console.log(language.length);
console.log(language.toUpperCase());
console.log(language.trim());
console.log(language.substring(1, 5));
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.trim());
console.log(name.substring(1, 5));
console.log(name.substring(1, 5));
