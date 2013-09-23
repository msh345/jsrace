get '/' do
  # Look in app/views/index.erb
  erb :index
end



get '/winner' do
  erb :winner
end




##################POST######################

post '/game' do
  @player1 = Player.find_or_create_by_name(params[:player1])
  @player2 = Player.find_or_create_by_name(params[:player2])
  erb :game
end

post '/winner' do
  # Game.create(winner: , time: )
  @games = Game.all
  redirect to '/winner'
end
