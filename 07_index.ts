/**
Reverse and Capitalize
Create a function that takes a string of lowercase characters and 
returns that string reversed and in upper case.

Examples:::
reverseCapitalize("abc") ➞ "CBA"
reverseCapitalize("hellothere") ➞ "EREHTOLLEH"
reverseCapitalize("input") ➞ "TUPNI"
 */

export function reverseCapitalize(str: string): string{
    return str.toUpperCase().split("").reverse().join("");
}

console.log(reverseCapitalize("edabit"), "TIBADE")
console.log(reverseCapitalize("abc"), "CBA")
console.log(reverseCapitalize("hellothere")  === "EREHTOLLEH")
console.log(reverseCapitalize("input")  === "TUPNI")
console.log(reverseCapitalize("indubitably")  === "YLBATIBUDNI")
