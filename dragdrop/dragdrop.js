const circle = document.getElementById("circle");
const box = document.getElementById("box");

const circleRadius = getComputedStyle(document.documentElement).getPropertyValue('--circle-radius');
const boxEdge = getComputedStyle(document.documentElement).getPropertyValue('--box-edge');
let isDragging = false;
let x = circleRadius;;
let y = circleRadius;
// console.log(circleRadius);
// circle.style.top = circleRadius;
// circle.style.left = circleRadius;

// circle.addEventListener("mousedown", (e) => {
//     isDragging = true;
// });
box.addEventListener("mousedown", (e) => {
    isDragging = true;
    // x = e.offsetX;
    // y = e.offsetY;
    // if (!isDragging) return;
    // y = `${e.offsetY}px`;
    // x = `${e.offsetX}px`;
});
box.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    // if (e.target !== e.currentTarget) return;
    y = `${e.clientY}px`;
    x = `${e.clientX}px`;
    if (parseInt(x) > parseInt(boxEdge) - parseInt(circleRadius)) {
        x = `${boxEdge - circleRadius}px`
    }
    if (parseInt(y) > parseInt(boxEdge) - parseInt(circleRadius)) {
        y = `${boxEdge - circleRadius}px`
    }
    // y = `${e.offsetY}px`;
    // x = `${e.offsetX}px`;
});
circle.addEventListener("mouseup", (e) => {
    isDragging = false;
});
window.addEventListener("mouseleave", (e) => {
    isDragging = false;
});
window.addEventListener("mouseup", (e) => {
    isDragging = false;
})

function move() {
    circle.style.top = y;
    circle.style.left = x;
    // console.log(x, y);
    window.requestAnimationFrame(move);
}
window.requestAnimationFrame(move);