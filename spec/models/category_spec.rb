require 'rails_helper'

RSpec.describe Category, :type => :model do
  subject {
    described_class.new(
        name: "Caricatures", photo: "abc.jpg", text: "test123"
      )
  }

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a name" do
    subject.name = nil
    expect(subject).to_not be_valid
  end
  it "is valid without a photo" do
    subject.photo = nil
    expect(subject).to be_valid
  end
  it "is valid without a text" do
    subject.text = nil
    expect(subject).to be_valid
  end
end
