class Game < ApplicationRecord
  serialize :cards
  serialize :clues

  def self.create_game
    # current_team = 0 => red team, current_team = 1 => blue team
    # current_phase = 0 => clue giving turn, current_phase = 1 => guessing turn

    g = new(
      current_phase: 0,
      current_team: 0,
      cards: [],
      clues: []
    )
    set_words(g)
    g.save!
    g
  end

  def progress(card_word)
    card = cards.find { _1[:word] == card_word }
    card[:revealed] = true

    if self.current_phase == 1
      self.current_team = (self.current_team + 1)%2 
    end
    self.current_phase = (self.current_phase + 1)%2 

    self.save!
    self
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