const ma = document.querySelector(".main");
const cl = document.querySelector(".close");


setTimeout(() => {
    ma.style.display = "block";
}, 1000);

cl.addEventListener("click", () => {
    // ma.style.display = "none";
    ma.remove();
})

// console.log(cl);
