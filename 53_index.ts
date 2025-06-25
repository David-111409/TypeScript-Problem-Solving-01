/**Simple Counting
Mubashir needs your help to count a specific digit in an array.

You have to create a function that takes two integers n and d and makes an array of squares of all numbers from 0...<= n and returns the count of the digits d in the array.

Examples

countDigits(10, 1) ➞ 4
// Squared array from 0 to 10 = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// Digit 1 appeared 4 times in the array

countDigits(25, 2) ➞ 9

countDigits(10, 1) ➞ 4
Notes

d will always be 0<=d<10. */

const countDigits = (n:number, d:number) : number => {
    let count = 0;
    const regex = new RegExp(`${d}`, "g");
    for (let i = 0 ; i <= n ; i++){
        const square = `${i ** 2}`;
        const match = square.match(regex);
        count += match ? match.length : 0;
    }
    return count;
}
export default countDigits;

console.log(countDigits(10, 1), 4)
console.log(countDigits(25, 2), 9)
console.log(countDigits(17, 3), 1)
console.log(countDigits(5750, 0), 4700)
console.log(countDigits(11011, 2), 9481)
console.log(countDigits(12224, 8), 7733)
console.log(countDigits(11549, 1), 11905)
console.log(countDigits(14550, 7), 8014)
console.log(countDigits(8304, 7), 3927)
console.log(countDigits(10576, 9), 7860)
console.log(countDigits(12526, 1), 13558)
console.log(countDigits(7856, 4), 7132)
console.log(countDigits(14956, 1), 17267)
