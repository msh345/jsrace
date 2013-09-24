function updatePlayerPosition(player)
{
  var active = $('#' + player + '_strip .active').removeClass('active')
  
  if(active.next().length)
  {
    active.next().addClass('active')
  }
  else 
  {
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

$(document).ready(function()
{
  var timeinSeconds = newDate().getTime();

  $(document).on('keypress',function(e){

}