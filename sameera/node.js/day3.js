const amount = 12
if(amount < 10){
    console.log('small number');
}
else{
    console.log('large number');
}
console.log(`hey it's my first node app!!`)
//GLOBALS  are the variables,functions and objects available everywhere in our application without importing them-NO WINDOW !!!!
//-dir name -path to current directory
//-filename - file name
//require -function to use modules (common JS)
//MODULE -info about current module (file)
//process -info about environment where the program  is being executed

//Modules
const john = 'john'
const peter = 'peter'

const sayHi = (name) => {
    console.log('hello there ${name}')
}
sayHi('susan')
sayHi(john)
sayHi(peter)

//Modules -Encapsulated Code (only share minimum)
//local
const secret = 'super secret'
//global(share)
const joh = 'joh'
const pete = 'pete'

console.log(module)
module.exports = {joh,pete}

//export default
module.exports = sayHi


//mind grenade
const num1 = 5;
const num2 = 10;

function addvalues(){
   console.log('the sum is :${num1 + num2}')
}
addvalues()

//Built-in- modules
//1. OS module
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);
//2.path module
const path = require('path');
console.log(path.sep)
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)
