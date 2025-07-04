let myString = "EElllzzzzzzzeroo";

console.log(myString.split("").filter((val, ind, ar) => {
    if (val !== ar[ind + 1]) return val;
    
}).join(""));


//Elzero
