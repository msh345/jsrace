class Game < ActiveRecord::Base
	
	has_many :rounds
	has_many :players, :through :rounds

	validate :exactly_two_players


	def exactly_two_players
		unless self.users.length != 2
			errors.add(:players, "This game has a two player requirement.") 
		end
	end

end


# errors.add(:base, "Error message")