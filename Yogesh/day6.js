// Creating object
let student = {
    name: "Yogesh",
    age: 20,
    course: "JavaScript"
};

// Accessing object values using dot notation
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);

// Updating property
student.age = 21;
console.log("Updated Age:", student.age);

// Adding new property
student.city = "Kurnool";
console.log("Added City:", student.city);

// Deleting property
delete student.course;

// Final object after all changes
console.log("Final Object:", student);



//This keyword
let student1 = {
    name: "Yogesh",
    age: 20,

    show: function() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
};

student1.show();



//object Methods

const person1 = {
    name: "Yogesh",
    food: "Pizza",
    sayhello: function(){console.log('Hello! My name is ' + this.name );},
}
const person2 = {
    name: "Yogiii",
    food: "Pizzaaaaa",
    sayhello: ()=>{console.log('Hello! My name is ' + this.name );},
}
person1.sayhello();