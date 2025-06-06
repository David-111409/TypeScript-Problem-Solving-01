/**
The Fifth Argument
Create a function that has some arguments and returns the type of the fifth argument. 
In case the arguments were less than 5, return "Not enough arguments".

Examples

fifth(1, 2, 3, 4, 5) ➞ "number"

fifth("a", 2, 3, true, "five") ➞ "string"

fifth() ➞ "Not enough arguments"
 */


export function fifth(...ar: any[]): string{
    return ar.length > 4 ?  typeof ar[4] : "Not enough arguments";
}


console.log(fifth('a',2,3,4,5),'number')
console.log(fifth('zero','one','two','three','four','five'),"string")
console.log(fifth(1,2,3,4,false),"boolean")
console.log(fifth(),'Not enough arguments')
console.log(fifth(1,2,3,4,5),'number')
console.log(fifth(1,2,3),'Not enough arguments')
