require 'rails_helper'

RSpec.feature "Tasks", type: :feature do
  scenario "user toggles a task", js: true do
    user = FactoryBot.create(:user)
    project = FactoryBot.create(:project,
    name: "Rspec tutorial",
    owner: user)
    task = project.tasks.create!(name: "Finish RSpec tutotial")

    visit root_path
    click_link "Sign in"
    fill_in "Email", with: user.email
    fill_in "Password", with: user.password
    click_button "Log in"

    click_link "Rspec tutorial"
    check "Finish RSpec tutotial"

    expect(page).to have_css "label#task_#{task.id}.completed"
    expect(task.reload).to be_completed

    uncheck "Finish RSpec tutotial"

    expect(page).to_not have_css "label#task_#{task.id}.completed"
    expect(task.reload).to_not be_completed
  end
end
