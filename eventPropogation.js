const container=document.querySelector("#container");
const box=document.querySelector("#box1");
const innerbox=document.createElement("div");
innerbox.id="innerbox";

const width=[200,300,250,400];
const height=[300,200,400,350];

box.appendChild(innerbox);
innerbox.width=width[1];
innerbox.height=height[2];

console.log(innerbox.width);
innerbox.style.backgroundColor="blue";
innerbox.textContent="innerBox";



