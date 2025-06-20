/**Changing a String into camelCase
Using Camel Case (or camelCase) is where the first word is in lower case, 
and all words after it have their first letter capitalised. Note that there are no spaces in between words!

Create a function that takes a string and returns it back in camelCase.

Examples

camelCasing("Hello World") ➞ "helloWorld"

camelCasing("snake_case") ➞ "snakeCase"

camelCasing("low high_HIGH") ➞ "lowHighHigh"

Notes
You need to remove all spaces and underscores.
There will be no numbers in inputs. */

export function camelCasing(sent : string) : string{
    
    const words = sent.toLowerCase().split(/[\s_]/g).filter(Boolean);

    const [first, ...rest] = words;

    if (words.length === 0) return "";

    return first + rest.map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join("");
}

console.log(camelCasing("        ") === "");
console.log(camelCasing("Hello    World") === "helloWorld")
console.log(camelCasing("snake_case") === "snakeCase")
console.log(camelCasing("low high_HIGH") === "lowHighHigh")
console.log(camelCasing("unEcEsSARilY_loNG_vArIablE_NaME") === "unecessarilyLongVariableName")
console.log(camelCasing("camel casing") === "camelCasing")
