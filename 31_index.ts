/**
Next Prime
Given an integer, create a function that returns 
the next prime. If the number is prime, return the number itself.

Examples

nextPrime(12) ➞ 13

nextPrime(24) ➞ 29

nextPrime(11) ➞ 11
// 11 is a prime, so we return the number itself.
*/
export function isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

export function nextPrime(n:number): number{
    while(!isPrime(n)){
        n++;
    }
    return n;
}

console.log(nextPrime(12), 13)
console.log(nextPrime(24), 29)
console.log(nextPrime(11), 11)
console.log(nextPrime(13), 13)
console.log(nextPrime(14), 17)
console.log(nextPrime(33), 37)
