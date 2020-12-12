FactoryBot.define do
  factory :note do
    message "Sample note"
    association :project
    user {project.owner}
  end
end
