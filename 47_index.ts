/**Burglary Series (11): Say What
The insurance guy calls again. Apparently, 
they were informed by your spouse that some items were not stolen at all and 
you failed to mention this detail to them. This is a fraud attempt! 
You freeze and mumble something unintelligible. Find out what you said.

Given an object, return a string that concatenates all the values and adds the 2nd key at the end. 
Make sure you keep an empty space between them but not at the beginning or end of the string. 
Look at the examples for a clearer picture.

Examples

{ 1: "Mommy", 2: "please", 3: "help" } ➞ "Mommy please help please"

{ 1: "Me", 2: "innocent", 3: "is" } ➞ "Me innocent is innocent"

{ 1: "Must", 2: "lawyer", 3: "call" } ➞ "Must lawyer call lawyer" */

export function sayWhat(obj:{1:string, 2: string, 3:string}): string{
    const {1: first, 2: second, 3:third} = obj;
    return `${first} ${second} ${third} ${second}`;
}

const obj = { 1: "Mommy", 2: "please", 3: "help" }
const obj2 = { 1: "Me", 2: "innocent", 3: "is" }
console.log(sayWhat(obj) === "Mommy please help please")
console.log(sayWhat(obj2) === `${obj2[1]} innocent is innocent`)
