// Assignment code here

const str1 = 'abcdefghijklmnopqrstuvwxyz'; 
const str2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const str3 = '0123456789'
const str4 = '!@#$%^&*()-_=+[]{}|;:,.<>?'
const password = 'str1 + str2 + str3 + str4';

window.prompt("How many characters would you like to be included")

window.confirm("Would you like it to include lowercase letters?")

window.confirm("Would you like it to include special characters?")



console.log(str1 + str2 + str3 + str4)

for(var i=0; i < str1.length; i++) [ console.log('Here is your password, ' + password[i])]



var generatePassword= function() {
  console.log(Math.floor(Math.random() * 128));
  return;
}

generatePassword()

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
    //make random x length?
  //Confirm ("Would you like it to include lowercase letters?")
    //if yes include, if no don't include
  //Confirm ("Would you like it to include special characters?")
    //if yes include, if no, don't include
//Once criteria set, a password needs to be generated that is randomized
  //but how?

//make potential character sets
//global variables at the top of page to be defined first
//define the users input based off of their prompts and confirms?
//Make alert to display password
