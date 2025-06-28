
/**Find the Unique Letters
Create a function that takes a string and returns an array of the letters that occur only once.

Examples

findLetters("monopoly") ➞ ["m", "n", "p", "l", "y"]

findLetters("balloon") ➞ ["b", "a", "n"]

findLetters("analysis") ➞ ["n", "l", "y", "i"]
Notes

The final array should not include letters that appear more than once in the string.
Return the letters in the sequence they were originally in, do not sort them.
All letters will be in lowercase. */

const findLetters = (str:string) : string[] => {
    let map= new Map< string, number >();
    let ar : string[] = [];

    for (let ele of str)
         map.set(ele, (map.get(ele) || 0) + 1);
    
    for (let [ele, count] of map)
        if (count === 1) ar.push(ele);

    // for (let char of str)
    //     if (map.get(char) === 1) ar.push(char);
    

    return ar;

}

console.log(findLetters("monopoly"), ["m", "n", "p", "l", "y"])
console.log(findLetters("balloon"), ["b", "a", "n"])
console.log(findLetters("analysis"),  ["n", "l", "y", "i"])
console.log(findLetters("summer"), ["s", "u", "e", "r"])
console.log(findLetters("apple"), ["a", "l", "e"])
console.log(findLetters("commission"), ["c", "n"])
console.log(findLetters("fox"), ["f", "o", "x"])
console.log(findLetters("aabbcdeffg"));  // Expected: ["c", "d", "e", "g"]
console.log(findLetters("zbza"));  // Expected: ["b"]
