class GameController < ApplicationController
  def index
    @game = Game.create_game
  end

  def show
    @game = Game.find_by(id: params[:id])
  end

  def progress_game
    @game = Game.find_by(id: params["game_id"])
    card_word = params["card_word"]
    render json: @game.progress(card_word).to_json
  end
end
