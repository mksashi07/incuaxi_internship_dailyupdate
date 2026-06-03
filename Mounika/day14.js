const person = {
    firstName: "John",
    lastName: "Doe",

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log("Object Method:");
console.log(person.fullName());

function regularFunction() {
    console.log("\nRegular Function:");
    console.log(this);
}

regularFunction();

function strictFunction() {
    "use strict";
    console.log("\nStrict Mode Function:");
    console.log(this);
}

strictFunction();

const student = {
    name: "Mounika",

    showName: function () {
        console.log("\nObject Method with this:");
        console.log(this.name);
    }
};

student.showName();

const employee = {
    name: "Teja"
};

function display() {
    console.log("\nUsing call():");
    console.log(this.name);
}

display.call(employee);

function displayDetails(city, state) {
    console.log("\nUsing apply():");
    console.log(this.name + " " + city + " " + state);
}

displayDetails.apply(employee, ["Anantapur", "Andhra Pradesh"]);

const teacher = {
    name: "Siri"
};

function greet() {
    console.log("\nUsing bind():");
    console.log("Hello " + this.name);
}

const boundFunction = greet.bind(teacher);
boundFunction();

const arrowObj = {
    name: "Arrow Example",

    show: () => {
        console.log("\nArrow Function:");
        console.log(this.name);
    }
};

arrowObj.show();

const user = {
    name: "Ravi",

    showUser: function () {
        const arrow = () => {
            console.log("\nArrow Inside Method:");
            console.log(this.name);
        };

        arrow();
    }
};

user.showUser();

console.log("\nGlobal This:");
console.log(this);

console.log("\nGlobalThis:");
console.log(globalThis);