class Round < ActiveRecord::Base
  belongs_to :game
  belongs_to :player

  # validate :must_have_two_players

  # def must_have_two_players
  #   players = []
  #   Round.all.each do |round|
  #     players << round.game_id
  #   end

  #   if players.count != 2
  #     errors.add(:game_id, "must have two players")
  #   end
  # end

end
