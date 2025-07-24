// let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
// const [a] = myNumbers;
// const [e] = myNumbers.reverse();
// const [a, , , , e] = myNumbers;
// console.log(a * e); // 5

// let mySkills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     ["PHP", "Python", ["Django", "Laravel"]],
// ];

// const [a, b, c, [d, e, [f, g]]] = mySkills;
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// const [c , , , , a, b] = [...arr1, ...arr3];
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// let bigAr = [...arr1, ...arr2, ...arr3];
// Write Your Destructuring Assignment Here
// const [b, a, , , , , , , c] = bigAr.reverse();
// console.log(bigAr);
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
const {
    age: a,
    working: w,
    country: c,
    hobbies: [h1, , h3],
} = member;
console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
