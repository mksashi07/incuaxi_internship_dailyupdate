// constructors ----> special method for defining the properties method of object

function Car (make,model,year,colour){
    this.make=make,
    this.model=model,
    this.year=year,
    this.colour=colour,
    this.drive= function() { console.log(`you drive the ${this.model}`) }
}
const car1=new Car("ford","mustang",1990,"green");
 console.log(car1.make); 
 console.log(car1.model);
 console.log(car1.year);
 console.log(car1.colour);

 const car2=new Car("suzuxi","mahindra",2000,"red");
 console.log(car2.make); 
 console.log(car2.model);
 console.log(car2.year);
 console.log(car2.colour);

 const car3=new Car("Thar","Tata",2001,"black");

 console.log(car3.make); 
 console.log(car3.model);
 console.log(car3.year);
 console.log(car3.colour);

 car1.drive();
 car2.drive();
 car3.drive();



 // class 

 class product {
    constructor (item,price){
        this.item=item;
        this.price=price;
    }
    displayproduct(){
        console.log(`item:${this.item}`);
        console.log(`price:$${this.price}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);

    }
 }

 const salesTax =0.05;

 const product1=new product("pant",17.9);
 product1.displayproduct();

 
 const product2=new product("shirt",21.9);
 product2.displayproduct();


 
 const product3=new product("baggy",10.02);
 product3.displayproduct();
 
 const Total =product1.calculateTotal(salesTax);

 console.log(`total price (with tax): $${Total.toFixed(2)}`);

 // static keyword

 class MathUtil{
    static PI = 3.14737;

    static getDiameter(radius){
        return radius * 2;
    }

    static Circumference(radius){
        return 2 * this.PI * radius;
    }

    static areaofTriangle(base,height){
        return 0.5 * base * height;
    }
 }

 console.log(MathUtil.PI);

 console.log(MathUtil.getDiameter(80));

 console.log(MathUtil.Circumference(20));

 console.log(MathUtil.areaofTriangle(20,40));


 class user{
    static userCount = 0;
    
    constructor(username){
        this.username=username;
        user.userCount++;
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
 }

 const user1 = new user("suheal");
 const user2 = new user("sandy");
 const user3 = new user("sam");

 console.log(user1.username);
 console.log(user2.username);
 console.log(user3.username);
 console.log(user.userCount);

 user1.sayHello();
 user2.sayHello();
 user3.sayHello();