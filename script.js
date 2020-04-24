
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var Upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var Lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var Num = [1,2,3,4,5,6,7,8,9];
var Char = ["!","@","#","$","%","^","&","*","?"];

function generatePassword(){
 var howMany = parseInt(prompt("how many charcters for your password? Has to be between 8-128"));
 var chooseUpper = confirm("Do you want Uppercase?");
 var chooseLower = confirm("Do you want Lowercase?");
 var chooseNum = confirm("Do you want numbers?");
 var chooseChar = confirm("Do you want characters?");

// ALL PROMPTS ARE TRUE 
 if (Upper === "true" && Lower === "true" && Num === "true" && Char === "true"){
  var pick = Num.concat(Upper,Lower,char)
}

//  THREE PROMPTS WERE CHOSEN 
//
 else if (Upper && Lower && Num) {
   var pick = Num.concat(Upper,Lower);
 }
 else if (Upper && Lower && Char) {
   var pick = Char.concat(Upper,Lower);
 }
 else if (Lower && Num && Char) {
   var pick = Char.concat(Lower,Num)
 }
 else if (Upper && Num && Char) {
   var pick = Char.concat(Upper,Num)
 }
// 
//  TWO ARE CHOSEN
 else if (Upper && Lower) {
   var pick = Upper.concat(Lower);
 }
 else if (Upper && Num) {
   var pick = Num.concat(Upper);
 }
 else if (Num && Char) {
   var pick = Num.concat(Char);
 }
 else if (Upper && Char) {
   var pick = Char.concat(Upper);
 }
 else if (Char && Lower) {
   var pick = Char.concat(Lower);
 }
 else if (Num && Lower) {
   var pick = Num.concat(Lower);
 }

// ONE IS CHOSEN

 else if (Upper){
   var pick = Upper
 }
 else if (Lower){
   var pick = Lower
 }
 else if (Num){
   var pick = Num
 }
 else if (Char){
   var pick = Char
 }




//  var password = [];
//  for (var i = 0; i < howMany; i++) {
    // var pass = pick[Math.floor(Math.random() * picks.length)];
    // password.push(pass);
// }
