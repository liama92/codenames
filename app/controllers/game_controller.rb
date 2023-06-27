class GameController < ApplicationController
  def index
    @game = Game.create_game
  end

  def progress_game
    @game = Game.find(params[:game_id])
    card_word = params[:card_word]
    @game.progress(card_word)
  end
end
