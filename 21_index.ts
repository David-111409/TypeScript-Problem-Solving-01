/**
 All Occurrences of an Element in an Array
Create a function that returns the indices of all occurrences of an item in the array.

Examples

getIndices(["a", "a", "b", "a", "b", "a"], "a") ➞ [0, 1, 3, 5]

getIndices([1, 5, 5, 2, 7], 7) ➞ [4]

getIndices([1, 5, 5, 2, 7], 5) ➞ [1, 2]

getIndices([1, 5, 5, 2, 7], 8) ➞ []

Notes
If an element does not exist in an array, return [].
Values in the array will be value-types (don't need to worry about nested arrays).
 */

export function getIndices<T>(ar: T[], item: T): number[]{
  let indices : number[] = [];
  
  for (let i = 0; i < ar.length; i++){
    if (ar[i] === item) indices.push(i);
  }
  // ar.forEach((value, index) => {
  //       if (value === item) indices.push(index);
  // });

  return indices;
}


console.log(getIndices(['a', 'a', 'b', 'a', 'b', 'a'], 'a'), [0, 1, 3, 5])
console.log(getIndices([1, 5, 5, 2, 7], 7), [4])
console.log(getIndices([1, 5, 5, 2, 7], 5),[1, 2])
console.log(getIndices([1, 5, 5, 2, 7], 8), [])
console.log(getIndices([8, 8, 8, 8, 8], 8), [0, 1, 2, 3, 4])
console.log(getIndices([8, 8, 7, 8, 8], 8), [0, 1, 3, 4])
console.log(getIndices([true, false, true, false], true), [0, 2])
console.log(getIndices([true, false, true, false], false), [1, 3])
