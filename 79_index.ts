// let first = setTimeout(() => {
//     console.log("Hello 1");
//     setTimeout(() => {
//         console.log("Hello 2");
//         setTimeout(() => {
//             console.log("Hello 3");
//             setTimeout(() => console.log("Hello 4"), 
//             1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// let p = new Promise((resolve, reject) => {
//     if (false){
//         resolve(0);
//     }
//     else {
//         reject("Bye");
//     }
// });

// p.then(() => console.log("Done")).catch(() => console.log("not done"));


const mumbling = (str: string) : string => {
    return str
    .toLowerCase()
    .split("")
    .map((el, ind) => `${el.toUpperCase()}${el.repeat(ind)}`)
    .join("-");
};

export default mumbling;

console.log(mumbling("MubAshIr") === "M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr");
console.log(mumbling("maTT") === "M-Aa-Ttt-Tttt");
console.log(mumbling("airForce") === "A-Ii-Rrr-Ffff-Ooooo-Rrrrrr-Ccccccc-Eeeeeeee");
console.log(mumbling("EdaBit") === "E-Dd-Aaa-Bbbb-Iiiii-Tttttt");
console.log(mumbling("PaKiStAn") === "P-Aa-Kkk-Iiii-Sssss-Tttttt-Aaaaaaa-Nnnnnnnn");
