// const boxes = document.querySelectorAll(".box");
// boxes.forEach(box => { });

const redBox = document.getElementById("redBox");
const redLabel = document.getElementById("redLabel")
let setRedNum = 0;
redBox.addEventListener("click", () => {
    setRedNum++;
    redLabel.textContent = `R:${setRedNum}`
})

