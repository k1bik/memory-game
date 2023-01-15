module CardsHelper
  def grid_class(cards_size)
    case cards_size
    when 8
      "grid-cols-4"
    when 10
      "grid-cols-5"
    when 12
      "grid-cols-6"
    when 16
      "grid-cols-8"
    end
  end
end
