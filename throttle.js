// function throttle(callback,delay){
//     let wait=false;
//     return (...args)=>{
//         if(wait){
//             return;
//         }
//         callback(...args);
//         wait=true;
//         setTimeout(()=>{
//             wait=false;
//         },delay);
//     }
// }

// const caller=throttle(()=>{
//     console.log("sending req...");
// },1000);

// setInterval(()=>{
    //     console.log("calling every 5 sec");
    //     caller();
    // },5000);
    
    
    const para1=document.getElementById("para1");
    const para2=document.getElementById("para2");
    const btn1 =document.getElementById("btn1");
    let reqNo=0;
let count=0;
function throttle(callback){
    return (...agrs)=>{
        if(count%3!==0){
            return;
        }
        reqNo++;
        callback(...agrs);
    }
}
const caller=throttle(()=>{
    if(reqNo==1){
        para2.innerText=`first req sent...`;
    }else{
        para2.innerText=`req sent ${reqNo} times`;
    }
    console.log("sending req...");
})


btn1.addEventListener('click',()=>{
    console.log("btn clicked");
    caller();
    count++;
    para1.innerText="hii i am clicked "+count+" times";
});

