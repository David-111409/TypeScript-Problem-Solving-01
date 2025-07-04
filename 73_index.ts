function specialMix(...data) {
    let sum = 0;
    let count = 0;

    for (let ele of data){
        if (typeof ele === "number") {
            sum += ele; 
            count++
        }
        else{
            if (!Number.isNaN(parseInt(ele))) {
                sum += parseInt(ele); 
                count++};
        }
    }
    return  ( sum === 0 && count === 0) ? "All Is Strings": sum;
  }
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "-10Cool", "10Test")); // All Is Strings


let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
console.log(mix.reduce((prev, ele) => {
    return (typeof ele === "string") ? prev + ele : prev;
}, ""));

console.log(mix.map(ele => typeof ele).reduce((acc, curr, ind) => curr === "string" ? acc + mix[ind] : acc , ""));
