
// Elzero Challenges Solutions by Me: Dawoud;
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

for (let ele of haystack){
    if (ele === needle){
        console.log("Found");
        break;
    }
}

if (haystack.includes(needle)){
    console.log("Found");
}

if (haystack.indexOf(needle) !== -1) {
    console.log("Found");
}

if (haystack.some(ele => ele === needle)){
    console.log("Found");
}

if (haystack.filter(ele => ele === needle).length > 0){
    console.log("Found");
}
