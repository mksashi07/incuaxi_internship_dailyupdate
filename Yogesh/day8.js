//getter and setter
class Rectangle{
    constructor(width, height){
        this.height = height;
        this.width = width;
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }else{
            console.log("Width must be positive");
        }
    }
     set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }else{
            console.log("Height must be positive");
        }
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
}
const rect = new Rectangle(10, 5);
rect.width = -10000;
rect.height = "pizza";
console.log(rect.width);
console.log(rect.height);

//destructuring 
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a);
console.log(b);

//destructuring arrays
const numbers = ["one", "two", "three", "four", "five"];
[numbers[0], numbers[4]] = [numbers[4], numbers[0]];
console.log(numbers);

//Extract values from objects
function displayInfo({firstName, lastName, age}){

}

const person = {
    firstName: "YO",
    lastName: "Doe",
    age: 30,
    job: "Developer"
}
const person1 = {
    firstName: "David",
    lastName: "Putra",
    age: 34
}
const {firstName, lastName, age} = person;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log()

//Nested Objects
class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
const person2 = new Person("Alice", 30, "123 Main St", 
                                         "New York", 
                                         "USA");
const person3 = new Person("Bob", 25, "456 Elm St", 
                                      "Los Angeles", 
                                      "USA");
console.log(person2.name);
console.log(person2.age);
console.log(person2.address);
console.log(person2.address[0]);
console.log(person2.address[1]);