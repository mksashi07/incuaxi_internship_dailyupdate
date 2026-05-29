//1. Create a File and Write Data
// fs module import
const fs = require('fs');

// Writing data into a file
fs.writeFile('sample.txt', 'Hello from Node.js!', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File created and data written successfully');
    }
});
//2. Read Data from File
const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File Content:', data);
    }
});
//3.Append data to file
const fs = require('fs');

fs.appendFile('sample.txt', '\nThis is appended text.', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Data appended successfully');
    }
});
//4.Delete a file
const fs = require('fs');

fs.unlink('sample.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File deleted successfully');
    }
});