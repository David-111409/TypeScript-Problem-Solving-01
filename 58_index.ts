/**
*Is it Time for Milk and Cookies?
Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! 
Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. 
Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

Examples

timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
*/
const timeForMilkAndCookies= (date:Date) : boolean => (date.getMonth() === 11 &&  date.getDate() === 24 );
export default timeForMilkAndCookies;

console.log(timeForMilkAndCookies(new Date(2013, 11, 24)), true)
console.log(timeForMilkAndCookies(new Date(3000, 11, 24)), true)
console.log(timeForMilkAndCookies(new Date(2154, 11, 11)), false)
console.log(timeForMilkAndCookies(new Date(2010, 11, 2)), false)
console.log(timeForMilkAndCookies(new Date(1980, 9, 24)), false)    
