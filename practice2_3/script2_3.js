/*
*/
const redbtn = document.querySelector(".btn.red");
const greenbtn = document.querySelector(".btn.green");
const bluebtn = document.querySelector(".btn.blue");
const resetbtn = document.querySelector(".btn.reset");
const p = document.getElementById("text");

function change(color){
    if (color) {
         p.setAttribute("class", color);
    } else {
        p.removeAttribute("class")
    }
}
redbtn.addEventListener("click", () => {
    change("red");
});
greenbtn.addEventListener("click", () => {
    change("green");
})
bluebtn.addEventListener("click", () => {
    change("blue");
})
resetbtn.addEventListener("click", () => {
    p.removeAttribute("class");
})
