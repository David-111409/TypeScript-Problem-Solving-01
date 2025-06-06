/**
Return First and Last Parameter

Write two functions:
firstArg() should return the first parameter passed in.
lastArg() should return the last parameter passed in.

Examples
firstArg(1, 2, 3) ➞ 1

lastArg(1, 2, 3) ➞ 3

firstArg(8) ➞ 8

lastArg(8) ➞ 8
 */
export function firstArg(...args: any[]): any{
    return args[0];
}

export function lastArg(...args: any[]): any{
    return args[args.length -1];
}

console.log(firstArg(1, 2, 3), 1)
console.log(firstArg('a', 'b', 'c'), 'a')
console.log(firstArg(8), 8)
console.log(firstArg(), undefined)
console.log(lastArg(1, 2, 3), 3)
console.log(lastArg('a', 'b', 'c'), 'c')
console.log(lastArg(8), 8)
console.log(lastArg(), undefined)
