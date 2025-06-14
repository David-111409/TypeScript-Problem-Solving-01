/**Average Word Length
Create a function that takes in a sentence and returns 
the average length of each word in that sentence. 
Round your result to two decimal places.

Examples

averageWordLength("A B C.") ➞ 1.00

averageWordLength("What a gorgeous day.") ➞ 4.00

averageWordLength("Dude, this is so awesome!") ➞ 3.80

Notes
Ignore punctuation when counting the length of a word. */

export function averageWordLength(str:string) {
    let reg = /[a-z]+/ig;
    let words: string[] = str.match(reg)!;

    if (!words) return 0;

    let len : number = words.length;
    let averageLength : number = words.reduce((sum, word) => sum + word.length, 0) / len;

    return parseFloat(averageLength.toFixed(2));
}


console.log(averageWordLength("....!!!@"));
console.log(averageWordLength('A B C.'), 1.00)
console.log(averageWordLength('What a gorgeous day.'), 4.00)
console.log(averageWordLength('Dude, this is so awesome!'), 3.80)
console.log(averageWordLength('Working on my tan right now.'), 3.67)
console.log(averageWordLength('Having a blast partying in Las Vegas.'), 4.29)
console.log(averageWordLength('Have you ever wondered what Saturn looks like?'), 4.75)
console.log(averageWordLength('I just planted a young oak tree, wonder how tall it will grow in a few years?'), 3.47)
