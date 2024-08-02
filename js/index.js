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
const containerElement = document.getElementById("container");
// Create the variables
const fizz = "Fizz";
const buzz = "Buzz";

//---Processing phase
//Create elemet div inside container
const divRow = document.createElement("div");
divRow.classList.add("row", "row-cols-6", "d-flex", "flex-wrap");
containerElement.appendChild(divRow);
// Create forr loop to prepare the numbers
for (i = 1; i <= 100; i++) {
  //Create i times the div class='col' inside div row
  const divCol = document.createElement("div");
  divCol.classList.add("col", "border", "rounded");
  divRow.appendChild(divCol);
  //Condition for multiples of 3, 5 or both, print Fizz, Buzz or fizzbuzz instead of the number.
  if (i % 15 === 0) {
    console.log(fizz + buzz);
    // Print in page
    divCol.innerHTML = `${fizz}${buzz}`;
  } else if (i % 5 === 0) {
    console.log(buzz);
    // Print in page
    divCol.innerHTML = `${buzz}`;
  } else if (i % 3 === 0) {
    console.log(fizz);
    // Print in page
    divCol.innerHTML = `${fizz}`;
  } else {
    console.log(i);
    // Print in page
    divCol.innerHTML = `${i}`;
  }
}
