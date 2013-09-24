class Player < ActiveRecord::Base
  validates :name, uniqueness: true
  validates_presence_of :name
  has_many :rounds
  has_many :games, through: :rounds

end
