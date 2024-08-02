/*
    - Retrieve the elements we are interested in from the DOM.
    - Create the variabels that already know
    - Create FOR loop to prepare the numbers from 1 to 100.
    - Create the conditions to print in console fizz and buzz or fizzbuzz
    - Create the elements to fill the container in dom to print the results
    - Apply different styles to the elements added to the DOM.
*/

//--- Preparation phase
// Retrieve the interested element from DOM
const container = document.getElementById("container");
// Create the variables
const fizz = "Fizz";
const buzz = "Buzz";

//---Processing phase
// Create forr loop to prepare the numbers
for (i = 1; i <= 100; i++) {
  //Condition for multiples of 3, 5 or both, print Fizz, Buzz or fizzbuzz instead of the number.
  if (i % 15 === 0) {
    console.log(fizz + buzz);
  } else if (i % 5 === 0) {
    console.log(buzz);
  } else if (i % 3 === 0) {
    console.log(fizz);
  } else {
    console.log(i);
  }
}
