// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//I want to make a password generator to create a unique password every time the button is clicked.



//I need password to be at least 8-129 characters
//
  //define what the user wants for their password using PROMPT for open ended questions
  //Prompts ("How many characters would you like to be included") 
  //Confirm ("Would you like it to include lowercase letters?")
  //Confirm ("Would you like it to include special characters?")
//Once criteria set, a password needs to be generated that is randomized

//make potential character sets
//global variables at the top of page to be defined first
//define the users input based off of their prompts and confirms?
//Make alert to display password

const str1 = 'abcdefghijklmnopqrstuvwxyz';
const str2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const str3 = '0123456789'
const str4 = '!@#$%^&*()-_=+[]{}|;:,.<>?'


console.log(str1 + str2 + str3 + str4)



var generatePassword= function() {
  console.log(Math.floor(Math.random() * 128));
  return;
}

generatePassword()