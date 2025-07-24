const colorSelect = document.getElementById("color");
const sizeSelect = document.getElementById("size");
let colorsessionStorage = sessionStorage.getItem("color");
let sizesessionStorage = sessionStorage.getItem("size");
const familysessionStorage = sessionStorage.getItem("family");
const fontSelect = document.getElementById("kind");

if (!familysessionStorage) {
    sessionStorage.setItem("family", fontSelect.options[0].innerText);
    document.body.style.color = fontSelect.options[0].innerText;
} else {
    document.body.style.fontFamily = familysessionStorage;
    for (let i = 0; i < 3; i++) {
        if (fontSelect.options[i].innerText === familysessionStorage) {
            fontSelect.selectedIndex = i;
            break;
        }
    }
}

for (let i = 16; i < 31; i++) {
    let opt = document.createElement("option");
    opt.value = i - 16;
    opt.innerText = i;
    sizeSelect.append(opt);
}
if (!sizesessionStorage) {
    document.body.style.fontSize = sizeSelect.options[0].innerText + "px";
    sessionStorage.setItem("size", sizeSelect.options[0].innerText);
} else {
    document.body.style.fontSize = sizesessionStorage + "px";
}

for (let i = 0; i < sizeSelect.options.length; i++) {
    if (sizeSelect.options[i].innerText === sizesessionStorage) {
        sizeSelect.selectedIndex = i;
        break;
    }
}

if (!colorsessionStorage) {
    sessionStorage.setItem("color", colorSelect.options[0].innerText);
    document.body.style.color = colorSelect.options[0].innerText;
} else {
    document.body.style.color = colorsessionStorage;
    for (let i = 0; i < 6; i++) {
        if (colorSelect.options[i].innerText === colorsessionStorage) {
            colorSelect.selectedIndex = i;
            break;
        }
    }
}

colorSelect.addEventListener("change", (e) => {
    const choice = e.target.options[e.target.value];
    document.body.style.color = choice.innerText;
    sessionStorage.setItem("color", choice.innerText);
});

sizeSelect.addEventListener("change", (e) => {
    const choice = e.target.options[e.target.value];
    document.body.style.fontSize = choice.innerText + "px";
    console.log(choice.innerText);
    sessionStorage.setItem("size", choice.innerText);
});

fontSelect.addEventListener("change", (e) => {
    const choice = e.target.options[e.target.value];
    document.body.style.fontFamily = choice.innerText;
    console.log(choice.innerText);
    sessionStorage.setItem("family", choice.innerText);
});

// function addTo(a){
//     return function fun2(b){
//         return b + a;
//     }
// }

// let addToThree = addTo(3);
// let addToOne = addTo(1);

// console.log(addToThree(1));
// console.log(addToOne(5));
