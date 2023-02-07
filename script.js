// Assignment code here

function generatePassword() {
  
  var upperCaseto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCaseto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  // var numb = ["0","1","2","3","4","5","6","7","8","9"];
  // var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  var selectedArray = [];

  var passwordLength = getPasswordLength();
  var charTypeselected = false;
    //The while loop loops through a block of code as long as a specified condition is true.

  while (charTypeselected == false) {
    var upperCase = getChoice("uppercase");
    var lowerCase = getChoice("lowercase");
    if ((upperCase) || (lowerCase)) {
      charTypeselected = true;
      
    } else {
      window.alert(" Select at least one charactor type ")
    }
  }

 
  if (upperCase) {
    selectedArray = selectedArray.concat(upperCaseto);
  }
  if (lowerCase) {
    selectedArray = selectedArray.concat(lowerCaseto);
  }
  var passwordString = "";
  
  for (var i = 0; i < passwordLength; i++){
    passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
  }
  return passwordString;
}

function getPasswordLength() {
  var userChoice = 0 ;
  //The while loop loops through a block of code as long as a specified condition is true.
  while ((userChoice < 8) || (userChoice > 128)) {
    //The parseInt function converts its first argument to a string, parses that string, then returns an integer.
    //The Javascript Window prompt() method is used to display a dialog box with an optional message prompting the user to input some text.  It is often used if the user wants to input a value before entering a page.
    
    userChoice = parseInt(window.prompt("what is the desired length of your password?should be between 8 and 128?"));
    
  }
  return userChoice;
}
//JavaScript Message Boxes:prompt():prompt(message, defaultValue): Display a popup box to take the user's input with the OK and Cancel buttons.
function getChoice(currentOption) {
  var userChoice = "a",
  messagePrompt = "";
  var messagePrompt = ('like to '.concat(currentOption));
  messagePrompt = messagePrompt.concat('characters (y/n)?');
  while (userChoice = "a") {
    userChoice = (window.prompt(messagePrompt));
    userChoice = userChoice.toLowerCase();
    if(userChoice == "y"){
      return true;
    
    }else if (userChoice == "n") {
      return false;
    }
    
  }
  
}

var generateBtn = document.querySelector("#generate");
 
 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);










