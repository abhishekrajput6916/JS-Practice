// let arr=["abhi","ram","mohan"];
// let obj={
//     name:"abhi",
//     city:"ujjain",
//     getIntro:function(){
//         console.log(this.name +" from "+ this.city);
//     }
// }
// function fun(str){
//     let name=str, age="23";
//     function fun2(){
//         console.log("my name is "+name);
//     }
//     return fun2;
// }

// const aFunctionToPrintName=fun("abhi");
// aFunctionToPrintName();
// // for(value of arr){console.log(value)};

// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();


//assignment Employee

// const box1=document.getElementById("box1");
// const box2=document.getElementById("box2");

// function Employee(name,yearOfJoin,location){
//     this.name=name;
//     this.yearOfJoin=yearOfJoin;
//     this.location=location;
//     this.getEmployeeDetails=()=>{
//         return `Name: ${this.name}, Year of Join: ${this.yearOfJoin}, Location: ${this.location}`;
//     }
//     let salary;
//     this.setSalary=(amount)=>{
//         salary=amount;
//     }
//     this.getSalary=()=>{
//         return salary;
//     }
// }
// const E1=new Employee("abhi",2023,"ujjain");
// E1.setSalary(1000);
// box1.innerText="Salary is "+E1.getSalary().toString();
// box2.innerText=E1.getEmployeeDetails();

// console.log(E1.getSalary());
// console.log(E1.getEmployeeDetails());

// const obj=new Employee("abhi",2023,"ujjain");
// console.log(obj.getEmployeeDetails());


//assignment Product

// Your code here
// function Product(name, price, manufacturer){
//     this.name=name;
//     this.price=price;
//     this.manufacturer=manufacturer;   
//     let tax; 
//     function calculateTotalPrice(){
//         return price + price*(tax/100);
//     }    
//     this.getTotalPrice=function(){
//         return calculateTotalPrice() ;
//     }
//     this.getTax=function(){
//         return tax;
//     }
//     this.setTax=function(amount){
//         tax=amount;
//     }
    // this.getProductDetails=function (){
    //     return `Name: ${this.name}, Price: ${this.price}, Manufacturer: ${this.manufacturer}`
    // }
    // this.deleteMethod=function(methodName){
    //     delete this[methodName];
    // }
// }

// Product.prototype.getTax=function(){
//         return this.tax;
// }

// Product.prototype.setTax=function(amount){
//         this.tax=amount;
// }

// Product.prototype.getProductDetails=function (){
//     return `Name: ${this.name}, Price: ${this.price}, Manufacturer: ${this.manufacturer}`
// }

// Product.prototype.deleteMethod=function(methodName){
//     delete this[methodName];
// }

// const P1=new Product("iWatch",5000,"Apple");
// const P2=new Product("sBuds",3000,"Samsung");

// P1.getProductDetails();
// P2.getProductDetails();

// const obj={
//     name:"rahul",
//     age:23,
//     address:{
//         houseNo:113,
//         city:"ujjain",
//     }
// }
// const {name,...rest}=obj;
// console.dir(rest);
// const {age:umr}=rest;
// console.dir(umr);

// //getter n setters
// Object.defineProperty


// Your code here
function Product(name, price, manufacturer){
    this.name=name;
    this.price=price;
    this.manufacturer=manufacturer;   
    let tax; 
    function calculateTotalPrice(){
        return price + price*(tax/100);
    }    
    this.getTotalPrice=function(){
        return calculateTotalPrice() ;
    }
    this.getTax=function(){
        return tax;
    }
    this.setTax=function(amount){
        tax=amount;
    }
    // this.getProductDetails=function (){
    //     return `Name: ${this.name}, Price: ${this.price}, Manufacturer: ${this.manufacturer}`
    // }
}

// Product.prototype.getTax=function(){
//         return this.tax;
// }

// Product.prototype.setTax=function(amount){
//         this.tax=amount;
// }

Product.prototype.getProductDetails=function (){
    return `Name: ${this.name}, Price: ${this.price}, Manufacturer: ${this.manufacturer}`
}

Product.prototype.deleteMethod=function(methodName){
    delete this[methodName];
}


const myProduct=("bulb",500,"Syska");
myProduct.deleteMethod("getProductDetails");