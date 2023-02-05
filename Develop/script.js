// Assignment Code

var generateBtn = document.querySelector("#generate");

function generatePassword()
{
  
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercase ="abcdefghijklmnopqrstuvwxyz"
  var numbers = "0123456789"
  var special = "!@#$%^&*"
   
  var finalPassword = ""
 

  var passwordLenght = prompt("what is the desired lenght of your password?should between 8 and 128?")  
  

  if(passwordLenght <8 || passwordLenght>128){
    alert("that lenghtis not valid,please choose a number  between 8 and 128. try again")
  }
  

  var isuppercase = confirm("Do you want uppercase characters?")
  var islowercase = confirm("Do you want lowercase characters?")
  var num = confirm("Do you want numbers characters ?")
  var spe = confirm("Do you want special characters?")
  
 

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










