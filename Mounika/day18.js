// JavaScript Function bind() 

const employee1 = {
    id: 101,
    name: "Mounika",
    department: "CSE",
    salary: 50000
};

const employee2 = {
    id: 102,
    name: "Teja",
    department: "ECE",
    salary: 60000
};

const employee3 = {
    id: 103,
    name: "Ravi",
    department: "IT",
    salary: 70000
};

function employeeDetails(city, state) {
    console.log("Employee Information");
    console.log("ID:", this.id);
    console.log("Name:", this.name);
    console.log("Department:", this.department);
    console.log("Salary:", this.salary);
    console.log("City:", city);
    console.log("State:", state);
    console.log();
}

const emp1 = employeeDetails.bind(
    employee1,
    "Anantapur",
    "Andhra Pradesh"
);

const emp2 = employeeDetails.bind(
    employee2,
    "Hyderabad",
    "Telangana"
);

const emp3 = employeeDetails.bind(
    employee3,
    "Bangalore",
    "Karnataka"
);

emp1();
emp2();
emp3();

console.log("Using bind() with Greeting Function\n");

function greet(message) {
    console.log(message + " " + this.name);
}

const person1 = {
    name: "Mounika"
};

const person2 = {
    name: "Teja"
};

const sayHello = greet.bind(person1, "Hello");
const sayWelcome = greet.bind(person2, "Welcome");

sayHello();
sayWelcome();

console.log("\nUsing bind() with Calculator\n");

function calculate(gst, amount) {
    const total = amount + (amount * gst / 100);

    console.log("Customer:", this.customer);
    console.log("Amount:", amount);
    console.log("GST:", gst + "%");
    console.log("Total Amount:", total);
    console.log();
}

const customer1 = {
    customer: "ABC Store"
};

const customer2 = {
    customer: "XYZ Store"
};

const bill1 = calculate.bind(customer1, 18);
const bill2 = calculate.bind(customer2, 12);

bill1(1000);
bill1(2000);

bill2(3000);
bill2(4000);

console.log("Using bind() with setTimeout\n");

const student = {
    name: "Mounika",
    course: "JavaScript",

    display: function () {
        console.log("Student Name:", this.name);
        console.log("Course:", this.course);
        console.log();
    }
};

setTimeout(
    student.display.bind(student),
    2000
);

console.log("Waiting for setTimeout Output...\n");

console.log("Method Borrowing Example\n");

const company1 = {
    companyName: "Tech Solutions"
};

const company2 = {
    companyName: "Future Systems"
};

function showCompany(location) {
    console.log("Company:", this.companyName);
    console.log("Location:", location);
    console.log();
}

const companyInfo1 =
    showCompany.bind(company1, "Hyderabad");

const companyInfo2 =
    showCompany.bind(company2, "Bangalore");

companyInfo1();
companyInfo2();

console.log("bind() Returns a New Function\n");

function multiply(a, b) {
    return a * b;
}

const multiplyBy10 =
    multiply.bind(null, 10);

console.log("10 x 5 =", multiplyBy10(5));
console.log("10 x 8 =", multiplyBy10(8));
console.log("10 x 12 =", multiplyBy10(12));

console.log();

function introduce(city, state) {
    console.log(
        "Name:",
        this.name,
        "| City:",
        city,
        "| State:",
        state
    );
}

const user = {
    name: "Mounika"
};

const intro =
    introduce.bind(
        user,
        "Anantapur",
        "Andhra Pradesh"
    );

intro();

console.log("\nJavaScript bind() Demonstration Completed");