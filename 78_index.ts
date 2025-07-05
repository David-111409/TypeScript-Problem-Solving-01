// let Input = document.querySelector("input[name='dollar']");
// let result = document.querySelector("div.result");

// Input.addEventListener("input", function(){
//     let dollar = Input.value;
//     let eg = `${(dollar * 15.6).toFixed(2)}`;
//     result.textContent = `{${dollar}} USD Dollar = {${eg}} Egyptian Pound`;
// })

// let one = document.querySelector(".one"), 
//     two = document.querySelector(".two");

// [one.title, two.title] = [two.title, one.title];

// [one.textContent, two.textContent] = [two.textContent, [one.textContent, one.attributes.length].join(" ") ];


// let imgs = document.querySelectorAll("img");

// for (let img of imgs){
//     if (!img.hasAttribute("alt")){
//         img.alt = "Elzero New";
//     }
//     else img.alt = "Old";
// }

let num = document.querySelector("[type='number']");
let submit = document.querySelector("[type='submit']");
let text = document.querySelector("[type='text']");
let form = document.querySelector("form");
let container = document.querySelector(".results");
let select = document.querySelector("select[class='input']");
console.log(select);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    container.innerHTML = "";
    for (let i = 1; i <= num.value; i++){
        let element = document.createElement(select.value);
        element.textContent = text.value;
        element.className = "box";
        element.title = "Element";
        element.id = `id-${i}`;
        container.append(element);
    }
})
