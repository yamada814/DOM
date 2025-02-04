const circle = document.getElementById("circle");
const circleBox = document.getElementById("circleBox");

let isDragging;
let prevOffsetX;
let prevOffsetY;

circle.addEventListener("mousedown", (e) => {
    isDragging = true;
    prevOffsetX = e.offsetX;
    prevOffsetY = e.offsetY;
});
circleBox.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    circle.style.top = `${e.offsetY - prevOffsetY}px`;
    circle.style.left = `${e.offsetX - prevOffsetX}px`;

});
circle.addEventListener("mouseup", (e) => {
    isDragging = false;
});