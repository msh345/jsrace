require 'json'
 
get '/' do
  erb :index
end

get '/winner' do
  @games = Game.all
  erb :winner
end

get '/game/:id' do
  @game = Game.find(params[:id])
  @player1 = @game.players.first
  @player2 = @game.players.last
  erb :game
end

get '/game/:id/old_game' do
  @game = Game.find(params[:id])
  erb :old_game
end



##################POST######################

post '/game' do
  game = Game.new

  if params.has_blank?
    @error_message = "Please enter both players' names"
  else
    player1 = Player.find_or_create_by_name(params[:player1])
    player2 = Player.find_or_create_by_name(params[:player2])
  end

  game.players << [player1,player2] #game.players += [@player1,@player2]

  if game.save
    redirect to "/game/#{game.id}"
  else
    redirect back
  end
end

post '/winner' do
  if request.xhr?
    # content_type :json
    game = Game.find(params[:game_id])
    game.update_attributes(winner: params[:winner], time: params[:time])
    # {status: 200}.to_json
  end
end
