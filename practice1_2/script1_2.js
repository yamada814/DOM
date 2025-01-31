const map = new Map([
    ["画竜点睛", "物事を完成するために、最後に加える大切な仕上げのたとえ。"],
    ["一期一会", "一生に一度だけの機会。"],
    ["因果応報", "行為の善悪に応じて、その報いがあること。"],
    ["諸行無常", "この世の万物は常に変化して、ほんのしばらくもとどまるものはないこと。"],
]);
const dl = document.createElement("dl");
map.forEach((value, key) => {
    const dt = document.createElement("dt");
    dt.textContent = key;
    const dd = document.createElement("dd");
    dd.textContent = value;
    dl.append(dt, dd)
});
document.getElementById("container").append(dl);