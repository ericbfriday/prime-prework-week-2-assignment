// Is the JavaScript file sourced? Check in the browser console by
// right clicking and selecting 'Inspect'. If the script is properly
// sourced you will see the log message: 'Script sourced!'.

console.log('Script sourced!');

/**
 * Animal Guessing Game
 * When the page is loaded, the user is prompted to guess an animal.
 * Once they submit their answer the program will either
 * - tell them that they correctly guessed the animal or
 * - that they should try again.
 */

// 1. Create a variable that takes in user input via the prompt function
// that asks "Of what animal am I thinking?".

var animal = prompt("Of what animal am I thinking?");

// 2. Write a conditional statement (if/else) that alerts
// - "How did you know?!" if the user guesses "turtle" or
// - "Try again." if the user did not guess "turtle" correctly.
// IMPORTANT: Use these exact strings: 'Try again.' and 'How did you know?!'.

if (animal === "turtle") {
  alert("How did you know?!");
}
else {
  alert("Try again.");
}

// 3. Refactor your code above into the "animalGuess" function below.
// Refactor means the website should behave the same to the users,
// but the code is written differently.

// Think about the variable "animalName" and how it is different than "animal".
// Call the function by passing the animal variable into it

function animalGuess(animalName) {
  // conditional statement goes in here
  if (animalName === "turtle"){
    alert('How did you know?!');
  }
  else {
    alert('Try again.');
  }
}

animalGuess(animal);

// 4. Answer the question: What will "console.log(animalName)" log outside the
// "animalGuess" function?

//EF note - It will return an undefined error, as the parameter 'animalName' is not
//defined outside of the function animalGuess. animalName is limited in 'scope'
//to be local to animalGuess. If it were defined outside of the function, then
//it could be defined 'globally', and it could be called by the console.log()
//command.

/** testing the code below. This is going to be commented out in the final code.

console.log("Testing 'panda'. Expect else conditions to return from function. Should show 'Try Again.'")
animalGuess('panda');

console.log("Testing 'turtle'. Expect if conditions to return from function. Should show 'How did you know?!'")
animalGuess('turtle');
*/
