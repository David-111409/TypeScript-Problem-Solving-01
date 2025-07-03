function calculate(firstNum:number, secondNum?: number , oper?:string ){
    if (secondNum === undefined) return "second not found";
    if (oper === undefined || oper === "add") return firstNum + secondNum;
    else if (oper === "subtract") return firstNum - secondNum;
    else if (oper === "multiply") return firstNum * secondNum;
}

console.log(calculate(20, 30, "multiply"));
console.log(calculate(20, 30, "subtract"));
console.log(calculate(20, 30, "add"));
console.log(calculate(10));
console.log(calculate(2, 22));
console.log(calculate(2));



function ageInTime(theAge: number):string{
    if (theAge >= 100 || theAge <= 10) return "out of range";

    let months = theAge * 12, weeks = months * 4, days = months * 30, hours = days * 24,
    minutes = hours * 60 , seconds = minutes * 60;
    
    return `${theAge} years\n${months} Months\n${weeks} Weeks\n${days} days\n${hours} hours\n${minutes} minutes\n${seconds} seconds`;
}

console.log(ageInTime(31));

function checkStatus(a:any, b:any, c:any){
    let ar = [a, b, c];
    let name, age, status;
    for (let ele of ar){
        if (typeof ele ===  "string") {
            name = ele;
        }
        else if (typeof ele === "boolean"){
            status = ele;
        }
        else if (typeof ele === "number"){
            age = ele;
        }
    }
    console.log(`Helo ${name}, Your Age Is ${age}, Your Are ${status? "Available" : "Not Available"} For Hire.`);
}



  
//   Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
