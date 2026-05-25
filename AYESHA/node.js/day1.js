//modules in node js

//math.js
function add(a,b) {
    return a+b;
}
function sub(a,b){
    return a-b;
}
module.exports= {
    add,
    sub
}
//index.js
const math = require("./math");

console.log(math.add(5, 10), math.sub(10, 5));


//File Handling in nodejs

const fs = require("fs");
//create a file by Sync method
fs.writeFileSync("hello.txt", "Heyyy Youuu.....");


//create a file by Async method
fs.writeFile("hello2.txt", "Heyyy Youuu... Async", (err) => {});


//read a file by Sync method
const read=fs.readFileSync("./hello2.txt", "utf-8" );
console.log(read);


//read a file by Async method
const read=fs.readFile("./hello.txt", "utf-8")
console.log(read);//it will not print the content of file because it is async 
// method and it will execute before reading the file 



//read file by Async method 
fs.readFile("./hello2.txt", "utf-8" , (err, read) => {
    if(err){
        console.log("error:", err);
    }else{
        console.log(read);
    }
});