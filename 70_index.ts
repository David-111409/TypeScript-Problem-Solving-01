function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let [first, second] = zName.split(" ");
        return `Hello ${first} ${second[0].toUpperCase()}.,`;
      // Write Your Code Here
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        return ` Your Age Is ${parseInt(zAge)}, `;
      // Write Your Code Here
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
      // Write Your Code Here
      // Egypt => You Live In EG
      // Syria => You Live In SY
      return `You Live In ${zCountry.at(0)}${zCountry.at(1).toUpperCase()}`;
    }
    function fullDetails() {
        return namePattern(zName) + ageWithMessage(zAge) + countryTwoLetters(zCountry);
      // Write Your Code Here
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY



  function myltiply(...ar){
    let res = 1;
    for (let ele of ar){
        if (typeof ele === "number"){
            res *= Math.trunc(ele);
        }
    }
    return res;
}
console.log(myltiply(10, 20.4));
console.log(myltiply("A", 10,30));
console.log(myltiply(100.5, 10, 'B'));
