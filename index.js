const needs = document.querySelectorAll(".need");
needs.forEach((need) => {
    need.addEventListener("blur", (e) => {
        if (e.target.value === "" && !e.target.classList.contains("needAlert")){
            e.target.classList.add("needAlert");
        } else {
            e.target.classList.remove("needAlert");
        }
    })
})
needs.forEach((need) => {
    need.addEventListener("change", (e) => {
        if (e.target.value) {
            e.target.classList.remove("needAlert");
            console.log(e.target.nextElementSibiling);
            e.target.nextElementSibiling.remove();
        }
    })
})


// const needAlertMsg = document.createElement("span");
// needAlertMsg.textContent = "必須項目です";
// needAlertMsg.classList.add("needAlertMsg");
// e.target.after(needAlertMsg);           