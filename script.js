// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

//  1. Prompt the user for the password criteria
//      a. Password length 8 < 128
//      b. Lowercase, uppercase, numbers, & special charachters

var userInput = window.prompt("Ready to create a password?")

if (userInput === true) {
  console.log("")
  return
}

var passwordlength = parseInt(userInput)

if (isNaN(passwordlength)) {
  window.alert("What you have entered is not valid!")
} else if (passwordlength < 8 || passwordlength > 128) {
  window.alert("Keep password length between 8 and 128 characters!")
} else {
  return
}


var userWantsNumbers = window.confirm("Do you want to use numbers?")
var userWantsSymbols = window.confirm("Do you want to use symbols?")
var userWantsLowercaseLtrs = window.confirm("Do you want to use lowercase letters?")
var userWantsUppercaseLtrs = window.confirm("Do you want to use lowercase letters?");



var lowercaseLtrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseLtrs = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var symbols = ["!","@", "#","$","%","^","&","*","?"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]


//  2. Validate the input
if (userWantsLowercaseLtrs === true)







//  3. Generate password based on criteria
  
  
  
  
  
  
// Displayed password on the page
  return "Generated Password Goes Here"
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
