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

 

  if(isuppercase){
    finalPassword += uppercase
  }
  if(islowercase){
    finalPassword += lowercase
  }
  if(num){
    finalPassword += numbers
    
  }
  if(spe){
    finalPassword += special
  }

  return finalPassword 
 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










