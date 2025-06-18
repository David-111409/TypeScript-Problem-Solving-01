/**End Corona!
Create a function that takes the number of daily average recovered cases recovers, 
daily average newCases, current activeCases, and returns the number of days it will take to reach zero cases.

Examples

endCorona(4000, 2000, 77000) ➞ 39

endCorona(3000, 2000, 50699) ➞ 51

endCorona(30000, 25000, 390205) ➞ 79

Notes
The number of people who recover per day recovers will always be greater than daily newCases.
Be conservative and round up the number of days needed. */
export function endCorona(recovers: number, newCases: number, activeCases: number ) : number{
    return Math.ceil((activeCases / (recovers - newCases)));
}

console.log(endCorona(4000, 2000, 77000), 39)
console.log(endCorona(3000, 2000, 50699), 51)
console.log(endCorona(30000, 25000, 390205), 79)
console.log(endCorona(260000, 255000, 20511691), 4103)
