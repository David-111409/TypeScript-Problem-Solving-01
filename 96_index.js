let ourSet = new Set([10]);
ourSet.add(20).add(ourSet.size);
// const [, , last] = ourSet;
// const last = [...ourSet][ourSet.size - 1];
const last  = [...ourSet].at(-1);
console.log(ourSet);
console.log(last);
