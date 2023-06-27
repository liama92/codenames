class Game < ApplicationRecord
  serialize :cards

  def self.create_game
    g = new(
      current_phase: 1,
      current_team: 1,
      cards: []
    )
    set_words(g)
    g.save!
  end

  private

  def self.set_words(g)
    # 9 red 8 blue, rest are nutral and 1 black 
    words = File.open('app/models/words.txt').read.split(/\n/).sample(25)
    red, blue = 9, 8

    words.each_with_index do |word, i|
      colour = red > 0 ? "red" : blue > 0 ? "blue" : "grey"

      if colour == "red"
        red -= 1
      elsif colour == "blue"
        blue -= 1
      end

      if i == 24
        colour = "black"
      end
      g.cards << {
        revealed: false,
        word: word,
        colour: colour 
      }
    end

    g.cards = g.cards.shuffle
  end
end

=begin
 revealed, colour, word 
=end