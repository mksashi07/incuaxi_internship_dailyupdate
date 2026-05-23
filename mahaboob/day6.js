function dance(){
    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");
};
dance();

// function 

function dance(v1){
    console.log(`${v1} nacha raha hai`);
}
dance("ghoda");
dance("ghada");
dance("hiran");


// default parameter function 

function diffe(a=0,b=6){
    console.log(a-b);

}
diffe();

// rest => jab arguments kai sare ho to humaein utne hi parameter banaana padege
//  issey bachena ke liya rest use karte haii 
 
function num(a,b,c, ...val){
    console.log(a,b,c, val);
};
num(1,2,3,4,5,5,6,7,7,8,9,10);


// intermediate program array
 
let arr = [10,93,94,76,3];
 arr.forEach(function (val){
    console.log( val+7 );
 });

 // map operation in array

 let arr = [11, 22, 4, 6, 7, 9];
let newarr = arr.map(function(val) {
    if (val > 10) {
        return val;
    } else {
        return 0;  
    }
});

// filter in array

let arr = [1,34,56,67];
arr.filter(function(val){
    if (val > 30) return true;

});

  




