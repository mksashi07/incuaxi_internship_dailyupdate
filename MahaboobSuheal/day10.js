// math object 
let x = 45;
let y = 4.08;
let z;
 
z =Math.floor(x);

z =Math.round(y);

z =Math.ceil(x);

z =Math.pow(x,y);

z =Math.trunc(y);

z =Math.sqrt(x);

z=Math.abs(x);

z =Math.sin(x);

z =Math.cos(x);

z =Math.tan(x);


console.log(z);

// switches -- it will an efficient replacement of else if statement

let day ="pizza";
switch(day){
    case 1:
        console.log("this is monday");
        break;
    case 2:
        console.log("this is tuesday");
        break;
     case 3:
        console.log("this is wednesday");
        break;
     case 4:
        console.log("this is thrusday");
        break;
     case 5:
        console.log("this is friday");
        break;
     case 6:
        console.log("this is satursday");
        break;
     case 7:
        console.log("this is sunday");
        break;
    default:
        console.log("this is public holiday");

}

// Method chaining -- calling one method after another in one coontineous line of code


// ---------- no method chaining ---------

let usernsme =prompt.sync("enter your username");
 
username =username.trim();
let letter =username.charat(0);
letter = letter.touppercase();

let extrachars = username.slice(1);
extrachars = extrachars.toLowercase();
username =letter +extrachars;

console.log(username);

// ------------method chaining------------

username = username.trim().charat(0).touppercase() + username.trim().slice(1).toLowercase();
console.log(username);
