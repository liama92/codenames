class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.integer :current_phase
      t.integer :current_team
      t.text :cards
    end
  end
end
