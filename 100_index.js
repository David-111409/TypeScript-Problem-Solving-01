let theName = "Elzero";

console.log(theName.split(""));
console.log([...theName]);
let ar = [];
for (let el of theName) {
    ar.push(el);
}
console.log(ar);
console.log(Array.from(theName));
console.log(Object.assign([], theName));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
