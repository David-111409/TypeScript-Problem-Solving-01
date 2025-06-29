function equilibrium (x:number) : "negative" | "positive" | true {
	  if (x > 0)  return "positive";
    if (x < 0) return "negative" ;
    return true;

}

console.log(equilibrium(0.000), true)
console.log(equilibrium(0), true)

console.log(equilibrium(3), "positive")
console.log(equilibrium(66), "positive")
console.log(equilibrium(5425), "positive")
console.log(equilibrium(1111.1), "positive")
console.log(equilibrium(0.0001), "positive")

console.log(equilibrium(-3), "negative")
console.log(equilibrium(-66), "negative")
console.log(equilibrium(-5425), "negative")
console.log(equilibrium(-1111.1), "negative")
console.log(equilibrium(-0.0001), "negative")
