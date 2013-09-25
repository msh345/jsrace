function Player(name) {
  this.name = name;
  this.position = 0
}

Player.prototype.updatePosition = function() {
  this.position += 1
}

function Game(player1,player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.start = nil;
  this.finish = nil;
  this.time = nil; 
}

Game.prototype.render = function() {
  var active = $('#' + player + '_strip .active').removeClass('active')
  if(active.next().length)
    {
    active.next().addClass('active')
    }
  else 
    {
}

Game.prototype.start = function() {
  this.start = new Date()
}

Game.prototype.finish = function() {
  this.finish = new Date()
}
 

$(document).ready(function()
  var player1 = new Player("jim");
  var player2 = new Player("anne");

  var game = new Game(player1, player2);
  
 game.start
  $(document).keyup(function(event){
    if (event.keyCode === 71)
      {
      player1.updatePosition
      game.render

      }
    else if (event.keyCode === 81) 
      {
      player2.updatePosition

      }
  })
