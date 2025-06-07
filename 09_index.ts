export function shhh(str: string): string{
    if (!str) return '"", whispered Edabit.';

    const lower =  str.toLowerCase();
    const first = lower[0].toUpperCase();
    const rest = lower.slice(1);

    return `"${first}${rest}", whispered Edabit.`;
}

console.log(shhh("HI THERE!"), "\"Hi there!\", whispered Edabit.")
console.log(shhh("cool cool cool"), "\"Cool cool cool\", whispered Edabit.")
console.log(shhh("YEAH yeah YEAH yeah"), "\"Yeah yeah yeah yeah\", whispered Edabit.")
console.log(shhh(""), "\"\", whispered Edabit.")

/**
 * Shhh Be Quiet Function
Write a function that removes all capital letters from a sentence 
except the first letter, puts quotation marks around the sentence 
and adds ", whispered Edabit." at the end.

Examples

shhh("HI THERE!") ➞ '"Hi there!", whispered Edabit.'

shhh("tHaT'S Pretty awesOme") ➞ '"That's pretty awesome", whispered Edabit.'

shhh("") ➞ '"", whispered Edabit.'
 */
