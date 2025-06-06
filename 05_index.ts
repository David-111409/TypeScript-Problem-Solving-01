/**
Are the Numbers Equal?
Create a function that takes two integers and checks if they are equal.

Examples

isEqual(5, 6) ➞ false

isEqual(1, 1) ➞ true

isEqual("1", 1) ➞ false

Notes
If there is a string then it should return false
 */

export function isEqual(first: any, second: any): boolean{
    return typeof first === "number" && typeof second === "number" && first === second;
}


console.log(isEqual(2, 2), true)
console.log(isEqual("1", 5), false)
console.log(isEqual(88, 88), true)
console.log(isEqual(36, 35), false)
console.log(isEqual("1", 1), false)
console.log(isEqual(1, 1), true)
console.log(isEqual(5, 6), false)
console.log(isEqual("1", "1"), false)
