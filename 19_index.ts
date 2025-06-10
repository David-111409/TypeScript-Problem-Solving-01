/**
Factor Chain
A factor chain is an array where each previous element is 
a factor of the next consecutive element. The following is a factor chain:

[3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
Create a function that determines whether or not an array is a factor chain.

Examples

factorChain([1, 2, 4, 8, 16, 32]) ➞ true

factorChain([1, 1, 1, 1, 1, 1]) ➞ true

factorChain([2, 4, 6, 7, 12]) ➞ false

factorChain([10, 1]) ➞ false
 */
function factorChain(ar: number[]): boolean{
  for (let i = 0; i < ar.length - 1; i ++){
    if (ar[i+1] % ar[i] !== 0) return false;
  }

  return true;
}

console.log(factorChain([1, 2, 4, 8, 16, 32]), true)
console.log(factorChain([1, 1, 1, 1, 1, 1]), true)
console.log(factorChain([2, 4, 6, 7, 12]), false)
console.log(factorChain([10, 1]), false)
console.log(factorChain([10, 20, 30, 40]), false)
console.log(factorChain([10, 20, 40]), true)
console.log(factorChain([1, 1, 1, 1, 7, 49]), true)
