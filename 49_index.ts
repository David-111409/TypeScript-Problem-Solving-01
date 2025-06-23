/**Return the Four Letter Strings
Create a function that takes an array of strings and returns the words that are exactly four letters.

Examples

isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]

isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]

isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]

Notes
You can expect valid strings for all test cases. */

export const isFourLetters = (ar: string[]):string[] => ar.filter(word => word.length === 4);

console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]), ["Ryan", "Matt"])
console.log(isFourLetters(["Tomato", "Potato", "Pair"]), ["Pair"])
console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]), ["Bear"])
console.log(isFourLetters(["Red", "Blue", "Green", "Pink"]), ["Blue", "Pink"])
console.log(isFourLetters(["is", "up", "two", "elephant"]), [])
console.log(isFourLetters([]), [])
console.log(isFourLetters(["jazz", "quiz", "jump"]), ["jazz", "quiz", "jump"])
console.log(isFourLetters([""]), [])
console.log(isFourLetters(["Broccoli", "Carrot", "Spinach"]), [])
