export function wormLength(worm: string) : string{
    if (!worm) return "invalid";

    let len = 0;

    for (let ele of worm){
        if (ele !== "-" ){
            return "invalid";
        }
      
        len ++;
    }
    return `${len * 10} mm.`;
}
console.log(wormLength("----------") === "100 mm.")
console.log(wormLength("") === "invalid")
console.log(wormLength("---_-___---_") === "invalid")
console.log(wormLength("------"), "60 mm.")
console.log(wormLength("iwheguawhpvpaiehpiuwwega"), "invalid")
console.log(wormLength("QWERTYUIOPASDFGHJKL"), "invalid")
console.log(wormLength("------------"), "120 mm.")

/** 
Length of Worm
Given a string worm create a function that takes the length of the worm 
and converts it into millimeters. 
Each - represents one centimeter.

Examples

wormLength("----------") ➞ "100 mm."

wormLength("") ➞ "invalid"

wormLength("---_-___---_") ➞ "invalid"
Notes

Return "invalid" if an empty string is given or 
if the string has characters other than -.
*/
