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
//Document title
const title = document.title;

//---Processing phase
//Create elemets
const titleElement = document.createElement("h1");
const divRowElement = document.createElement("div");
//Added inside container
containerElement.appendChild(titleElement);
containerElement.appendChild(divRowElement);
divRowElement.classList.add(
  "row",
  "row-cols-6",
  "justify-content-center",
  "d-flex",
  "flex-wrap",
  "gap-3"
);
// Print the title
titleElement.innerText = title;

// Create for loop to prepare the numbers
for (i = 1; i <= 100; i++) {
  //Create 'i' times the div class='col' inside div row
  const divColElement = document.createElement("div");
  divColElement.classList.add(
    "col",
    "text-center",
    "border",
    "rounded",
    "py-3"
  );
  divRowElement.appendChild(divColElement);
  //Condition for multiples of 3, 5 or both, print Fizz, Buzz or fizzbuzz instead of the number.
  if (i % 15 === 0) {
    console.log(fizz + buzz);
    // Print in page
    divColElement.innerHTML = `${fizz}${buzz}`;
    //Add class for bg color
    divColElement.classList.add("fizzbuzz-bg");
  } else if (i % 5 === 0) {
    console.log(buzz);
    // Print in page
    divColElement.innerHTML = `${buzz}`;
    //Add class for bg color
    divColElement.classList.add("buzz-bg");
  } else if (i % 3 === 0) {
    console.log(fizz);
    // Print in page
    divColElement.innerHTML = `${fizz}`;
    //Add class for bg color
    divColElement.classList.add("fizz-bg");
  } else {
    console.log(i);
    // Print in page
    divColElement.innerHTML = `${i}`;
    //Add class for bg color
    divColElement.classList.add("nr-bg");
  }
}
