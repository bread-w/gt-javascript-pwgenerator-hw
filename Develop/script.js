// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lengthOfPassword = prompt("Please enter desired password length.");

  if (lengthOfPassword < 8 || lengthOfPassword > 128){
    alert("Please enter a number between 8 and 128.");
  } else if (isNaN(lengthOfPassword)){
    alert("Please enter a valid number.");
    return writePassword();
  }
  
  var upperCase = confirm("Click 'OK' if you would like to include any upper case letters.");
  var lowerCase = confirm("Click 'OK' if you would like to include any lower case letters.");
  var numbers = confirm("Click 'OK' if you would like to include any numbers.");
  var specialCharacters = confirm("Click 'OK' if you would like to include any special characters.")

 

  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
