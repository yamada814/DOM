const fruits = ["Apple", "Orange", "Grape", "Strawberry", "Pineapple"];
const container = document.getElementById("container");
for (fruit of fruits) {
    const li = document.createElement("ul");
    li.textContent = fruit;
    container.appendChild(li);
}