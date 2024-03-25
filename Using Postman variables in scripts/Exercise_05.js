//Filtering a list of items
/*
Implement a JavaScript function called findSeniorEmployees that takes a list of employees as an argument and returns a list of senior employees. In JavaScript, the list is represented by an array. The current year is provided as an integer argument to the function (example: 2023).
Find all employees in the list who have been with the company for exactly or longer than 10 years and are still active in the company. The function should return only a list of senior employees.
Below you can find some sample data that can help you understand the structure of the production data:

const sampleData = [
    {
        "name": "John Doe",
        "yearOfEmployment": 1995,
        "isActive": false
    },
    {
        "name": "Marissa Williams",
        "yearOfEmployment": 2007,
        "isActive": true
    },
    {
        "name": "Isabelle Keanna",
        "yearOfEmployment": 2000,
        "isActive": true
    },
    {
        "name": "Mark McRolland",
        "yearOfEmployment": 2018,
        "isActive": true
    }    
];
*/
function findSeniorEmployees(employees, currentYear) {
  let seniorEmployees = [];
  employees.forEach(function (employee) {
    if (employee.isActive && currentYear - employee.yearOfEmployment >= 10) {
      seniorEmployees.push(employee);
    }
  });
  return seniorEmployees;
}
