const div = document.querySelector(".our-element");
const pa = document.querySelector("p");

pa.remove();

function createDiv(value){
    let di = document.createElement("div");
    di.innerText = value;
    di.className = value.toLowerCase();
    di.title = `${value} Element`;
    di.setAttribute('data-value', value) ;
    return di;
}

div.before(createDiv("Start"));
div.after(createDiv("End"));

