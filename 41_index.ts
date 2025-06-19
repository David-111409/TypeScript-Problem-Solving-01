/**Return Odd > Even
Given an array, return true if there are more odd numbers than even numbers, otherwise return false.

Examples

oddeven([1, 2, 3, 4, 5, 6, 7, 8, 9]) ➞ true

oddeven([1]) ➞ true

oddeven([13452394823795273847528572346]) ➞ false
Notes

All arrays will have at least 1 item. */

export function oddeven(ar: (number|bigint)[]):boolean{
    let odds : number = ar.filter( n => BigInt(n) % 2n ).length;
    let evens : number = (ar.length) - odds;

    return odds > evens;
}

console.log(oddeven([1, 2, 3, 4, 5, 6, 7, 8, 9]), true)
console.log(oddeven([1]), true)
console.log(oddeven([1, 2, 3, 4, 5, 6, 7, 9]), true)
console.log(oddeven([42, 1, 66]), false)
console.log(oddeven([2, 3, 4, 5, 6, 7, 8]), false)
console.log(oddeven([43264573658142353463153n]), true)
