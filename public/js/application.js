// function updatePlayerPosition(player,startTime)
//   {
//   var active = $('#' + player + ' .active').removeClass('active')
//   if(active.next().length)
//     {
//     active.next().addClass('active')
//     }
//   else 
//     {
//     var finishTime = new Date()
//     alert(player + " wins!")
//     var time = finishTime - startTime
//     var gameId = $('table').attr('id')
//     var data = {winner: player, time: time, game_id: gameId}
//       $.post('/winner',data, function(response) {
//         $('.container').html(response);
//       });
//     };
//   }

// $(document).ready(function()
//   {
//   var startTime
//   var player1 = $('table').find('tr:nth-child(1)').attr('id')
//   var player2 = $('table').find('tr:nth-child(2)').attr('id')
//   $(document).keyup(function(event) 
//     {
//     if (!startTime) startTime = new Date();
//     if (event.keyCode === 71)
//       {
//       updatePlayerPosition(player1,startTime)
//       }
//     else if (event.keyCode === 81) 
//       {
//       updatePlayerPosition(player2,startTime)
//       }
//     });
//   });


function Player(name, key) {
  this.name = name;
  this.position = 1;
  this.key = key
}

Player.prototype.updatePosition = function() {
  this.position += 1;
}

function Game(player1,player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.start = null;
  this.finish = null;
  this.time = null;
  this.winner = null;
  this.gameId = null;
  this.data = null;
}

Game.prototype.elapsedTime = function(){
  this.time = this.finish - this.start
}

Game.prototype.checkWinner = function(){
  if (this.player1.position == 11)
  {
  this.winner = this.player1.name
  return this.finish = new Date()
  }
  else if (this.player2.position == 11)
  {
  this.winner = this.player2.name
  return this.finish = new Date()
  }
}

Game.prototype.render = function() {
  $('.active').removeClass('active');
  $('#' + this.player1.name + ' td:nth-child(' + this.player1.position + ')').addClass('active');
  $('#' + this.player2.name + ' td:nth-child(' + this.player2.position + ')').addClass('active');
}

Game.prototype.checkKey = function(event) {
  if(event.keyCode === this.player1.key) {
    this.player1.updatePosition()
  }
  else if (event.keyCode === this.player2.key) {
    this.player2.updatePosition()
  }
}

Game.prototype.getGameId = function() {
  this.gameId = $('table').attr('id')
}

Game.prototype.packageData = function() {
  this.data = {winner: this.winner, time: this.time, game_id: this.gameId}
}

Game.prototype.postAndReroute = function() {
  $.post('/winner',this.data, function(response) {
    $('.container').html(response);
  });
}

Game.prototype.play = function(event) {
  this.checkKey(event);
  this.render()
  if (this.checkWinner()) {  
    this.elapsedTime()
    this.getGameId()
    this.packageData()
    this.postAndReroute()
  }
}

$(document).ready(function()
  {
  player1_name = $('table').find('tr:nth-child(1)').attr('id')
  player2_name = $('table').find('tr:nth-child(2)').attr('id')
  player1 = new Player(player1_name, 81);
  player2 = new Player(player2_name, 71);
  game = new Game(player1, player2);
  $(document).one('keyup', function(){ game.start = new Date() });
  $(document).keyup(function(event) {
    game.play(event);
  })
});
