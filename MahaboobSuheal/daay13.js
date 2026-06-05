class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    
    get name() {
        return this._name;
    }

    
    set name(newName) {
        this._name = newName;
    }

    
    get age() {
        return this._age;
    }

    
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Age must be greater than 0");
        }
    }
}

const person1 = new Person("Suheal", 22);

console.log(person1.name); 
console.log(person1.age);  

person1.name = "Syed";     
person1.age = 23;          

console.log(person1.name);
console.log(person1.age);