/**Primes Below a Given Number
Create a function that will find all primes below a given number. 
Return the result as an array.

Examples

primesBelowNum(5) ➞ [2, 3, 5]

primesBelowNum(10) ➞ [2, 3, 5, 7]

primesBelowNum(20) ➞ [2, 3, 5, 7, 11, 13, 17, 19]

Notes
If n is a prime, include it in the array. */

export function isPrime(n:number):boolean{
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n ; i+= 6) 
        if (n % i === 0 || n % (i + 2) === 0 ) return false;
    
    return true;
}

export function primesBelowNum(num: number):number[]{
    let primes : number[] = [];

    for (let i = 2; i <= num; i++)
        if (isPrime(i)) primes.push(i);
    
    return primes;
}

console.log(primesBelowNum(5), [2, 3, 5])
console.log(primesBelowNum(10), [2, 3, 5, 7])
console.log(primesBelowNum(20), [2, 3, 5, 7, 11, 13, 17, 19])
console.log(primesBelowNum(6), [2, 3, 5])
console.log(primesBelowNum(11), [2, 3, 5, 7, 11])
console.log(primesBelowNum(21), [2, 3, 5, 7, 11, 13, 17, 19])
console.log(primesBelowNum(7), [2, 3, 5, 7])
console.log(primesBelowNum(12), [2, 3, 5, 7, 11])
console.log(primesBelowNum(22), [2, 3, 5, 7, 11, 13, 17, 19])
console.log(primesBelowNum(8), [2, 3, 5, 7])
console.log(primesBelowNum(13), [2, 3, 5, 7, 11, 13])
console.log(primesBelowNum(23), [2, 3, 5, 7, 11, 13, 17, 19, 23])
