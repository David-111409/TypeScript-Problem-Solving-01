/**
Sort Positives, Keep Negatives
Write a function that sorts the positive numbers in ascending order, and keeps the negative numbers untouched.

Examples

posNegSort([6, 3, -2, 5, -8, 2, -2]) ➞ [2, 3, -2, 5, -8, 6, -2]

posNegSort([6, 5, 4, -1, 3, 2, -1, 1]) ➞ [1, 2, 3, -1, 4, 5, -1, 6]

posNegSort([-5, -5, -5, -5, 7, -5]) ➞ [-5, -5, -5, -5, 7, -5]

posNegSort([]) ➞ []
Notes

If given an empty array, you should return an empty array.
Integers will always be either positive or negative (0 isn't included in the tests). 
 */
export function posNegSort(ar: number[]):number[]{
    let pos = ar.filter(n => n > 0).sort((a, b) => a - b);
    let p = 0;
    for (let i = 0; i < ar.length; i++){
        if (ar[i] > 0)
            ar[i] = pos[p++];
    }
    return ar;
}

console.log(posNegSort([6, 3, -2, 5, -8, 2, -2]), [2, 3, -2, 5, -8, 6, -2])
console.log(posNegSort([6, 5, 4, -1, 3, 2, -1, 1]), [1, 2, 3, -1, 4, 5, -1, 6])
console.log(posNegSort([-5, -5, -5, -5, 7, -5]), [-5, -5, -5, -5, 7, -5])
console.log(posNegSort([-5, -5, -5, -5, -4, -5]), [-5, -5, -5, -5, -4, -5])
console.log(posNegSort([-5, 4, -8, 3, -1, 2, 1, -7]), [-5, 1, -8, 2, -1, 3, 4, -7])
console.log(posNegSort([-5, 4, 3]), [-5, 3, 4])
console.log(posNegSort([]), [])
