let myString = "EElllzzzzzzzeroo";

console.log(myString.split("").filter((val, ind) => {
    if (myString[ind] !== myString[ind + 1]) return val;
    
}).join(""));

// Elzero
