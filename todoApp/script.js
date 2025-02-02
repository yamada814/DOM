const newTask = document.getElementById("newTask");
const addBtn = document.getElementById("addBtn");
const todos = document.getElementById("todos");

function addTask(text) {
    const todo = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const span = document.createElement("span");
    span.textContent = text;
    const delBtn = document.createElement("button")
    delBtn.textContent = "削除"
    todo.append(checkbox,span,delBtn)
    todos.append(todo);     
    newTask.value = "";
    checkbox.addEventListener("change", () => {
        span.style = checkbox.checked ? "text-decoration: line-through":null;
    })
    delBtn.addEventListener("click", () => {
        todo.remove();
    })
}
addBtn.addEventListener("click", () => {
    if (!newTask.value) return;
    addTask(newTask.value);
});
newTask.addEventListener("keydown", event => {
    if (event.key === "Enter" && newTask.value) {
        addTask(newTask.value);
    }
})
