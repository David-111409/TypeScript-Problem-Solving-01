/**
Nth Smallest Integer
Given an unsorted array, create a function that returns the nth smallest integer 
(the smallest integer is the first smallest, the second smallest integer is the second smallest, etc).

Examples

nthSmallest([1, 3, 5, 7], 1) ➞ 1

nthSmallest([1, 3, 5, 7], 3) ➞ 5

nthSmallest([1, 3, 5, 7], 5) ➞ null

nthSmallest([7, 3, 5, 1], 2) ➞ 3
-----------------------------------
Notes
n will always be >= 1.
Each integer in the array will be distinct (there will be a clear ordering).
Given an out of bounds parameter (e.g. an array is of size k), and you are asked to find the m > k smallest integer, return null.
 */

function nthSmallest(ar: number[], n:number) : number|null
{

  if (n > ar.length) return null;

  return ar.sort((a, b) => a - b)[n-1];
}

  
console.log(nthSmallest([1, 3, 5, 7], 1), 1);
console.log(nthSmallest([1, 3, 5, 7], 3), 5);
console.log(nthSmallest([1, 3, 5, 7], 5), null);
console.log(nthSmallest([7, 3, 5, 1], 2), 3);
console.log(nthSmallest([5, 4, 3, 2, 1, -3], 1), -3);
console.log(nthSmallest([5, 4, 3, 2, 1, -3], 5), 4);
console.log(nthSmallest([4, 5], 3), null);
console.log(nthSmallest([4, 5], 2), 5);
console.log(nthSmallest([4, 5], 1), 4);

export default nthSmallest;

