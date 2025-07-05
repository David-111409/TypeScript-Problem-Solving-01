// let js = document.querySelector("#elzero");
// let js2 = document.querySelector(".element");
// let js3 = document.querySelector("div");
// let js4 = document.querySelector("[name='js']");
// let js5 = document.querySelectorAll(".element")[0];
// let js6 = document.querySelectorAll("#elzero")[0];
// let js7 = document.querySelectorAll("div")[0];
// let js8 = document.querySelectorAll("[name='js']")[0];
// let js9  = document.getElementById("elzero");
// let js10 = document.getElementsByClassName("element")[0];
// let js11 = document.getElementsByTagName("div")[0];
// let js12 = document.body.firstElementChild;
// let js13 = document.getElementsByName("js")[0];
// let js14 = document.querySelector("div.element#elzero");
// let js15 = document.querySelector("[class='element']");
// let js16 = document.querySelector("[id='elzero']");
// let js17 = document.body.children[0];
// let js18 = document.body.firstChild.nextSibling;
// let js19 = document.body.childNodes[0].nextSibling;
// console.log(js19);


// let imgs = document.querySelectorAll("div img");
let imgs = document.images;

for (let img of imgs){
    img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    img.style = "background-color: blue; margin-bottom: 10px; border: 2px solid red;";
    img.alt = "Elzero Logo";
}
