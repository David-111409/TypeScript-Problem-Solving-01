/**
Less Than 100 Array Remix
Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

Examples

arrayLessThan100([5, 57]) ➞ true

arrayLessThan100([77, 30]) ➞ false

arrayLessThan100([0]) ➞ true 
*/
export function arrayLessThan100(ar : number[]) : boolean{
    return ar.reduce((a , b) => a + b, 0)  < 100 ;
}

console.log(arrayLessThan100([5, 57]));
console.log(arrayLessThan100([5, 57]), true)
console.log(arrayLessThan100([77, 30]), false)
console.log(arrayLessThan100([0, 59,15]), true)
console.log(arrayLessThan100([0]), true)
console.log(arrayLessThan100([35, 59,15]), false)
console.log(arrayLessThan100([25, 50, 25]), false)
