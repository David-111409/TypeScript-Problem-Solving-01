/**
 Triple Letter Groupings
Given a string, return a sorted array of words formed from the first three letters, then the next three letters, shifting by only one.

Worked Example

threeLetterCollection("edabit") ➞ ["abi", "bit", "dab", "eda"]
// 1st word: "eda"
// 2nd word: "dab"
// 3rd word: "abi"
// 4th word: "bit"
// Remember to sort the array!

Examples
threeLetterCollection("slap") ➞ ["lap", "sla"]

threeLetterCollection("click") ➞ ["cli", "ick", "lic"]

threeLetterCollection("cat") ➞ ["cat"]

threeLetterCollection("hi") ➞ []
Notes

Return an empty array if given a word with less than 3 letters.
 */

export function threeLetterCollection(str: string): string[]{
    let ar : string[] = [];
    for (let i = 0; i < str.length - 2; i++){
        ar.push(`${str[i]}${str[i+1]}${str[i+2]}`);
    }
    return ar.sort();
}

console.log(threeLetterCollection('slap'), ['lap', 'sla'])
console.log(threeLetterCollection('click'), ['cli', 'ick', 'lic'])
console.log(threeLetterCollection('cat'), ['cat'])
console.log(threeLetterCollection('hi'), [])
console.log(threeLetterCollection('e'), [])
console.log(threeLetterCollection(''), [])
console.log(threeLetterCollection('programming'), ['amm', 'gra', 'ing', 'min', 'mmi', 'ogr', 'pro', 'ram', 'rog'])
console.log(threeLetterCollection('antidisestablishmentarianism'), ['abl', 'ani', 'ant', 'ari', 'bli', 'dis', 'ent', 'est', 'hme', 'ian', 'idi', 'ise', 'ish', 'ism', 'lis', 'men', 'nis', 'nta', 'nti', 'ria', 'ses', 'shm', 'sta', 'tab', 'tar', 'tid'])
console.log(threeLetterCollection('zoology'), ['log', 'ogy', 'olo', 'ool', 'zoo'])
console.log(threeLetterCollection('assassination'), ['ass', 'ass', 'ati', 'ina', 'ion', 'nat', 'sas', 'sin', 'ssa', 'ssi', 'tio'])
console.log(threeLetterCollection('bookkeeper'), ['boo', 'eep', 'epe', 'kee', 'kke', 'okk', 'ook', 'per'])
