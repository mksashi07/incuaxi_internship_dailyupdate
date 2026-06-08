// Student object with  method

const student = {
    name: "kiran",
    rollNo: 101,
    marks: [85, 90, 78],

    getAverage: function () {
        let sum = 0;

        for (let mark of this.marks) {
            sum += mark;
        }

        return sum / this.marks.length;
    }
};

console.log("Student Name:", student.name);
console.log("Average Marks:", student.getAverage());


// calculation 

const employee = {
    name: "kiran",
    basicSalary: 30000,
    hra: 5000,
    bonus: 2000,

    totalSalary: function () {
        return this.basicSalary + this.hra + this.bonus;
    }
};

console.log("Employee:", employee.name);
console.log("Total Salary:", employee.totalSalary());


// object inside array

const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Tablet", price: 15000 }
];

for (let product of products) {
    console.log(product.name + " - " + product.price);
}




// string methods = allow you to manipulate and work with text (string)
// charAt is to get the character at the index

let userName = "Brocode";
console.log(userName.charAt(1));

// index.Of = index value

let username = "  apnacollege";
console.log(username.indexOf("a"));

console.log(username.lastIndexOf("a"));

console.log(username.length);

console.log(username.trim ());

console.log(username.toUpperCase());

console.log(username.toLowerCase());

console.log(username.repeat(5));

console.log(username.startsWith(" "));

console.log(username.includes("  "));



let phonenumber = "123-456-6780";
phonenumber = phonenumber.replaceAll("-","");
console.log(phonenumber);

phonenumber = phonenumber.padStart(20,"2");
phonenumber = phonenumber.padEnd(19,"8");