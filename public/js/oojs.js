function Player(name) {
  this.name = name;
}

function Game(player1,player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.render = function() {

}

Game.prototype.start = function() {

}

Game.prototype.finish = function() {
  
}


$(document).ready(function()
  var player1 = new Player("jim");
  var player2 = new Player("anne");

  var game = new Game(player1, player2);
