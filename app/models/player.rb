class Player < ActiveRecord::Base
	validates :name, uniqueness: true
	
	has_many :rounds
	has_many :games, through: :rounds

end
