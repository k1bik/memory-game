Rails.application.routes.draw do
  root "cards#new"

  resources :cards, only: %i[index create]
end
