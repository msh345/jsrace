get '/' do
  erb :index
end


get '/winner' do
  erb :winner
end




##################POST######################

post '/game' do
  game = Game.new
  
  @player1 = Player.find_or_create_by_name(params[:player1])
  @player2 = Player.find_or_create_by_name(params[:player2])
  game.players << [@player1,@player2] #game.players += [@player1,@player2]

  game.save ? erb(:game) : erb(:index)
end

post '/winner' do
  # Game.create(winner: , time: )
  @games = Game.all
  redirect to '/winner'
end
