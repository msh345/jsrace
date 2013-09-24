function updatePlayerPosition(player)
  {
  // var start = now
  var active = $('#' + player + '_strip .active').removeClass('active')
  if(active.next().length)
    {
    active.next().addClass('active')
    }
  else 
    {
    var a = new Date(0);
    var b = new Date(0);
    a.setHours(23);
    b.setHours(1);
    b.setMinutes(30);
    c = a - b;

    // var finish = now
    // var time = finish - start
    // {winner: 'player1', time: time}
    alert(player + " wins!")
    $.post('/winner',time)
    };
  }
 
 
$(document).ready(function()
  {
  $(document).keyup(function(event) 
    {
    if (event.keyCode === 71)
      {
      updatePlayerPosition('player1')
      }
    else if (event.keyCode === 81) 
      {
      updatePlayerPosition('player2')
      }
    });
  });
