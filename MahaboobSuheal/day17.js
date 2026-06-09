let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess(userGuess) {
    if (userGuess === secretNumber) {
        console.log("🎉 Correct Guess!");
    } else if (userGuess > secretNumber) {
        console.log("Too High!");
    } else {
        console.log("Too Low!");
    }
}

checkGuess(5);


class ContactBook {
    constructor() {
        this.contacts = [];
    }

    addContact(name, phone) {
        this.contacts.push({ name, phone });
    }

    searchContact(name) {
        return this.contacts.find(contact => contact.name === name);
    }
}

const book = new ContactBook();

book.addContact("Suheal", "9876543210");
book.addContact("Syed", "9123456780");

console.log(book.searchContact("Alice"));