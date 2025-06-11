/**
 Create a function that finds how many prime numbers there are, up to the given integer.

Examples

primeNumbers(10) ➞ 4
// 2, 3, 5 and 7

primeNumbers(20) ➞ 8
// 2, 3, 5, 7, 11, 13, 17 and 19

primeNumbers(30) ➞ 10
// 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29
 */

function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function primeNumbers(num: number):number{
  let count = 0;
  for (let i = 2; i < num; i++){
    if (isPrime(i)) count ++;
  }
  return count;
}


// tests
console.log(primeNumbers(20), 8)
console.log(primeNumbers(30), 10)
console.log(primeNumbers(100), 25)
console.log(primeNumbers(200), 46)
console.log(primeNumbers(1000), 168)
console.log(primeNumbers(-5), 0)
console.log(primeNumbers(66), 18)
console.log(primeNumbers(133), 32)
console.log(primeNumbers(99), 25)

export {primeNumbers, isPrime};
