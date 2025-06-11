/**
Filter Primes from an Array
Create a function that takes an array and returns a new array containing only prime numbers.

Examples

filterPrimes([7, 9, 3, 9, 10, 11, 27]) ➞ [7, 3, 11]

filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70]) ➞ [10007, 1009]

filterPrimes([1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097]) ➞ [1009, 3, 61, 1087, 1091, 1093, 1097] 
*/

function is_prime(n:number):boolean{
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n ; i+=6){
        if ( (n % i === 0 )|| (n % (i + 2) === 0) ) return false;
    }
    return true;
}

export function filterPrimes(ar: number[]):number[]{
    return ar.filter(num => is_prime(num));
}

console.log(filterPrimes([7, 9, 3, 9, 10, 11, 27]), [7, 3, 11])
console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), [2, 3, 5, 7, 11, 13, 17, 19, 23])
console.log(filterPrimes([1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097]), [1009, 3, 61, 1087, 1091, 1093, 1097])
console.log(filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70]), [10007, 1009])
