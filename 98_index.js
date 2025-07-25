let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  
  let map = new Map(Object.entries(myInfo));
  console.log(map);
  console.log(map.size);
  for (let [key, value] of map){
    if (key === 'role'){
        console.log(true);
        break;
    }
  }
  // Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true
