require "rails_helper"

feature "category photo" do
  xscenario "admin signs in and creates a new category and uploads a photo" do
    visit root_path
    first(:link, "Sign Up").click

    fill_in 'Name', with: "New Name"
    fill_in 'Description', with: "some new description"
    attach_file "upload", "#{Rails.root}/spec/support/images/linkedin.png"

    click_button "Sign up"
    first(:link, "Profile").click
    expect(page).to have_css("img[src*='linkedin.png']")
  end
end
