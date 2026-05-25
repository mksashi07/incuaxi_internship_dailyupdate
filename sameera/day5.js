//ARRAYS
let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);
//accessing elements
cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
//overwriting elements
cars[0] = "Tesla";
console.log(cars[0]);
console.log(cars);
//Built in property
colors = ["black", "orange", "pink"]
booleans = [true, false, false, true];
emptyArray = [];
console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);
//arrays count the index of the elements which don't exist
numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);
console.log("numbers", numbers);
//Exercise
// Create an array with 3 shopping items
let shoppingList = ["Milk", "Bread", "Apples"];

// Check the length of the array
console.log("Length of shopping list:", shoppingList.length);

// Update "Bread" to "Bananas"
shoppingList[1] = "Bananas";

// Output the entire shopping list
console.log("Updated shopping list:", shoppingList);

//adding and replacing elements

//PUSH() METHOD
favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(favoriteFruits);

//SPLICE() METHOD
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);

arrOfShapes.splice(2, 2, "square", "trapezoid");
console.log(arrOfShapes);

//CONCATENATION
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);
//FINDING ELEMENTS
arr8 = [ 2, 6, 7, 8 ];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
//SORTING
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
let ages = [18, 72, 33, 56, 40];
ages.sort();
//EXERCISE
// 1. Create an empty shopping list
let shoppingList = [];

// 2. Add Milk, Bread, and Apples
shoppingList.push("Milk", "Bread", "Apples");

console.log("Initial List:", shoppingList);

// 3. Update "Bread" with Bananas and Eggs
shoppingList.splice(1, 1, "Bananas", "Eggs");

console.log("After Update:", shoppingList);

// 4. Remove the last item and output it
let removedItem = shoppingList.pop();

console.log("Removed Item:", removedItem);

// 5. Sort the list alphabetically
shoppingList.sort();

console.log("Sorted List:", shoppingList);

// 6. Find and output index of Milk
let milkIndex = shoppingList.indexOf("Milk");

console.log("Index of Milk:", milkIndex);

// 7. After Bananas, add Carrots and Lettuce
let bananaIndex = shoppingList.indexOf("Bananas");

shoppingList.splice(bananaIndex + 1, 0, "Carrots", "Lettuce");

console.log("After Adding Vegetables:", shoppingList);

// 8. Create a new list with Juice and Pop
let newList = ["Juice", "Pop"];

// 9. Combine both lists twice
shoppingList = shoppingList.concat(newList, newList);

console.log("Combined List:", shoppingList);

// 10. Get the last index of Pop
let popIndex = shoppingList.lastIndexOf("Pop");

console.log("Last Index of Pop:", popIndex);

// 11. Final List
console.log("Final Shopping List:", shoppingList);

//MULTIDIMENSIONAL ARRAYS
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];
let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let value1 = arrOfArrays[0][1];
let value2 = arrOfArrays[2][2];

//EXERCISE
// 1. Create an array with values 1, 2, and 3
let numbers = [1, 2, 3];

// 2. Nest the original array into a new array three times
let nestedArray = [numbers, numbers, numbers];

// 3. Output the value 2 from one of the nested arrays
console.log(nestedArray[1][1]);

//OBJECTS
let dog = { dogName: "JavaScript",
            weight: 2.4,
            color: "brown",
            breed: "chihuahua",
            age: 3,
            burglarBiter: true
          };
//EXERCISE
// 1. Create a myCar object
let myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "White",
    electric: false
};

// 2. Create a variable holding the property name "color"
let propertyName = "color";

// Change the color using bracket notation
myCar[propertyName] = "Black";

// 3. Change variable value to "forSale"
propertyName = "forSale";

// Add a new property using bracket notation
myCar[propertyName] = true;

// 4. Output make and model
console.log("Car Make:", myCar.make);
console.log("Car Model:", myCar.model);

// 5. Output forSale value
console.log("Is the car for sale?", myCar.forSale);     

//Objects in Objects
let company = { companyName: "Healthy Candy",
                activity: "food manufacturing",
                address: {
                  street: "2nd street",
                  number: "123",
                  zipcode: "33116",
                  city: "Miami",
                  state: "Florida"
                },
                yearOfEstablishment: 2021
              }; 
//Arrays in Objects
company = { companyName: "Healthy Candy",
                activities: ["food manufacturing",
"improving kids' health", "manufacturing toys"],
                address: {
                  street: "2nd street",
                  number: "123",
                  zipcode: "33116",
                  city: "Miami",
                  state: "Florida"
                },
                yearOfEstablishment: 2021
              };
//Objects in arrays
let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
},
{
 street: "1st West avenue",
 number: "5",
 zipcode: "75001",
 city: "Addison",
 state: "Texas"
}];
//manipulating the array
// Original array
const theList = [
    'Laurence',
    'Svekis',
    true,
    35,
    null,
    undefined,
    { test: 'one', score: 55 },
    ['one', 'two']
];

// Remove the first item
theList.shift();

// Remove the last item
theList.pop();

// Add "FIRST" to the beginning
theList.unshift("FIRST");

// Replace value at index 3 with "hello World"
theList[3] = "hello World";

// Replace value at index 2 with "MIDDLE"
theList[2] = "MIDDLE";

// Add "LAST" to the end
theList.push("LAST");

// Keep only the required values
theList.splice(4, theList.length - 5);

// Output the final array
console.log(theList);

//Example of company product catalog
// 1. Create an inventory array
let inventory = [];

// 2. Create three product objects
let item1 = {
    name: "Laptop",
    model: "Dell Inspiron",
    cost: 55000,
    quantity: 10
};

let item2 = {
    name: "Smartphone",
    model: "Samsung Galaxy",
    cost: 30000,
    quantity: 15
};

let item3 = {
    name: "Headphones",
    model: "Sony WH-1000XM4",
    cost: 12000,
    quantity: 8
};

// 3. Add all items to inventory array
inventory.push(item1, item2, item3);

// Log the full inventory
console.log("Inventory:", inventory);

// 4. Access quantity of the third item
console.log("Quantity of third item:", inventory[2].quantity);

// Adding another property
inventory[0].brand = "Dell";

// Accessing the new property
console.log("Brand of first item:", inventory[0].brand);