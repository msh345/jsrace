class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :winner
      t.integer :time
      t.integer :player1_position
      t.integer :player2_position
      t.timestamps
    end
  end
end
