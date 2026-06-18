console.log("gClosures");

function createCounter() {
    let counter = 0;

    return function () {
        counter = counter + 1;
        return counter;
    };
}

const counter1 = createCounter();

console.log("Counter Example");
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

function createBankAccount(name) {
    let balance = 1000;

    return {
        deposit(amount) {
            balance = balance + amount;
            console.log(name + " deposited " + amount);
            console.log("Balance = " + balance);
        },

        withdraw(amount) {
            if (amount <= balance) {
                balance = balance - amount;
                console.log(name + " withdrew " + amount);
                console.log("Balance = " + balance);
            } else {
                console.log("Insufficient Balance");
            }
        },

        checkBalance() {
            console.log(name + " Balance = " + balance);
        }
    };
}

const account = createBankAccount("Mounika");

console.log("\nBank Account Example");

account.checkBalance();
account.deposit(500);
account.withdraw(200);
account.withdraw(300);
account.deposit(1000);
account.checkBalance();

function createGreeting(name) {
    return function (message) {
        console.log(name + " says: " + message);
    };
}

const user1 = createGreeting("Mounika");
const user2 = createGreeting("Teja");

console.log("\nGreeting Closure Example");

user1("Hello");
user1("Welcome");
user2("Good Morning");
user2("Have a Nice Day");

function multiplyBy(number) {
    return function (value) {
        return value * number;
    };
}

const doubleValue = multiplyBy(2);
const tripleValue = multiplyBy(3);
const fiveTimes = multiplyBy(5);

console.log("\nFunction Factory Example");

console.log(doubleValue(10));
console.log(tripleValue(10));
console.log(fiveTimes(10));

function createStudent(name, marks) {
    let studentMarks = marks;

    return {
        getName() {
            return name;
        },

        getMarks() {
            return studentMarks;
        },

        addMarks(value) {
            studentMarks = studentMarks + value;
        }
    };
}

const student = createStudent("Mounika", 85);

console.log("\nStudent Example");

console.log(student.getName());
console.log(student.getMarks());

student.addMarks(10);

console.log(student.getMarks());

function createTimer() {
    let count = 0;

    return function () {
        count = count + 1;
        console.log("Timer Count = " + count);
    };
}

const timer = createTimer();

console.log("\nTimer Example");

timer();
timer();
timer();
timer();

function createInventory() {
    let items = 0;

    return {
        addItem() {
            items = items + 1;
            console.log("Items = " + items);
        },

        removeItem() {
            if (items > 0) {
                items = items - 1;
            }

            console.log("Items = " + items);
        }
    };
}

const store = createInventory();

console.log("\nInventory Example");

store.addItem();
store.addItem();
store.addItem();
store.removeItem();
store.addItem();

console.log("\n JavaScript Closures Demo");