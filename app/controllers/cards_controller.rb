require 'faker'

class CardsController < ApplicationController
  def new
    Card.delete_all
  end

  def create
    params[:game_type].to_i.times do
      image_url = Faker::Avatar.image
      2.times { Card.create(image_url: image_url) }
    end

    redirect_to cards_path
  end
end
