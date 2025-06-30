// Elzero Challenges solutions By Me (Dawoud);

let arr1 = ["A", "C", "X"];

let arr2 = ["D", "E", "F", "Y"];

let allArrs :  string = [...arr1, ...arr2].sort().slice(arr2.length).join("").toLowerCase();

allArrs = allArrs;

console.log(allArrs); // fxy
