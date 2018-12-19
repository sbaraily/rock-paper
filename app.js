
var choices = ['Rock', 'Paper','Scissors'];
var systemChooses = choices[Math.floor(Math.random()*choices.length)];

var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")

btn1.addEventListener("click", choiceOne)
btn2.addEventListener("click", choiceTwo)
btn3.addEventListener("click", choiceThree)


function choiceOne(){
  return choices[0];
}
function choiceTwo(){
  return choices[1];
}
function choiceThree(){
  return choices[2];
}

