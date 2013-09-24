function updatePlayerPosition(player,startTime)
  {
  var active = $('#' + player + '_strip .active').removeClass('active')
  if(active.next().length)
    {
    active.next().addClass('active')
    }
  else 
    {
    var finishTime = new Date()
    alert(player + " wins!")
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
  var startTime
  $(document).keyup(function(event) 
    {
    if (!startTime) startTime = new Date();
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


