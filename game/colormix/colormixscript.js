const boxes = document.querySelectorAll(".box");
const labels = document.querySelectorAll(".label2")
const rgbMap = new Map([
    ["redBox", 0],
    ["greenBox", 0],
    ["blueBox",0]
]);
let colorNum = 0;


const ups = document.querySelectorAll(".up");
ups.forEach((up) => {
    up.addEventListener("click", () => {
        let colorVal = rgbMap.get(up.parentElement.id);
        colorVal != 15 ? colorVal++: colorVal=0;
        up.parentElement.querySelector(".label2").textContent = `${colorVal.toString(16)}`;
        rgbMap.set(up.parentElement.id, colorVal);
        const resultBox = document.getElementById("resultBox");
        resultBox.style.backgroundColor = `#${rgbMap.get("redBox").toString(16)}${rgbMap.get("greenBox").toString(16)}${rgbMap.get("blueBox").toString(16)}`;
    })
});

const downs = document.querySelectorAll(".down");
downs.forEach((down) => {
    down.addEventListener("click", () => {
        let colorVal = rgbMap.get(down.parentElement.id);
        colorVal != 0 ? colorVal--: colorVal=15;
        down.parentElement.querySelector(".label2").textContent = `${colorVal.toString(16)}`;
        rgbMap.set(down.parentElement.id, colorVal);
        const resultBox = document.getElementById("resultBox");
        resultBox.style.backgroundColor = `#${rgbMap.get("redBox").toString(16)}${rgbMap.get("greenBox").toString(16)}${rgbMap.get("blueBox").toString(16)}`;
    })
});

const lightness = document.getElementById("lightness");
lightness.style.height = "160px";
const bar = document.getElementById("bar");
bar.style.top = "0px";
bar.style.height = "20px";
let isBarDragging = false;
let prevOffsetY = null;

function lightnessAddValue(point) {
    if (  0 <= point &&  point <  20 ) return 7;
    if ( 20 <= point &&  point <  40 ) return 5;
    if ( 40 <= point &&  point <  60 ) return 3
    if ( 60 <= point &&  point <  80 ) return 1;
    if ( 80 <= point &&  point < 100 ) return -1;
    if (100 <= point && point  < 120 ) return -3;
    if (120 <= point && point  < 140 ) return -5;
    if (140 <= point && point  < 160 ) return -7;   
}
function lightnessAdd(value) {
    rgbMap.set()
}

lightness.addEventListener("mousemove", (e) => {
    if (!isBarDragging) return;
    console.log("dragging");
    if (prevOffsetY === null) {
        prevOffsetY = e.offsetY;
        return;
    }
    const distance = e.offsetY - prevOffsetY;
    const top = parseInt(bar.style.top) + distance;
    if (top >= 0 &&
        top <= parseInt(lightness.style.height) - parseInt(bar.style.height)) {
        bar.style.top = top + "px";
    }
       
    // console.log(bar.style.top);
});
bar.addEventListener("mousedown", (e) => {
    isBarDragging = true;
});
bar.addEventListener("mouseup", (e) => {
    isBarDragging = false;
});
lightness.addEventListener("mouseleave", (e) => {
    isBarDragging = false;
});