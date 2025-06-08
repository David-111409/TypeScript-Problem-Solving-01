export function grabNumberSum(str: string): number{
    let numSum : number = (str.match(/\d+/g) || []).map(Number).reduce((a, b) => a + b, 0);

    return numSum;
}


console.log(grabNumberSum("aeiou5abc10"), 15)
console.log(grabNumberSum("75shugeb15hvyff15"), 105)
console.log(grabNumberSum("900uwu50uwuuwuuwu25uwu25"), 1000)
console.log(grabNumberSum("one1two2twenty20"), 23)
console.log(grabNumberSum("1s1s11"), 13)
console.log(grabNumberSum("75"), 75)
console.log(grabNumberSum("aeiou250abc10"), 260)/**

 * Grab the Numbers
Given a string including a bunch of characters and numbers, 
return the sum of all the numbers in the string. 
Note that multiple digits next to each other are counted as a whole number rather than separate digits.

Examples

grabNumberSum("aeiou250abc10") ➞ 260

grabNumberSum("one1two2twenty20") ➞ 23

grabNumberSum("900uwu50uwuuwuuwu25uwu25") ➞ 1000
Notes

Remember not to just add single digit numbers together, 
it should be possible for answers to easily get into the 100s!
 */
