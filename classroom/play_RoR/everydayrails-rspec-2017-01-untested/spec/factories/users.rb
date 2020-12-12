FactoryBot.define do
  factory :user do
    first_name "Katuo"
    last_name "Isono"
    sequence(:email) { |n| "katuo#{n}@example.com"}
    password "dottle-nouveau-pavilion-tights-furze"
  end
end
