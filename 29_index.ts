/**
Flick Switch
Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.

Examples

flickSwitch(["edabit", "flick", "eda", "bit"]) ➞ [true, false, false, false]

flickSwitch(["flick", 11037, 3.14, 53]) ➞ [false, false, false, false]

flickSwitch([false, false, "flick", "sheep", "flick"]) ➞ [true, true, false, false, true]
Notes

"flick" will always be given in lowercase.
An array may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.
 */
export function flickSwitch(ar:any[]):boolean[]{
    let value : boolean = true;
    let array : boolean[]= [];
    
    for (let ele of ar ){
        if (ele === "flick")
            value = !value;
        array.push(value);
    }
    return array;
}

console.log(flickSwitch(['edabit', 'flick', 'eda', 'bit']), [true, false, false, false])
console.log(flickSwitch(['flick', 11037, 3.14, 53]), [false, false, false, false])
console.log(flickSwitch([false, false, 'flick', 'sheep', 'flick']), [true, true, false, false, true])
console.log(flickSwitch([flickSwitch]), [true])
console.log(flickSwitch([['john', 'smith', 'susan'], 'flick']), [true, false])
console.log(flickSwitch(['flick', 'flick', 'flick', 'flick', 'flick']), [false, true, false, true, false])
console.log(flickSwitch([]), [])
