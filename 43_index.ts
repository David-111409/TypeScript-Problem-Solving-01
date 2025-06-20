/**Count the Lone Ones
Create a function which counts how many lone 1s appear in a given number. 
Lone means the number doesn't appear twice or more in a row.

Examples

countLoneOnes(101) ➞ 2

countLoneOnes(1191) ➞ 1

countLoneOnes(1111) ➞ 0

countLoneOnes(462) ➞ 0

Notes
Tests will include positive whole numbers only. */

export function countLoneOnes(n:number | bigint) : number{
    return `${n}`.replace(/[^1]/g, " ").split(" ").filter(ele => ele.length === 1).length;
}

console.log(countLoneOnes(101), 2)
console.log(countLoneOnes(1191), 1)
console.log(countLoneOnes(1111), 0)
console.log(countLoneOnes(11101), 1)
console.log(countLoneOnes(462), 0)
console.log(countLoneOnes(12131415161718191n), 9)
console.log(countLoneOnes(11231212111), 2)
console.log(countLoneOnes(1), 1)
console.log(countLoneOnes(0), 0)
