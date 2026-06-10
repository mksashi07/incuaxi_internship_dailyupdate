//File Upload is the process of sending files (images, PDFs, documents, videos) from a client to a server.
//Single File Upload
const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({
    dest: "uploads/"
});

app.post(
    "/upload",
    upload.single("profile"),
    (req, res) => {
        res.send("File Uploaded Successfully");
    }
);

app.listen(3000);

//Multiple File Upload
const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({
    dest: "uploads/"
});

app.post(
    "/gallery",
    upload.array("photos", 5),
    (req, res) => {
        res.send("Multiple Files Uploaded");
    }
);

app.listen(3000);

//Upload PDF Files Only
const multer = require("multer");

const upload = multer({

    fileFilter(req, file, cb) {

        if (
            file.mimetype ===
            "application/pdf"
        ) {
            cb(null, true);
        } else {
            cb(new Error("Only PDF Allowed"));
        }

    }

});

//Custom File Name
const multer = require("multer");

const storage = multer.diskStorage({

    destination(req, file, cb) {
        cb(null, "uploads/");
    },

    filename(req, file, cb) {

        cb(
            null,
            Date.now() +
            "-" +
            file.originalname
        );

    }

});

const upload = multer({
    storage
});

//Testing is the process of checking whether an application works correctly and meets the expected requirements.
//Unit test using node.js assert
const assert = require("assert");

function add(a, b) {
    return a + b;
}

assert.strictEqual(add(10, 20), 30);

console.log("Test Passed");

//Testing Multiple Functions
const assert = require("assert");

function isEven(num) {
    return num % 2 === 0;
}

assert.strictEqual(isEven(4), true);
assert.strictEqual(isEven(7), false);
assert.strictEqual(isEven(10), true);

console.log("All Tests Passed");

//Testing a Subtraction Function
const assert = require("assert");

function subtract(a, b) {
    return a - b;
}

assert.strictEqual(subtract(20, 5), 15);

console.log("Subtraction Test Passed");

//Testing String Length
const assert = require("assert");

function getLength(text) {
    return text.length;
}

assert.strictEqual(getLength("NodeJS"), 6);

console.log("String Length Test Passed");

//Authentication is the process of verifying the identity of a user before allowing access to an application.
//Password Hashing using bcrypt
const bcrypt = require("bcrypt");

const password = "myPassword123";

bcrypt.hash(password, 10)
.then(hash => {
    console.log("Hashed Password:");
    console.log(hash);
});

//JWT Authentication
const jwt = require("jsonwebtoken");

const user = {
    id: 101,
    name: "Mounika"
};

const token = jwt.sign(
    user,
    "mySecretKey",
    { expiresIn: "1h" }
);

console.log(token);

//Compare Password using bcrypt
const bcrypt = require("bcrypt");

const password = "admin123";

bcrypt.hash(password, 10)
.then(hash => {

    bcrypt.compare(
        "admin123",
        hash
    )
    .then(result => {
        console.log(result);
    });

});

//Verify User Token
const jwt = require("jsonwebtoken");

const token = jwt.sign(
    { id: 101 },
    "secret"
);

const decoded = jwt.verify(
    token,
    "secret"
);

console.log(decoded);