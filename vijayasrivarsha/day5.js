//THIS KEYWORD

//inside the function
let person = {
    name: "Varsha",
    greet: function() {
        console.log(this.name);
    }
};

person.greet(); 

// same function,different object

let obj1 = {
    name: "Varsha",
    greet: function() {
        console.log(this.name);
    }
};

let obj2 = {
    name: "Ravi"
};

obj2.greet = obj1.greet;

obj2.greet(); 


//constructor


function Student(name, age) {
    this.name = name;
    this.age = age;
}

let s1 = new Student("Varsha", 18);
let s2 = new Student("Ravi", 20);

console.log(s1.name); 
console.log(s2.age);  


//Constructor with Method
function Student(name) {
    this.name = name;

    this.greet = function() {
        console.log("Hello " + this.name);
    };
}

let s1 = new Student("Varsha");
s1.greet(); 


//class 

//Class WITH constructor

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

let s1 = new Student("Varsha", 18);
console.log(s1.name); 
s1.greet();           



//Class WITHOUT constructor


class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

let a1 = new Animal();
a1.eat(); 

//STATIC KEYWORD

class MathUtil
{
    static PI=3.14159;
    static getDiameter(radius)
    {
        return radius*2;
    }
    static getCircumference(radius)
    {
        return 2*this.PI*radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));



//INHERITANCE

//without constructor

class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

let d1 = new Dog();

d1.eat();  
d1.bark(); 


//with constructor

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);       
        this.breed = breed;     }

    bark() {
        console.log(this.name + " is barking");
    }
}

let d1 = new Dog("Tommy", "Labrador");

d1.eat();   
d1.bark();  
console.log(d1.breed); 

//SUPER KEYWORD

//WITH constructor

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);        
        this.breed = breed;
    }

    show() {
        console.log(this.name, this.breed);
    }
}

let d1 = new Dog("Tommy", "Labrador");
d1.show(); 
//without constructor

class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    eat() {
        super.eat(); 
        console.log("Dog is eating");
    }
}

let d1 = new Dog();
d1.eat();


//GETTER

class Student {
    constructor(name) {
        this.name = name;
    }

    get fullName() {
        return this.name;
    }
}

let s1 = new Student("Varsha");

console.log(s1.fullName); 


//setter

class Student {
    constructor(name) {
        this._name = name; 
    }

    set name(value) {
        this._name = value;
    }
}

let s1 = new Student("Varsha");

s1.name = "Ravi";   
console.log(s1._name); 


//GETTER+SETTER
class Student {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let s1 = new Student("Varsha");

console.log(s1.name);
s1.name = "Ravi";    


//DESTRUCTURING

//arrays
let arr = [10, 20, 30];

let [a, b, c] = arr;

console.log(a, b, c);

//skipping value
let arr = [10, 20, 30];

let [a, , c] = arr;

console.log(a, c); 

//Default values
let arr = [10];

let [a, b = 50] = arr;

console.log(a, b); 

//Swapping variables

let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(x, y); 

//objects

let student = {
    name: "Varsha",
    age: 18
};

let { name, age } = student;

console.log(name, age); 

//Renaming variables

let student = {
    name: "Varsha"
};

let { name: studentName } = student;

console.log(studentName); 

//Default values

let student = {
    name: "Varsha"
};

let { name, marks = 0 } = student;

console.log(name, marks); 

//Function Parameter Destructuring
function display({ name, age }) {
    console.log(name, age);
}

let student = { name: "Varsha", age: 18 };

display(student);

//Nested Destructuring
let student = {
    name: "Varsha",
    marks: {
        math: 90
    }
};

let { marks: { math } } = student;

console.log(math); 