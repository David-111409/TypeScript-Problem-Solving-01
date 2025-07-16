// Solution 1: 
// const canNest = (ar1:number[], ar2:number[]):boolean => 
//             ( Math.min(...ar1) > Math.min(...ar2)) && (Math.max(...ar1) < Math.max(...ar2)); 


// Solution 2:
const canNest = (ar1:number[], ar2:number[]) : boolean=> 
{
    let min1 = Infinity, max1 = -Infinity;
     let min2 = Infinity, max2 = -Infinity;
     let len1 = ar1.length, len2 = ar2.length;
     for (let ele of ar1){
        if (ele < min1) min1 = ele;
        if (ele > max1) max1 = ele;
     }
     for (let ele of ar2){
        if (ele < min2) min2 = ele;
        if (ele > max2) max2 = ele; 
     }
     return min1 > min2 && max1 < max2;
}
export default canNest;


console.log(canNest([1, 2, 3, 4], [0, 6]), true)
console.log(canNest([3, 1], [4, 0]), true)
console.log(canNest([9, 9, 8], [8, 9, 10]), false)
console.log(canNest([9, 9, 8], [8, 9]), false)
console.log(canNest([1, 2, 3, 4], [2, 3]), false)

// Description :
/*
Check if One Array can be Nested in Another
Create a function that returns true if the first array can be nested inside the second and false otherwise.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.
Examples

canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false
*/
