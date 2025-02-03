const boxes = document.querySelectorAll(".box");
const labels = document.querySelectorAll(".label2")
// let colorNum = 0;
const rgbMap = new Map();

boxes.forEach((box) => {
    box.colorNum = 0;
    box.addEventListener("click", () => {
        box.colorNum++;
        if (box.colorNum === 16) box.colorNum = 0;
        box.previousElementSibling.textContent = `${box.colorNum.toString(16)}`;
        rgbMap.set(box.id, box.colorNum);
        // console.log(box.id, box.colorNum);
        // console.log(`${rgbMap.get("redBox")}${rgbMap.get("greenBox")}${rgbMap.get("blueBox")}`);
        const resultBox = document.getElementById("resultBox");
        resultBox.style.backgroundColor = `#${rgbMap.get("redBox")}${rgbMap.get("greenBox")}${rgbMap.get("blueBox")}`;
        console.log(resultBox.style.backgroundColor);
    })
});




