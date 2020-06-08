// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lengthOfPassword = prompt("Please enter your desired password length. Password must be between 8 and 128 characters.");

  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Please enter a number between 8 and 128.");
    return writePassword();
  } else if (isNaN(lengthOfPassword)) {
    alert("Please enter a valid number.");
    return writePassword();
  }

  var upperCase = confirm(
    "Click 'OK' if you would like to include any upper case letters, and 'Cancel' if not."
  );
  var lowerCase = confirm(
    "Click 'OK' if you would like to include any lower case letters, and 'Cancel' if not."
  );
  var numbers = confirm("Click 'OK' if you would like to include any numbers, and 'Cancel' if not.");
  var specialCharacters = confirm(
    "Click 'OK' if you would like to include any special characters, and 'Cancel' if not."
  );

  var upperCaseArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowerCaseArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var specialCharactersArray = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
  ];
  var userOptions = [];

  if (upperCase === true) {
    userOptions = userOptions.concat(upperCaseArray);
  }
  if (lowerCase === true) {
    userOptions = userOptions.concat(lowerCaseArray);
  }
  if (numbers === true) {
    userOptions = userOptions.concat(numbersArray);
  }
  if (specialCharacters === true) {
    userOptions = userOptions.concat(specialCharactersArray);
  } else if (
    upperCase === false &&
    lowerCase === false &&
    numbers === false &&
    specialCharacters === false
  ) {
    alert("You must choose at least one option.");
    return writePassword();
  }
  console.log(userOptions);

  function generatePassword(){
    var password = ""
    for (var i = 0; i < lengthOfPassword; i++) {
      var randomIndex = Math.floor(Math.random() * userOptions.length);
      password = password + userOptions[randomIndex];
      console.log(randomIndex, userOptions[randomIndex], password);
    }
    return password;
  } 
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
