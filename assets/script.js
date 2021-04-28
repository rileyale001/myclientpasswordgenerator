 // Assignment Code
var generateBtn = document.querySelector("#generate");
// User will type U N L S for the following characters
var passwordUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var passwordLowercase = 'abcdefghijklmnopqrstuvwxyz'
var passwordNumeric = '0123456789'
var passwordSpecialCharacters = '?/>.<,:;{[}]\|=+-_)(*&^%$#@!~'
// Variable list if false or no input chosen for lowercase, uppercase, numeric, and/or special characters. 
var passwordUppercasing = false
var passwordLowercasing = false
var passwordNumericing = false
var passwordSpecialCharactersing = false
// variable if option is selected or criteria not met as an option for user
var passwordOptioning = ""
// variable to generate random password
var generate = ""
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button // WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);
// Need function to generate password still.
function generatePassword() {
// THEN I am presented with a series of prompts for password criteria funcition: Subprocess.
// Create an error message if the input does not meet criteria
var errorMessage = ""
// create prompt for password length
var passwordMessage = "Password Length criteria?"
while (true) {
  var userPasswordLength = prompt((errorMessage ? errorMessage + "\n" : "") + passwordMessage)
  var passwordLength = parseInt(userPasswordLength)
// Length must be at least 8 characters and no more than 128 characters. prompt followed by input.
if (passwordLength == NaN) {
  errorMessage = "Input is not a number. Please specify a number."
} else if (userPasswordLength == "") {
  errorMessage = "No was input given. Please input a number."
} else if (passwordLength < 0) {
  errorMessage = "Input cannot be a number less than 0. Please input a number greater than 0"
} else if (passwordLength < 8) {
  errorMessage = "Password is not long enough. Password must be at least 8 characters."
} else if (passwordLength > 128) {
  errorMessage = "Password is too long. Password must be no greater than 128 characters"
} else {
  break
}
}
// WHEN prompted for character types to include in the password. prompt function for password.
// User types U L N or S
// Create an error message if the input does not meet criteria
errorMessage = ""
// create prompt for password character types
passwordMessage = "Password character criteria?\n" +
"add any of the following options:\n" +
"U = Uppercase\n" + 
"L = lowercase\n" + 
"N = numbers\n" + 
"S = special characters\n"
while (true) {
  var userPasswordCharacters = prompt((errorMessage ? errorMessage + "\n" : "") + passwordMessage)
// When the user answer each prompt. each prompt criteria is accepted as true for the option.
for (const char of userPasswordCharacters) {
  switch (char.toUpperCase()) {
    case 'U': if (!passwordUppercasing) {
    passwordUppercasing = true
    passwordOptioning += passwordUppercase 
  }; break
  case 'L': if (!passwordLowercasing) {
    passwordLowercasing = true
    passwordOptioning += passwordLowercase 
  }; break
  case 'N': if (!passwordNumericing) {
    passwordNumericing = true
    passwordOptioning += passwordNumeric
  }; break
  case 'S': if (!passwordSpecialCharactersing) {
    passwordSpecialCharactersing = true
    passwordOptioning += passwordSpecialCharacters 
  }; break
}
}
// THEN the input is validated and at least one character criteria type should be selected.
  if (passwordOptioning != "") {
      break
} else if (userPasswordCharacters = "") {
  errorMessage = "No input. Please try again."
} else {
  errorMessage = "No input. Please select at least one criteria."
}
}
// WHEN the password criteria is inputed. 
// A conditional generate password randomly using a for loop and math floor.
let length = passwordOptioning.length
for (let i = 0; i < passwordLength; i++) {
  let random = Math.floor(Math.random() * length)
  let rndm = passwordOptioning[random]
  generate += rndm
}
// THEN the password is either displayed and rendered as a random password.
return generate
}

