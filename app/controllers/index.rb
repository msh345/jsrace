# ===================== Get ========================

get '/' do
  # Look in app/views/index.erb
  erb :index
end


# rgrgejgre

get '/winner' do
  erb :winner
end




# ==================== POST ==========================

post '/game' do
  @player1 = Player.find_or_create_by_name(params[:player1])
  @player2 = Player.find_or_create_by_name(params[:player2])
  erb :game
end

post '/winner' do
  # @winner = Game.create(winner: , time: )
  @time = 
  @games = Game.all
  redirect to '/winner'
end

#time.now()