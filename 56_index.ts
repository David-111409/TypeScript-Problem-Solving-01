/**Lexicographically First and Last
Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:

firstAndLast(string) ➞ [first, last]

Examples
firstAndLast("marmite") ➞ ["aeimmrt", "trmmiea"]

firstAndLast("bench") ➞ ["bcehn", "nhecb"]

firstAndLast("scoop") ➞ ["coops", "spooc"]
--------------------------------------------
Notes
Lexicographically first: the permutation of the string that would appear first in the English dictionary (if the word existed).
Lexicographically last: the permutation of the string that would appear last in the English dictionary (if the word existed). */

function firstAndLast(str:string):[string, string]{
   let sortedArr: string[] = str.split("").sort();
   let sorted: string = sortedArr.join("");
   let  reversed : string= [...sortedArr].reverse().join("");

   return [sorted , reversed];
    
}

console.log(firstAndLast("marmite"), ["aeimmrt", "trmmiea"])
console.log(firstAndLast("bench"), ["bcehn", "nhecb"])
console.log(firstAndLast("scoop"), ["coops", "spooc"])
console.log(firstAndLast("fanatic"), ["aacfint", "tnifcaa"])
export default firstAndLast;

