const  requerir = require ("prompt-sync");
const prompt = requerir ();


// Program to check if the number is positive

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
    // the body of the if statement
    console.log("positive number");
}

console.log("nice number");



/************Example 2*********** */

let age = 17;

//if  age is 18 or above, you are an adult 
//otherwise, you are a minor

if (age >= 18){

    console.log("  you are an adult");
}else{

    console.log("  you are an minor");


}


/**  Nested if...else Statement** */

let marks = 60;
//outher if ...else statement
//student passed if marks 40 or above
//otherwise, student failed

if (marks >= 40){

// inner if ..else statement
//Distinction is marks is 80 or above

if (marks >=80){

console.log("Distinction");


}
else{

console.log("Passed");

}

}
