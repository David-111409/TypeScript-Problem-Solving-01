/**
 * The pH Scale
Given a pH value, return whether that value is "alkaline" 
(greater than 7), "acidic" (less than 7), or "neutral" (7).
 Return "invalid" if the value given is less than 0 or greater than 14.

Image of a pH chart

Examples

pHName(5) ➞ "acidic"

pHName(8.7) ➞ "alkaline"

pHName(7) ➞ "neutral"

Notes
Values such as 6.9999 and 8.00001 should return "acidic" and "alkaline" respectively.
 */
type degree = "acidic" | "alkaline" | "neutral" | "invalid";

export function pHName(ph: number): degree{
    if (ph < 0 || ph > 14) return "invalid";
    if (ph > 7) return "alkaline";
    if (ph === 7) return "neutral";
    return "acidic";   
}

console.log(pHName(7.0), "neutral")
console.log(pHName(7), "neutral")
console.log(pHName(13.52), "alkaline")
console.log(pHName(-4.33), "invalid")
console.log(pHName(8.27), "alkaline")
console.log(pHName(9.72), "alkaline")
console.log(pHName(-4.58), "invalid")
console.log(pHName(14.85), "invalid")
console.log(pHName(17.76), "invalid")
console.log(pHName(3.9), "acidic")
console.log(pHName(14.21), "invalid")
console.log(pHName(-2.35), "invalid")
console.log(pHName(2.66), "acidic")
console.log(pHName(16.45), "invalid")
console.log(pHName(3.46), "acidic")
console.log(pHName(7.26), "alkaline")
console.log(pHName(12.46), "alkaline")
console.log(pHName(17.51), "invalid")
console.log(pHName(19.7), "invalid")
console.log(pHName(10.46), "alkaline")
console.log(pHName(-4.83), "invalid")
console.log(pHName(3.13), "acidic")
console.log(pHName(11.38), "alkaline")
console.log(pHName(5.23), "acidic")
console.log(pHName(18.85), "invalid")
console.log(pHName(15.82), "invalid")
console.log(pHName(9.17), "alkaline")
console.log(pHName(2.73), "acidic")
console.log(pHName(10.99), "alkaline")
console.log(pHName(-3.86), "invalid")
console.log(pHName(17.59), "invalid")
console.log(pHName(5.5), "acidic")
console.log(pHName(-3.35), "invalid")
console.log(pHName(16.02), "invalid")
console.log(pHName(8.78), "alkaline")
console.log(pHName(18.94), "invalid")
console.log(pHName(-4.69), "invalid")
console.log(pHName(0.86), "acidic")
console.log(pHName(-3.45), "invalid")
console.log(pHName(19.05), "invalid")
console.log(pHName(5.41), "acidic")
console.log(pHName(0.44), "acidic")
console.log(pHName(8.82), "alkaline")
console.log(pHName(-1.24), "invalid")
console.log(pHName(1.72), "acidic")
console.log(pHName(10.01), "alkaline")
console.log(pHName(3.49), "acidic")
console.log(pHName(13.62), "alkaline")
console.log(pHName(3.43), "acidic")
console.log(pHName(4.35), "acidic")
console.log(pHName(17.07), "invalid")
console.log(pHName(14.64), "invalid")

// made by @Joshua Señoron
