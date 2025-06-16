/** Get Student with Best Test Avg.
Given an object with students and the grades that they made on the tests that they took, 
determine which student has the best Test Average. The key will be the student's name 
and the value will be an array of their grades. You will only have to return the student's name. 
You do not need to return their Test Average.

Examples

getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80]
}) ➞ "John"

// John's avg = 90
// Bob's avg = 83.33

getBestStudent({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
}) ➞ "Mike"

Notes
All students in an object will have the same amount of test scores. So no student will have taken more tests than another.*/

export function getBestStudent(obj:{[key:string]:number[]}):string{
    let ar =  Object.entries(obj);
    let topName = "", bestSum = -Infinity;
    // let [topName, firstNotes] = ar[0];
    // let bestSum = firstNotes.reduce((a, b) => a + b, 0);
    // let bestSum = ar[0][1].reduce((a,b ) => a + b, 0);
    // let topName = ar[0][0];
    for (const [name, notes] of ar){
        const sum = notes.reduce((a, b) => a + b, 0);
        if (sum > bestSum) {
             bestSum = sum;
             topName = name;
            }
    }
    return topName;
}


console.log(getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80]
  }));

 console.log(getBestStudent({
	John: [100, 90, 80],
	Bob: [100, 70, 80]
}), "John", "Example #1")

console.log(getBestStudent({
	Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
}), "Mike", "Example #2")

console.log(getBestStudent({
	Tim: [93, 84, 49, 71, 76, 83],
  Nick: [88, 91, 74, 72, 63, 68],
  Brad: [100, 94, 72, 64, 58, 81],
	Annie: [79, 93, 82, 82, 63, 87]
}), "Annie")

console.log(getBestStudent({
	Eddie: [65, 85, 72, 76],
  Brock: [55, 97, 82, 91],
  Jessica: [78, 62, 79, 99]
}), "Brock")
