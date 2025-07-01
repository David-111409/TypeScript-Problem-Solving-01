// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;
// let l = friends.length;
// while (++index < l ){
//     const el = friends[index-1];
//     if (typeof el !== "number" && !el.startsWith("A")) {
//         console.log(`"${++counter} => ${el}"`);
//     }
// }
// Output
// "1 => Sayed"
// "2 => Mahmoud"

function sayHello(theName:string, theGender:"Male"|"Female" | "" = "") : string {
    if (theGender === "Male") return `Hello Mr ${theName}`;
    else if (theGender === "Female") return `Hello Miss ${theName}`
    return `Hello ${theName}`;
  }
  
  // Needed Output
  console.log(sayHello("Osama", "Male")); // "Hello Mr Osama"
  console.log(sayHello("Eman", "Female")); // "Hello Miss Eman"
  console.log(sayHello("Sameh")); // "Hello Sameh"
