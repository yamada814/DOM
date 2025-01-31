const className = "color-red font-bold font-24";
const classNameSplit = className.split("font-bold");
console.log(classNameSplit);//["color-red "," font-24"]
const classNameSplitJoin = classNameSplit.join("");
console.log(classNameSplitJoin);//"color-red font-24"
