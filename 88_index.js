
const but = document.getElementById("change");

let mode = localStorage.getItem("dark");
if (mode === "true"){
    // localStorage.setItem("dark", "true");
    document.body.classList.add("light");
    // but.textContent = "dark";
    but.className = "dark-btn";
}
else {
    document.body.classList.remove("light");
    but.className = "light-btn";
}
but.addEventListener("click", () => {
    mode = localStorage.getItem("dark");
    console.log(mode);
    if (mode === null || mode === 'true') {
        but.className =  "light-btn";
        // but.textContent = "light" ;
        document.body.classList.toggle("light");
        localStorage.setItem("dark", "false");
    }else {
        
        but.className = "dark-btn";
        // but.textContent = "dark";
        document.body.classList.toggle("light");
        
        localStorage.setItem("dark", "true");
}
});
