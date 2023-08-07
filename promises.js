
console.log("I Gave an interview 1");
const selected=false;
const promiseCallback= (resolve,reject)=>{
    if(selected){
        setTimeout(()=>{
            resolve("'you are selected! 2'");
        },2000);
    }else{
        setTimeout(()=>{
            reject("'you are not selected! 3'");
        },2000);
    }
}
const promise=new Promise(promiseCallback);
promise
.then((val)=>{console.log("Interviewer Said that 4", val)})
.catch((error)=>{console.log("Interviewer Said Sorry 5", error)});
console.log("I am doing my daily routine... 6");
const obj=fetch("")