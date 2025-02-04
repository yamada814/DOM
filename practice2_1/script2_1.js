const p = document.getElementById("text");
const btnDefault = document.querySelector("button.default");
const btnBig = document.querySelector("button.big");

btnDefault.addEventListener("click",()=>{
    p.classList.toggle("big",false);
})
btnBig.addEventListener("click",()=>{
    p.classList.toggle("big",true);
})



// btnDefault.addEventListener("click",()=>{
//     p.className = "";
// })
// btnBig.addEventListener("click",()=>{
//     p.className = "big";
// })