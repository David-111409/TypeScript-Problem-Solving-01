// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start ; i <= end ; i += start){
//     if (i === exclude) continue;
//     console.log(i);
// }
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// let start = 10;
// let end = 0;
// let stop = 3;

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// let step = stop / stop;
// for (let i = start ; i > end ; i -= step){
//     console.log(i.toString().padStart(2, "0"));
//     if (i === stop){
//         break;
//     }
// }


// let start = 1;
// let end = 6;
// let breaker = 2;
// for (let i = start ; i <= end; i += start){
//     console.log(i);
//     console.log("--", breaker);
//     console.log("--", breaker + breaker);
// }
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// let index = 10;
// let jump = 2;

// for (;;) {
//   // Write Your Code Here
//   if (index === jump) break;

//   console.log(index);

//   index -= jump;
// }

// Output
// 10
// 8
// 6
// 4


// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let i =  letter.length;
// let j = i;
// for (let k = i ; k < friends.length ; k++){

//     if (friends[k].startsWith(letter.toUpperCase())) 
//         continue;

//     console.log(j, "=>", friends[k]);
//     j++;

// }
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"


// let start = 0;
// let swappedName = "elZerO";
// let newName = "";
// for (let i = start; i < swappedName.length; i++){
//     if (swappedName[i].toUpperCase() === swappedName[i]){
//         newName += swappedName[i].toLowerCase();
//     }else {
//         newName += swappedName[i].toUpperCase();
//     }
// }
// console.log(newName);
// Output
// "ELzERo"

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = start ; i < mix.length ; i++){
//     if (i === start ) continue;
//     if (typeof mix[i] === "number") console.log(mix[i]);
// }
// Output
// 2
// 3
// 4


