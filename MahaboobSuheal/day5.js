const arrowMul=(a,b) =>{
    console.log(2*3);
}

// function in vowels

const countvowels=(str) => {
let count=0;
for(const char of str){
    if(
    count==="a"||
    count==="e"||
    count==="i"||
    count==="o"||
    count==="u"
      )
       {
        count++;
       }
    
}
console.log(count);
};

// find the largest number in an array 

let arr = [10, 25, 5, 40, 15];

let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Largest number:", largest);

// smallest 

let array = [10, 25, 5, 40, 15];

let smallest = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
        smallest = array[i];
    }
}

console.log("Smallest number:", smallest);


// sum of array 

let arr1 = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}

console.log("Sum:", sum);

// sort array in ascending order

let arr2 = [40, 10, 30, 20];

arr2.sort((a, b) => a - b);

console.log(arr2);

// find even number 

let arr3 = [1, 2, 3, 4, 5, 6];

let even = arr3.filter(num => num % 2 === 0);

console.log(even);