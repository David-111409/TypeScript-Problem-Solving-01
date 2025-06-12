/**
 Map the Letters in a String
Given a word, create an object that stores the indexes of each letter in an array.

Make sure the letters are the keys.
Make sure the letters are symbols.
Make sure the indexes are stored in an array and those arrays are values.
Examples

mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }

mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
Notes

All strings given will be lowercase.
 */
export function mapLetters(str:string) : {[key: string]: number[]} {
    let obj : {[key: string]: number[]} = {};

    for (let i = 0; i < str.length; i++){
        const letter = str[i];

        if (!obj[letter])
             obj[letter] = [];

        obj[letter].push(i);
    }

    return obj;
}

console.log(mapLetters(""), {})
console.log(mapLetters("a"), { a: [0] })
console.log(mapLetters("abcdefg"), { a: [0], b: [1], c: [2], d: [3], e: [4], f: [5], g: [6] })
console.log(mapLetters("balloon"), { b: [0], a: [1], l: [2, 3], o: [4, 5], n: [6] })
console.log(mapLetters("imagining"), { i: [0, 4, 6], m: [1], a: [2], g: [3, 8], n: [5, 7] })
console.log(mapLetters("mummy"), { m: [0, 2, 3], u: [1], y: [4] })
console.log(mapLetters("aaaaaaabaaabaaabbb"), { a: [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14], b: [7, 11, 15, 16, 17] })
