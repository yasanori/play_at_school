require 'rails_helper'

RSpec.describe GeocodeUserJob, type: :job do
  # user の geocode を呼ぶこと
  it "calls geocode on the user" do
    user = instance_double("User")
    expect(user).to receive(:geocode)
    GeocodeUserJob.perform_now(user)
  end
end
