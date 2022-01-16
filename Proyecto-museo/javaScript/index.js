let pictureone = new picture("monalisa", "Dylan","1987", "fue una obra importante");
var pinturita = pictureone.bio(); 
//One Box  
function bigBox(x) {
  document.getElementById("descriptionNum1").innerHTML = pinturita;
  document.getElementById("boxDescriptionNum1").style.margin = "1em";
  document.getElementById("boxDescriptionNum1").style.width = "80%";
  document.getElementById("boxDescriptionNum1").style.height = "auto";
  document.getElementById("boxDescriptionNum1").style.backgroundColor = "red";
}
function normalBox(x) {
  document.getElementById("descriptionNum1").innerHTML = "";
  document.getElementById("boxDescriptionNum1").style.width = "0%";

}
//second box//
function bigBox2(x) {
  document.getElementById("descriptionNum2").innerHTML = "The p element was dropped";
  document.getElementById("boxDescriptionNum2").style.margin = "1em";
  document.getElementById("boxDescriptionNum2").style.width = "80%";
  document.getElementById("boxDescriptionNum2").style.height = "auto";
  document.getElementById("boxDescriptionNum2").style.backgroundColor = "red";
}
function normalBox2(x) {
  document.getElementById("descriptionNum2").innerHTML = "";
  document.getElementById("boxDescriptionNum2").style.width = "0%";

}
//three box
function bigBox3(x) {
  document.getElementById("descriptionNum3").innerHTML = "The p element was dropped";
  document.getElementById("boxDescriptionNum3").style.margin = "1em";
  document.getElementById("boxDescriptionNum3").style.width = "80%";
  document.getElementById("boxDescriptionNum3").style.height = "auto";
  document.getElementById("boxDescriptionNum3").style.backgroundColor = "red";
}
function normalBox3(x) {
  document.getElementById("descriptionNum3").innerHTML = "";
  document.getElementById("boxDescriptionNum3").style.width = "0%";

}
//four box
function bigBox4(x) {
  document.getElementById("descriptionNum4").innerHTML = "The p element was dropped";
  document.getElementById("boxDescriptionNum4").style.margin = "1em";
  document.getElementById("boxDescriptionNum4").style.width = "80%";
  document.getElementById("boxDescriptionNum4").style.height = "auto";
  document.getElementById("boxDescriptionNum4").style.backgroundColor = "red";
}
function normalBox4(x) {
  document.getElementById("descriptionNum4").innerHTML = "";
  document.getElementById("boxDescriptionNum4").style.width = "0%";

}