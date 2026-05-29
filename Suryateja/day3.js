//do while loop
let i = 1;

do{
    document.write(i);
    document.write("<br>");
    i++;
}while(i <= 5);

let colors=["red","blue","orange"];
for(let color of colors){
    document.write(color);
    document.write("<br>");
}

//break statement
for(let i = 1; i <= 5; i++){

  if(i == 3){
    break;
  }

  document.write(i);
  document.write("<br>");
}

//continue statement
for(let i = 1; i <= 10; i++){

  if(i == 3){
    continue;
  }

  document.write(i);
  document.write("<br>");
}

//return
function add(a,b){
  return a + b;
}
document.write(add(10,20)+"<br><br>");


//array methods
// 1. push()
let fruits1 = ["Apple", "Banana"];
fruits1.push("Mango");
document.write("push(): " + fruits1 + "<br><br>");

// 2.pop()
let fruits2 = ["Apple", "Banana", "Mango"];
fruits2.pop();
document.write("pop(): " + fruits2 + "<br><br>");

// 3. unshift()
let fruits3 = ["Banana", "Mango"];
fruits3.unshift("Apple");
document.write("unshift(): " + fruits3 + "<br><br>");

// 4. shift()
let fruits4 = ["Apple", "Banana", "Mango"];
fruits4.shift();
document.write("shift(): " + fruits4 + "<br><br>");

// 5. length
let fruits5 = ["Apple", "Banana", "Mango"];
document.write("length(): " + fruits5.length + "<br><br>");

// 6. indexOf()
let fruits6 = ["Apple", "Banana", "Mango"];
document.write("indexOf(): " + fruits6.indexOf("Banana") + "<br><br>");

// 7. includes()
let fruits7 = ["Apple", "Banana", "Mango"];
document.write("includes(): " + fruits7.includes("Mango") + "<br><br>");

// 8. reverse()
let numbers1 = [1, 2, 3];
numbers1.reverse();
document.write("reverse(): " + numbers1 + "<br><br>");

// 9. sort()
let numbers2 = [3, 1, 2];
numbers2.sort();
document.write("sort(): " + numbers2 + "<br><br>");

// 10. concat()
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
document.write("concat(): " + c + "<br><br>");

// 11. slice()
let fruits8 = ["Apple", "Banana", "Mango", "Orange"];
document.write("slice(): " + fruits8.slice(1, 3) + "<br><br>");

// 12. splice()
let colorsArray = ["Red", "Blue", "Green"];
colorsArray.splice(1, 1, "Yellow");
document.write("splice(): " + colorsArray + "<br><br>");

// 13. join()
let fruits9 = ["Apple", "Banana", "Mango"];
document.write("join(): " + fruits9.join("-") + "<br><br>");

// 14. toString()
let fruits10 = ["Apple", "Banana", "Mango"];
document.write("toString(): " + fruits10.toString() + "<br><br>");

// 15. forEach()
let numbers3 = [1, 2, 3];
document.write("forEach(): <br>");
numbers3.forEach(function(num){
    document.write(num + "<br>");
});
document.write("<br>");

// 16. map()
let numbers4 = [1, 2, 3];
let result1 = numbers4.map(function(num){
    return num * 2;
});
document.write("map(): " + result1 + "<br><br>");

// 17. filter()
let numbers5 = [1, 2, 3, 4];
let even = numbers5.filter(function(num){
    return num % 2 == 0;
});
document.write("filter(): " + even + "<br><br>");

// 18. find()
let numbers6 = [10, 20, 30];
let result2 = numbers6.find(function(num){
    return num > 15;
});
document.write("find(): " + result2 + "<br><br>");

// 19. every()
let numbers7 = [2, 4, 6];
document.write("every(): " + numbers7.every(num => num % 2 == 0) + "<br><br>");

// 20. some()
let numbers8 = [1, 3, 4];
document.write("some(): " + numbers8.some(num => num % 2 == 0) + "<br><br>");
