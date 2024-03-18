// Navigating complex data structures
/*
Open the following URL in a new Postman request:
https://run.mocky.io/v3/897e4bfd-57de-4914-a03d-6796913571a7
In Postman, navigate the given data structure and get the value of the property PostalCode:
const response = pm.response.json();
const firstPostalCode = FIXME;
console.log(firstPostalCode);
Once you have found the path to the property and can see in the Postman console the value 12345, go to the coding exercise.
In the function getFirstPostalCode(), use the variable named firstPostalCode and assign it the value of the path to the property PostalCode (copy the same line from Postman).
*/
function getFirstPostalCode(response) {
  // IMPORTANT:
  // 1. Make sure to use the function parameter response

  // 2. Set the variable firstPostalCode with the correct path to the property.
  //    Replace FIXME with something appropiate.
  //    This is the ONLY line of code you need to change!
  const firstPostalCode =
    response[0]["Item01"]["Data"][0]["Results"][0]["Contact"]["Address"][
      "PostalCode"
    ];

  // 3. DO NOT remove the return statement!
  return firstPostalCode;
}
