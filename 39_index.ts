/**Rotate for Max Number
Create a function which takes a number and returns the maximum value by rearranging its digits.

Examples

rotateMaxNumber(123) ➞ 321

rotateMaxNumber("001") ➞ 100

rotateMaxNumber(999) ➞ 999

Notes
The input number can be a digit or a string. */

export function rotateMaxNumber(n : string|number):number{
    return +`${n}`.split("").sort().reverse().join("");
}

console.log(rotateMaxNumber(123) === 321)
console.log(rotateMaxNumber(1546) === 6541)
console.log(rotateMaxNumber("001") === 100)
console.log(rotateMaxNumber(999) === 999)
console.log(rotateMaxNumber("12345")  === 54321)
console.log(rotateMaxNumber("00009") === 90000)
