/**
All Numbers in Array Are Prime
Create a function that takes an array of integers and returns true if every number is prime. Otherwise, return false.

Examples

allPrime([7, 5, 2, 4, 6]) ➞ false

allPrime([2, 3, 5, 7, 13, 17, 19, 23, 29]) ➞ true

allPrime([1, 5, 3]) ➞ false

Notes
1 is not a prime number.
 */


function is_prime(n: number):boolean{
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i =  3 ; i * i <= n; i+= 2){
    if (n % i === 0) return false;
  }

  return true;
}


export function allPrime(ar: number[]): boolean{
  return ar.every(num => is_prime(num));
}

console.log(allPrime([7, 5, 2, 4, 6]), false)
console.log(allPrime([2, 3, 5, 7, 13, 17, 19, 23, 29]), true)
console.log(allPrime([1, 5, 3]), false)
console.log(allPrime([5, 3]), true)
