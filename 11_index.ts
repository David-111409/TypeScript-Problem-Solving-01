export function indexOfCaps(str: string): number[]{
    let indx : number[]= [];

    for (let i  = 0 ; i < str.length; i ++)
        {
         if (/[A-Z]/.test(str[i]))
            indx.push(i);
        }

    return indx;
}


console.log(indexOfCaps("eDaBiT"), [1, 3, 5])
console.log(indexOfCaps("eQuINoX"), [1, 3, 4, 6])
console.log(indexOfCaps("determine"), [])
console.log(indexOfCaps("STRIKE"), [0, 1, 2, 3, 4, 5])
console.log(indexOfCaps("sUn"), [1])
console.log(indexOfCaps("SpiDer"), [0, 3])
console.log(indexOfCaps("accOmpAnY"), [3, 6, 8])
console.log(indexOfCaps("@xCE#8S#i*$en"), [2, 3, 6])
console.log(indexOfCaps("1854036297"), [])
console.log(indexOfCaps("Fo?.arg~{86tUx=|OqZ!"), [0, 12, 16, 18])


/** 
 * Return the Index of All Capital Letters
Create a function that takes a single string as argument 
and returns an ordered array containing the indices of all capital letters 
in the string.

Examples

indexOfCaps("eDaBiT") ➞ [1, 3, 5]

indexOfCaps("eQuINoX") ➞ [1, 3, 4, 6]

indexOfCaps("determine") ➞ []

indexOfCaps("STRIKE") ➞ [0, 1, 2, 3, 4, 5]

indexOfCaps("sUn") ➞ [1]
*/
