class GameController < ApplicationController
  def index
    @game = Game.create_game
  end
end
