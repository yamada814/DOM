const text = document.getElementById("inputText");
const addbtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addbtn.addEventListener("click", () => {
    if (text.value) {
        
        const li = document.createElement("li");
        li.textContent = text.value;
        list.append(li);
        text.value = "";
    }
})