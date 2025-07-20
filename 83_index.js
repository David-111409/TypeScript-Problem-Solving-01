const show = document.querySelector(".classes-list div");
const div = document.querySelector(".classes-list");
const input_classToAdd = document.querySelector("input.classes-to-add");
const input_classToRemove = document.querySelector("input.classes-to-remove");
const currentEle = document.querySelector("[title='Current']");

function funToAdd(ar){
    if (ar.length) 
        {   show.innerHTML = "";
            ar.forEach(el => {
                let sp = document.createElement("span");
                sp.innerText = el;
                show.append(sp);
            })
        }
    
}

input_classToAdd.addEventListener("blur", (e) => {
    if (e.target.value.trim() != ''){
    let classesToAdd = e.target.value.trim().split(" ").filter(el => Boolean(el));
    
    for  ( let el of classesToAdd){
        currentEle.classList.add(el.toLowerCase());
    }
    funToAdd(currentEle.className.split(" ").sort());
    input_classToAdd.value = "";
}

})

input_classToRemove.addEventListener("blur", (e) => {
    if (e.target.value.trim() != ''){
    let classesToRemove = e.target.value.trim().split(" ").filter(el => Boolean(el));
    
    for  ( let el of classesToRemove){
        currentEle.classList.remove(el.toLowerCase());
    }
    funToAdd(currentEle.className.split(" "));
    if (currentEle.className == ""){
        show.innerText = 'No Classes To Show';
    }

    input_classToRemove.value = "";
}

})

const allClasses = Array.from(currentEle.classList).sort();

if (allClasses.length > 0){
    funToAdd(allClasses);
}
else {
    show.innerText = "No Classes To Show";
}

