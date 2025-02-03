const container = document.querySelector("#container");
const startbtn = document.getElementById("startbtn");
const nums = ["1", "1", "2", "2", "3", "3"];

let openNums = [];
let matchedNums = [];

let startTime;
let endTime;

function getTime(startTime, endTime) {
    const time = (endTime - startTime) / 1000;
    return Math.floor(time);
}


function shuffle(array) {
    const copiedArray = [...array];
    const shuffledArray = [];
    for (let i = 0; i < array.length; i++) {
        const index = Math.floor(Math.random() * copiedArray.length);
        shuffledArray.push(copiedArray.splice(index, 1).join());
    }
    return shuffledArray;
}
function openCard(event) {
    event.stopPropagation();
    const target = event.target;
    target.setAttribute("class", "front")
    target.removeEventListener("click", openCard);
    // console.log(openNum);    
    target.textContent = target.number;
    openNums.push(target);
    if (openNums.length === 2) {
        checkCard(openNums);
        openNums = [];
    }
}
function checkCard(openNums) {
    if (openNums[0].number === openNums[1].number) {
        console.log("OK");
        for (const card of openNums) {
            card.setAttribute("class","matchedCard")
        };
        matchedNums.push(openNums);
        console.log(matchedNums.length)
    } else {
        console.log("NG");
        closeCard(openNums);
    }
    if (matchedNums.length === nums.length / 2) {
        // console.log("クリア！");
        endTime = Date.now();
        console.log(endTime);
        
        const clear = document.createElement("div");
        clear.innerText = `クリア!\n\nタイム:${getTime(startTime, endTime)}秒`;
        clear.setAttribute("class","clear")
        container.appendChild(clear);
    }
}
function closeCard(openNums) {
    setTimeout(() => {
        for (const card of openNums) {
            card.setAttribute("class", "card");
            card.textContent = "?"
            card.addEventListener("click", openCard);
        }
    },500)    
}
startbtn.addEventListener("click", (event) => {
    startTime = Date.now();
    console.log(startTime);
    container.innerHTML = null;
    matchedNums = [];
    const shuffledCardList = shuffle(nums);

    container.append(
        ...shuffledCardList.map(val => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.number = val;
            card.textContent = "?";
            card.addEventListener("click", openCard)
            return card;
        })
    );


})