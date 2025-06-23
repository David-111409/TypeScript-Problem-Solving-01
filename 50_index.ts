
/**Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.

Examples

dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]

dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]

dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

Notes
If none of the words match, return an empty array.
Keep the filtered array in the same relative order as the original array of words. */

export const dictionary = (initial: string, ar:string[]): string[] => ar.filter(word => word.startsWith(initial));

console.log(dictionary('bu', ['button', 'breakfast', 'border']), ['button']);
console.log(dictionary('beau', ['pastry', 'delicious', 'name', 'boring']), []);
console.log(dictionary('there', ['there', 'here', 'everywhere']), ['there']);
console.log(dictionary('sno', ['snow', 'paper', 'ghost']), ['snow']);
console.log(dictionary('ma', ['marriage', 'married', 'many', 'delight']), ['marriage', 'married', 'many']);
console.log(dictionary('no', ['inferno', 'notion', 'nominate', 'note', 'fairy']), ['notion', 'nominate', 'note']);
console.log(dictionary('cre', ['creating', 'creature', 'creed', 'increasing']), ['creating', 'creature', 'creed']);
