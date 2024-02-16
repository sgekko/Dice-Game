// window.onload = function(e){
//   rollDice();
// }

var dice = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

function rollDice(){
  var index1 = Math.floor(Math.random() * dice.length);
  var index2 = Math.floor(Math.random() * dice.length);

  var img1 = document.querySelector(".img1");
  var img2 = document.querySelector(".img2");

  img1.setAttribute("src", "./images/" + dice[index1]);
  img2.setAttribute("src", "./images/" + dice[index2]);

  if (dice[index1] > dice[index2]) {
    document.querySelector("h3").textContent = "Player 1 Wins!"
  }else if(dice[index1] < dice[index2]) {
    document.querySelector("h3").textContent = "Player 2 Wins!"
  }else {
    document.querySelector("h3").textContent = "It's a tie, roll again."
  }
}
