// function itsMe() {
//     return `Iam A Normal Function`;
//   }
// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
//   }

  let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
  
  let itsMe = () => "Iam A Normal Function";
  console.log(itsMe()); // Iam A Normal Function
