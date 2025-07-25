let theNumber = 100020003000;

// console.log(Number(theNumber.toString().split("").map(Number).filter(Boolean).join("")));
// Needed Output
// 123

// console.log(Number([... new Set(theNumber.toString())].filter(el  => el !== "0").join("")));

console.log(Number([... new Set(theNumber.toString())].map(Number).filter(Boolean).join("")));
