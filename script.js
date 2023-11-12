"use strict;";
let highestScore = 0;
let yourScore = 20;
const actualNumber = 5;
document.getElementById("your-score").innerHTML = yourScore;
document.getElementById("highest-score").innerHTML = highestScore;
function givenNumber() {
  num = document.getElementById("input-number").value;
  if (num == actualNumber) {
    document.getElementById("my-body").className = "success";
    if (yourScore > highestScore) {
      highestScore = yourScore;
      document.getElementById("highest-score").innerHTML = highestScore;
    }
  }
  if (num < actualNumber) {
    yourScore -= 1;
  }
  if (num > actualNumber) {
    yourScore -= 1;
  }

  document.getElementById("your-score").innerHTML = yourScore;
}
function playAgain(target) {
  document.getElementById("input-number").value = "";
  yourScore = 20;
  document.getElementById("your-score").innerHTML = yourScore;
}