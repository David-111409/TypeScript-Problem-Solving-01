/**
Sum of Prime Numbers
Create a function that takes an array of numbers 
and returns the sum of all prime numbers in the array.

Examples

sumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 17

sumPrimes([2, 3, 4, 11, 20, 50, 71]) ➞ 87

sumPrimes([]) ➞ 0

Notes
Given numbers won't exceed 101.
A prime number is a number which has exactly two divisors (1 and itself).
 */

function is_prime(n: number): boolean{
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i =  3; i * i <= n ; i += 2){
        if (n % i === 0) return false;
    }

    return true;
}

function sumPrimes(ar : number[]):number{
    return ar.filter(n => is_prime(n)).reduce((a, b) => a + b, 0);
}

export {sumPrimes};

console.log(sumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]));
console.log(sumPrimes([1,2,3,4,5,6,7,8,9,10]), 17)
console.log(sumPrimes([2,3,4,11,20,50,71]), 87)
console.log(sumPrimes([19,21,24,27,30,37]), 56)
console.log(sumPrimes([69,79,87,97,101]), 277)
console.log(sumPrimes([53,59,28,50,45,33,61]), 173)
console.log(sumPrimes([]), 0)
console.log(sumPrimes([11,11,11,11,11,22,22,22]), 55)
console.log(sumPrimes([67,24,58,28,71,73,99]), 211)
