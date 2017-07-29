/**
 * We are going to create an application where you create a variable, and then
 * create a function that doubles it!
 *
 * But there is a catch, its going to not just double numbers, but also strings!
 *
 * AND there is even special handling for objects and booleans.
 *
 * Fill in the code below based on the commented lines.
 */

// EF Note - moved this call down below to test with other items
// theDoubler(someNumber);

function theDoubler(someInput) {
	// typeof is a built in javascript tool that allows us to find the type of an object
	// for number, we have given an example of how that works
	if (typeof someInput == "number") {
		// if type is number, log that number multiplied by 2
		console.log(someInput * 2);
	}

	else if (typeof someInput == "string") {
		console.log(someInput + someInput);
	}
	// if type is string pass back that string twice
	// e.g. sending "someString" in, should log "someStringsomeString"

	//Regarding the boolean check below - I'm unsure of how to get the function to
	//return the proper responses by setting someInput == "boolean". It fails
	// for me consistently.

	else if (someInput == false) {
		console.log("I won't double this");
		}
	else if (someInput == true) {
		console.log("Super-duper true");
		}
	// if the user inputs a boolean (true or false)
	// log "I won't double this" if it is false
	// log "Super-duper true" if it is true
	else if (typeof someInput == "object") {
		console.log("everything is an object");
	}
	// if it's none of those, but it is an object, log "everything is an object"

	else {
		console.log("I can't double this")
	}
	// if it is anything else, print out "I can't double this"
}

//Below defines variables to test types of parameters for theDoubler function

var someNumber = 8;

var someString = "Salad";

var someBooleanTrue = true;

var someBooleanFalse = false;

var someObject = {};

var someOther = [];

//Below tests the function by calling the it with different input types

console.log("Checking number");
theDoubler(someNumber);

console.log("Checking strings");
theDoubler(someString);

console.log("Checking booleans true");
theDoubler(someBooleanTrue);

console.log("Checking booleans false");
theDoubler(someBooleanFalse);

console.log("Checking objects");
theDoubler(someObject);

console.log("Checking other");
theDoubler(someOther);
