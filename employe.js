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
    comp_list:["Mosfilm", "Lenfilm", "Gorky Film Studio", "Soyuzmultfilm", "Central Partnership"]
}
}
let maxCompListLength = 0;
let maxCompListEmployeeName = '';
let maxCompList = [];

for (let employee in employees) {
  let compList = employees[employee].comp_list;
  
  if (compList.length > maxCompListLength) {
    maxCompListLength = compList.length;
    maxCompListEmployeeName = `${employees[employee].first_name} ${employees[employee].last_name}`;
    maxCompList = compList;
  }
}

console.log(`The employee with the longest list of companies is ${maxCompListEmployeeName}`);
console.log(`Their list of companies is: ${maxCompList.join(", ")}`);