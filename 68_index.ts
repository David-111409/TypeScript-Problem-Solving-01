let sel = document.querySelector("select");
function createSelectBox(startYear, endYear) {

    for (let i = startYear; i <= endYear; i++){
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerText = i;
        sel.append(opt);
    }
  }
  createSelectBox(2000, 2021);
  // console.log(sel);
