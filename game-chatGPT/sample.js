const nums = [1,2,3,4,5,6];
const pairNums = [...nums, ...nums];
// console.log(pairNums);
pairNums.sort(() => Math.random() - 0.5);
console.log(pairNums);