const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function createNewEmployeeObjects() {
  let employeeBonusInfo = [];

  for (employee of employees) {
    let result = calcBonus(employee);
    employeeBonusInfo.push(result)
  }
  console.log(employeeBonusInfo);
  return employeeBonusInfo
}
createNewEmployeeObjects();
createNewEmployeeObjects()
createNewEmployeeObjects()

function calcBonus() {
  // let employeeBonusInfo = [];
  let percentage = 0
  if (employee.reviewRating <= 2) {
    percentage = 0
  }
  else if (employee.reviewRating === 3) {
    percentage = 4
  }
  else if (employee.reviewRating === 4) {
    percentage = 6
  }
  else {
    percentage = 10
  }

  if (employee.employeeNumber.length === 4) {
    percentage = percentage + 5
  }

  if (employee.annualSalary > 65000) {
    percentage = percentage - 1
  }

  if (percentage > 13) {
    percentage = 13
  }
  else if (13 >= percentage && percentage > 0) { // 13 >= percentage > 0 did not work for some reason. Would love some notes.
    percentage = percentage;
  }
  else {
    percentage = 0;
  }

  let employeeName = employee.name
  let bonusPercentage = percentage / 100 //PROP
  let bonus = bonusPercentage * employee.annualSalary;
  let totalComp = Number(employee.annualSalary) + bonus; //PROP
  let totalBonus = Math.floor(bonus); //PROP
  // console.log(employeeName);
  // console.log(percentage);
  // console.log(bonusPercentage);
  // console.log(bonus);
  // console.log(totalBonus);
  // console.log(totalComp);

   return {
    employeeName: employeeName,
    bonusPercentage: bonusPercentage,
    totalComp: totalComp,
    totalBonus: totalBonus
   }
  // console.log(employeeBonusInfo);
}

//console.log( employees );
// calcBonus({ //works correctly
//   name: 'Scout',
//   employeeNumber: '6243',
//   annualSalary: '74750',
//   reviewRating: 5
// })
// calcBonus({ // works correctly
//   name: 'Atticus',
//   employeeNumber: '2405',
//   annualSalary: '47000',
//   reviewRating: 3
// })
// calcBonus({ // wirks correctly
//   name: 'Jem',
//   employeeNumber: '62347',
//   annualSalary: '63500',
//   reviewRating: 4
// })
// calcBonus({ // works correctly
//   name: 'Robert',
//   employeeNumber: '26835',
//   annualSalary: '66000',
//   reviewRating: 1
// })
// calcBonus({ // works correctly
//   name: 'Mayella',
//   employeeNumber: '89068',
//   annualSalary: '35000',
//   reviewRating: 1
// })