/**
Taxi Journey
A taxi journey costs $3 for the first kilometer travelled. 
However, all kilometers travelled after that will cost $2 each.

Create a function which returns the distance 
that the taxi must've travelled, given the cost as a parameter.

Examples
journeyDistance(3) ➞ 1
// The first kilometer costs $3

journeyDistance(9) ➞ 4
// The first kilometer costs $3 plus the other three kilometers (costing $2 each)

journeyDistance(5) ➞ 2
 */
export function journeyDistance(cost: number):number{
  if (cost === 0) return 0;
  return (cost - 1) / 2;
}

console.log(journeyDistance(0), 0)
console.log(journeyDistance(3), 1)
console.log(journeyDistance(5), 2)
console.log(journeyDistance(9), 4)
console.log(journeyDistance(15), 7)
console.log(journeyDistance(99), 49)
console.log(journeyDistance(11037), 5518)
