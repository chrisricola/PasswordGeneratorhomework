var Upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var Lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var Num = [1,2,3,4,5,6,7,8,9];
var Char = ["!","@","#","$","%","^","&","*","?"];
var password = [];

function generatePassword(){
 var howMany = prompt("how many charcters for your password? Has to be between 8-128");
 
 if (howMany<8 || howMany>128) {
    return alert("Please Pick 8 thru 128")
 }
 var chooseUpper = confirm("Do you want Uppercase?");
 var chooseLower = confirm("Do you want Lowercase?");
 var chooseNum = confirm("Do you want numbers?");
 var chooseChar = confirm("Do you want characters?");
// // ALL PROMPTS ARE TRUE 
 if (chooseUpper === "true" && chooseLower === "true" && chooseNum === "true" && chooseChar === "true"){
  var pick = Num.concat(Upper,Lower,char)
}

// //  THREE PROMPTS WERE CHOSEN 
// //
 else if (chooseUpper && chooseLower && chooseNum) {
   var pick = Num.concat(Upper,Lower);
 }
 else if (chooseUpper && chooseLower && chooseChar) {
   var pick = Char.concat(Upper,Lower);
 }
 else if (chooseLower && chooseNum && chooseChar) {
   var pick = Char.concat(Lower,Num)
 }
 else if (chooseUpper && chooseNum && chooseChar) {
   var pick = Char.concat(Upper,Num)
 }
// //
// //  TWO ARE CHOSEN


// // ONE IS CHOSEN

 else if (chooseUpper){
  var pick = Upper
  var rand = pick[Math.floor(Math.random() * pick.lenght)]
  password.push(rand)
 }
 else if (chooseLower){
   var pick = Lower
 }
 else if (chooseNum){
   var pick = Num
 }
 else if (chooseChar){
   var pick = Char
 }

console.log(pick)
 
 for (var i = 0; i < howMany; i++) {
    var pass = pick[Math.floor(Math.random() * pick.length)];
    password.push(pass);
 }
 return password
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
