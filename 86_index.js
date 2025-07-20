let num = prompt("Print Number From - To", "Example 5-20");

let [small, big] = num.split("-").map(Number).sort((a, b) => a - b);


// console.log(small, big);

for (let i = small; i <= big; i++ ){
    let ourDiv = document.createElement("div");
    ourDiv.textContent = i;
    document.body.append(ourDiv);
    console.log(i);
}
