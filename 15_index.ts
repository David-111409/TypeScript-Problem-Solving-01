export function invert(obj: {[key: string] : any}):{[key: string] : any}{
    const result: {[key: string]: any} = {};
  
    for (let key in obj){
        result[obj[key]] = key;
    }
  
    return result;
}

console.log(invert({ "z": "q", "w": "f" }));
console.log(invert({"a": 1, "b": 2, "c": 3}), {1: "a", 2: "b", 3: "c"})
console.log(invert({"z": "q", "w": "f"}), {"q": "z", "f": "w"})
console.log(invert({"zebra": "koala", "horse": "camel"}), {"koala": "zebra", "camel": "horse"})

/**
Invert Keys and Values
Write a function that inverts the keys and values of an object.

Examples

invert({ "z": "q", "w": "f" })
➞ { "q": "z", "f": "w" }

invert({ "a": 1, "b": 2, "c": 3 })
➞ { 1: "a", 2: "b", 3: "c" }

invert({ "zebra": "koala", "horse": "camel" })
➞ { "koala": "zebra", "camel": "horse" }
 */
