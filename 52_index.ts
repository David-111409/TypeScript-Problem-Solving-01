/**
Add, Subtract, Multiply or Divide?
Write a function that takes two numbers and returns if they should be added,
 subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.

Examples

operation(15, 9) ➞ "added"

operation(26, 2) ➞ "subtracted"

operation(11, 11) ➞ null

Notes
Only integers are used as test input.
Numbers should be added, subtracted, divided or multiplied in the order they appear in the parameters.
The function should return either "added", "subtracted", "divided", "multiplied" or null. 
*/

type t = "added" | "subtracted" | "divided" | "multiplied" | null;

const operation = (n1:number, n2:number): t => {
    switch(true){
        case n1 + n2 === 24:
            return "added";

        case n1 - n2 === 24:
            return "subtracted";

        case n2 !== 0 && n1 / n2 === 24:
            return "divided";

        case n1 * n2 === 24:
            return "multiplied";
            
        default:
            return null;
    }
}

export default operation;

console.log(operation(12, 12) === "added")
console.log(operation(100, 76)  === "subtracted")
console.log(operation(6, 4) === "multiplied")
console.log(operation(528, 22) === "divided")
console.log(operation(10, 12) === null)
