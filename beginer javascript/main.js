var clock = setInterval(clocktiming, 1000);
function clocktiming() {
  var d = new Date();
  var local = d.toLocaleTimeString();
  document.getElementById("show").innerHTML = local;
}

var dateObect = new Date();
var month = dateObect.getUTCMonth() + 1;
var day = dateObect.getUTCDate();
var year = dateObect.getUTCFullYear();
document.write(year + "/" + month + "/" + day);

var D = new Date();
document.write("<br>");
D.setMonth(6);
D.setDate(10);
D.setFullYear(2020, 6, 10);
document.write(D);

const colorbtn = document.querySelector(".colorbtn");
const bodyBac = document.querySelector("body");
const color = ["yellow", "red", "blue", "green"];
colorbtn.addEventListener("click", changColor);
function changColor() {
  let random = Math.floor(Math.random() * color.length);
  bodyBac.style.backgroundColor = color[random];
}

document.write("<br>");
function calculateBmi() {
  var weight = document.bmiForm.weight.value
  var height = document.bmiForm.height.value
  if(weight > 0 && height > 0){	
  var finalBmi = weight/(height/100*height/100)
  document.bmiForm.bmi.value = finalBmi
  if(finalBmi < 18.5){
  document.bmiForm.meaning.value = "That you are too thin."
  }
  if(finalBmi > 18.5 && finalBmi < 25){
  document.bmiForm.meaning.value = "That you are healthy."
  }
  if(finalBmi > 25){
  document.bmiForm.meaning.value = "That you have overweight."
  }
  }
  else{
  alert("Please Fill in everything correctly")
  }
  }