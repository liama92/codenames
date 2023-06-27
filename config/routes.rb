Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get "game" => "game#index"
  get "game/:id" => "game#show"

  resources :game, only: [:show, :index] do
    member do
      get "progress_game"
      get "update_game"
    end
    
  end
end
