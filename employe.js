let employees ={
    employe_1: {
    first_name: "Bred",
    last_name: "Pit",
    age: 35,
    comp_list:["Hollywood", "Bollywood", "20Century", "Marwel"]
},
    employe_2: {
    first_name: "Innokenty",
    last_name: "Smoktunovskyi",
    age: 75,
    comp_list:["Mosfilm", "Lenfilm", "Gorky Film Studio", "Soyuzmultfilm"]
}
}
let maxCompListLength = 0;
let employeesWithMaxCompListLength = [];

for (let employee in employees) {
  let compList = employees[employee].comp_list;
  
  if (compList.length > maxCompListLength) {
    maxCompListLength = compList.length;
    employeesWithMaxCompListLength = [employee];
    maxCompList = compList;
  } else if (compList.length === maxCompListLength) {
    employeesWithMaxCompListLength.push(employee);
  }
  
}

console.log(`The employees with the longest list of companies (${maxCompListLength}) are:`);
employeesWithMaxCompListLength.forEach(employee => {
  console.log(`${employees[employee].first_name} ${employees[employee].last_name}`);
  console.log(`Their list of companies is: ${maxCompList.join(", ")}`);
});