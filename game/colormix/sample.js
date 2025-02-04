
function lightnessChange(point) {
    let changeVal;
    if (0 <= point && point < 20) changeVal = 7;
    if (20 <= point && point < 40) changeVal = 5;
    if (40 <= point && point < 60) changeVal = 3;
    if (60 <= point && point < 80) changeVal = 1;
    if (80 <= point && point < 100) changeVal = -1;
    if (100 <= point && point < 120) changeVal = -3;
    if (120 <= point && point < 140) changeVal = -5;
    if (140 <= point && point < 160) changeVal = -7;

    rgbMap.forEach((val, key) => {
        rgbMap.set(key,Math.min(val + changeVal,16));
        rgbMap.set(key,Math.max(val + changeVal,0));
    })    
} 

const rgbMap = new Map([
    ["redBox", 1],
    ["greenBox", 2],
    ["blueBox",3]
]);
lightnessChange(30);
console.log(rgbMap);