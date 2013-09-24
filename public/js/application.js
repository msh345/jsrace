function updatePlayerPosition(player,startTime)
  {
  var active = $('#' + player + '_strip .active').removeClass('active')
  if(active.next().length)
    {
    active.next().addClass('active')
    }
  else 
    {
    alert(player + " wins!")
    var finishTime = new Date()
    var time = finishTime - startTime
    var gameId = $('table').attr('id')
    var data = {winner: player, time: time, game_id: gameId}
      $.post('/winner',data, function() {
        window.location.replace("/winner");
      });
    };
  }
 
 
$(document).ready(function()
  {
  $(document).keyup(function(event) 
    {
    var startTime = new Date()
    // why does starTime not rewrite for every keyup event?
    if (event.keyCode === 71)
      {
      updatePlayerPosition('player1',startTime)
      }
    else if (event.keyCode === 81) 
      {
      updatePlayerPosition('player2',startTime)
      }
    });
  });


