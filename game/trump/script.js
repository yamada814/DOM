const container = document.querySelector("#container");
const startbtn = document.getElementById("startbtn");
const nums = ["1", "1", "2", "2", "3", "3"];

let openNums = [];
let matchedNums = [];



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
    if (matchedNums.length === 3) {
        console.log("くりあ");
        
        const clear = document.createElement("div");
        clear.textContent = "クリア!";
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
    },1500)    
}
startbtn.addEventListener("click", () => {
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