let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
console.log(numsAndStrings.filter(ele => typeof ele === "number").map(n => n * -1));
// [-1, -10, 10, 20, -5, -3]

let nums = [2, 12, 11, 5, 10, 1, 99];
console.log(nums.reduce((acc, cur) => {
    if (cur % 2 ) return acc + cur;
    else return acc * cur;
}, 1))
// 500
