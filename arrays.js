let arr=["rahul","abhi","vidhan","eshita","raghav"];
// for(let i in arr){
//     console.log(i);
// }
for(let i of arr){
    console.log(i+" "+arr[i]);
}
arr=[1,2,3,4,5];
const newArr=arr.map(x=>x*x);
console.log(newArr);

// const obj={
//     name:"abhi",
//     rollno:123,
// };
// for(let x in obj){
//     console.log(x);
// }


// // console.log();
// console.log(Object.keys(obj));
// // console.log(Object.values(obj));
// // console.log(Object.entries(obj));

// // for(let x of obj){
// //     console.log(x);
// // }  //not valid because of only works with iterable objects {ex: arrays, strings, NodeLists}
// // object obj2{
    
// // }


// let x=0;  //variable
const x={
//key-prop : value;
    name:"vidhan",
    age:23,
};              //object
//x=[];  //array;
console.log(x.name);

const y=x;//shallow copy of x callbyrefrence in c

// y=100; //throws error because y is declared as constant
y.age=25;
// y={address:""};//invalid
console.log("age of x is:" + x.age);
console.log("age of y is:" + y.age);
x.name="abhishek";
console.log("name of x is:" + x.name);
console.log("name of y is:" + y.name);


const z={...x,age:30}; //deep copy of x
z.name="rahul";
console.log("name of x is:" + x.name);
console.log("name of z is:" + z.name);
console.log("age of x is:" + x.age);
console.log("age of z is:" + z.age);

const a={};
let b=34;
b=a;

const obj1={
    name:"Vidhan",
    address:{
        houseNo:123,
        colony:"indranagar",
    },
}

const obj2=obj1;//shallow copy
obj2.address.colony="GadaPuliya"; 
obj1.address.houseNo=456;

console.log(obj1.address.colony);
console.log(obj2.address.houseNo);

//obj1 deep copy
const obj3={...obj1,address:{...obj1.address}};
console.log("obj1 house No is: "+obj1.address.houseNo);
console.log("obj3 house No is: "+obj3.address.houseNo);
console.log("obj2 house No is: "+obj2.address.houseNo);
// console.log("obj1 house No is: "+obj1.name);
// console.log("obj3 house No is: "+obj3.name);

obj3.address.houseNo=789;
obj3.address.colony="Ambar Colony";
// obj3.name="Rajpal Yadav";

console.log("obj3 house No is: "+obj3.address.houseNo);
console.log("obj1 house No is: "+obj1.address.colony);
console.log("obj3 house No is: "+obj3.address.colony);
console.log("obj2 house No is: "+obj2.address.colony);
// console.log("obj1 house No is: "+obj1.name);
// console.log("obj3 house No is: "+obj3.name);
