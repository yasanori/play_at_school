3.times do |n|
  restaurant = Restaurant.new(
    name: "サイゼリア #{n}号店",
    fee: 100,
    time_required: 10
  )

  12.times do |m|
    restaurant.foods.build(
      name: "ミラノ風ドリア ver.#{m}",
      price: 298,
      description: "ミラノ風ドリア ver.#{m}の説明です。"
    )
  end

  restaurant.save!
end
