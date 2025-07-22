const colorSelect = document.getElementById("color");
const sizeSelect = document.getElementById("size");
let colorLocalStorage = localStorage.getItem("color");
let sizeLocalStorage = localStorage.getItem("size");
const familyLocalStorage = localStorage.getItem("family");
const fontSelect = document.getElementById("kind");

if (!familyLocalStorage) {
    localStorage.setItem("family", fontSelect.options[0].innerText);
    document.body.style.color = fontSelect.options[0].innerText;
} else {
    document.body.style.fontFamily = familyLocalStorage;
    for (let i = 0; i < 3; i++) {
        if (fontSelect.options[i].innerText === familyLocalStorage) {
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
if (!sizeLocalStorage) {
    document.body.style.fontSize = sizeSelect.options[0].innerText + "px";
    localStorage.setItem("size", sizeSelect.options[0].innerText);
} else {
    document.body.style.fontSize = sizeLocalStorage + "px";
}

for (let i = 0; i < sizeSelect.options.length; i++) {
    if (sizeSelect.options[i].innerText === sizeLocalStorage) {
        sizeSelect.selectedIndex = i;
        break;
    }
}

if (!colorLocalStorage) {
    localStorage.setItem("color", colorSelect.options[0].innerText);
    document.body.style.color = colorSelect.options[0].innerText;
} else {
    document.body.style.color = colorLocalStorage;
    for (let i = 0; i < 6; i++) {
        if (colorSelect.options[i].innerText === colorLocalStorage) {
            colorSelect.selectedIndex = i;
            break;
        }
    }
}

colorSelect.addEventListener("change", (e) => {
    const choice = e.target.options[e.target.value];
    document.body.style.color = choice.innerText;
    localStorage.setItem("color", choice.innerText);
});

sizeSelect.addEventListener("change", (e) => {
    const choice = e.target.options[e.target.value];
    document.body.style.fontSize = choice.innerText + "px";
    console.log(choice.innerText);
    localStorage.setItem("size", choice.innerText);
});

fontSelect.addEventListener("change", (e) => {
    const choice = e.target.options[e.target.value];
    document.body.style.fontFamily = choice.innerText;
    console.log(choice.innerText);
    localStorage.setItem("family", choice.innerText);
});

// This is the closure principle to master it...
function addTo(a){
    return function fun2(b){
        return b + a;
    }
}

let addToThree = addTo(3);
let addToOne = addTo(1);

console.log(addToThree(1));
console.log(addToOne(5));
