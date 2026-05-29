const fs = require('fs');
const { Duplex, Transform } = require('stream');

const readStream = fs.createReadStream('input.txt', 'utf8');

readStream.on('data', (chunk) => {
    console.log(chunk);
});

readStream.on('end', () => {
    console.log('Reading Completed');
});

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello Node.js');

writeStream.end();

writeStream.on('finish', () => {
    console.log('Writing Completed');
});

class MyDuplex extends Duplex {
    _read(size) {
        this.push('Reading Data');
        this.push(null);
    }

    _write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
}

const duplex = new MyDuplex();

duplex.write('Writing Data');

duplex.on('data', (chunk) => {
    console.log(chunk.toString());
});

class UpperCase extends Transform {
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
}

const transform = new UpperCase();

transform.on('data', (chunk) => {
    console.log(chunk.toString());
});

transform.write('hello stream');

transform.end();                               day 3 node.jsconst fs = require('fs');
const { Duplex, Transform } = require('stream');

const readStream = fs.createReadStream('input.txt', 'utf8');

readStream.on('data', (chunk) => {
    console.log(chunk);
});

readStream.on('end', () => {
    console.log('Reading Completed');
});

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello Node.js');

writeStream.end();

writeStream.on('finish', () => {
    console.log('Writing Completed');
});

class MyDuplex extends Duplex {
    _read(size) {
        this.push('Reading Data');
        this.push(null);
    }

    _write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
}

const duplex = new MyDuplex();

duplex.write('Writing Data');

duplex.on('data', (chunk) => {
    console.log(chunk.toString());
});

class UpperCase extends Transform {
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
}

const transform = new UpperCase();

transform.on('data', (chunk) => {
    console.log(chunk.toString());
});

transform.write('hello stream');

transform.end();                               day 3 node.js
