/**Find the Largest Prime within a Range
Given two integers as arguments, create a function that finds the largest prime within the range of the two integers.

Examples

fatPrime(2, 10) ➞ 7
// range [2, 3, 4, 5, 6, 7, 8, 9, 10] and the largest prime is 7.

fatPrime(10, 2) ➞ 7
// [10, 9, 8, 7, 6, 5, 4, 3, 2] and the largest prime is 7.

fatPrime(4, 24) ➞ 23
// range [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] the largest prime is 23.
Notes

All numbers will be positive integers. */

function isPrime(n: number) : boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
  
    if (n % 2 === 0 || n % 3 === 0) return false;
  
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
  
    return true;
  }

  
  function fatPrime(n1:number, n2:number) : number | null{
    // let min = n1 > n2 ? n2 : n1;
    // let mx = n1 > n2 ? n1 : n2;
    const min = Math.min(n1 , n2);
    const mx = Math.max(n1, n2);

    for (let i = mx ; i >= min; i--){
        if (isPrime(i)) return i;
    }

    return  null;
  }

  export default fatPrime;

console.log(fatPrime(2, 10), 7);
console.log(fatPrime(10, 2), 7);
console.log(fatPrime(4, 24), 23);
console.log(fatPrime(16, 100), 97);
console.log(fatPrime(7, 49), 47);
console.log(fatPrime(200, 100), 199);
console.log(fatPrime(400, 1000) === 997);
console.log(fatPrime(3297, 32970) === 32969);
console.log(fatPrime(43297, 23175) === 43291);
console.log(fatPrime(100000, 400000) === 399989);
