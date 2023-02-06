// Assignment code here

function generatePassword() {
  
  var upperCaseSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCaseSet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  // var numbSet = ["0","1","2","3","4","5","6","7","8","9"];
  // var specialSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  var selectedArray = [];

  var passwordLength = getPasswordLength();
  var charTypeselected = false;

  while (charTypeselected == false) {
    var upperCase = getChoice("uppercase");
    var lowerCase = getChoice("lowercase");
    if ((upperCase) || (lowerCase)) {
      charTypeselected = true;
      
    } else {
      window.alert(" Select at least one charactor type. ")
    }
  }

 
  if (upperCase) {
    selectedArray = selectedArray.concat(upperCaseSet);
  }
  if (lowerCase) {
    selectedArray = selectedArray.concat(lowerCaseSet);
  }
  var passwordString = "";

  for (var i = 0; i < passwordLength; i++){
    passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
  }
  return passwordString;
}
function getPasswordLength() {
  var userChoice = 0 ;
  while ((userChoice < 8) || (userChoice > 128)) {
    userChoice = parseInt(window.prompt("what is the desired length of your password?should be between 8 and 128?"));
    
  }
  return userChoice;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










