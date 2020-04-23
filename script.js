Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt to ask how long between 8-128
// prompt for lowercase, uppercase, numeric, and/or special characters
// its kind of like R,P,S. Add a value to the upper case after the prompt, 
// then add a value to lower case witht the prompt, range is 1 thru 10, 
// upper case is 1-5 and lower ccase 5-10, same with in the prompt of 
// numbers or characters, if they do want numbers and or characters then if true,
// add to the formula, now to figure out the formula and prompts.
// add characters to math.random * character length
