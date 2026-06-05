// alert()
   alert("Welcome to JavaScript");

   // console.log()
   console.log("JavaScript Started");

   // Variables
   let name = "Surya";
   const age = 21;

   // document.write()
   document.write("<h2>User Details</h2>");

   document.write("Name: " + name);
   document.write("<br>");

   document.write("Age: " + age);
   document.write("<br><br>");



   // Data Types
   let isStudent = true;

   document.write("Boolean Value: " + isStudent);
   document.write("<br><br>");


   
   // Arithmetic Operators
   let a = 10;
   let b = 5;

   document.write("<h2>Arithmetic Operators</h2>");

   document.write("Addition: " + (a + b));
   document.write("<br>");

   document.write("Subtraction: " + (a - b));
   document.write("<br>");

   document.write("Multiplication: " + (a * b));
   document.write("<br>");

   document.write("Division: " + (a / b));
   document.write("<br>");

   document.write("Modulus: " + (a % b));
   document.write("<br><br>");



   // Comparison Operators
   document.write("<h2>Comparison Operators</h2>");

   document.write(a > b);
   document.write("<br>");

   document.write(a == b);
   document.write("<br><br>");



   // if else
   document.write("<h2>If Else Statement</h2>");

   if(age >= 18){
      document.write("Adult");
   }
   else{
      document.write("Minor");
   }

   document.write("<br><br>");



   // else if
   let marks = 80;

   document.write("<h2>Else If Statement</h2>");

   if(marks >= 90){
      document.write("A Grade");
   }
   else if(marks >= 70){
      document.write("B Grade");
   }
   else{
      document.write("Fail");
   }

   document.write("<br><br>");



   // for loop
   document.write("<h2>For Loop</h2>");

   for(let i=1; i<=5; i++){

      document.write(i);
      document.write("<br>");

   }

   document.write("<br>");



   // while loop
   document.write("<h2>While Loop</h2>");

   let i = 1;

   while(i <= 3){

      document.write(i);
      document.write("<br>");

      i++;

   }
