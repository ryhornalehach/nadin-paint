require 'rails_helper'

RSpec.describe Artwork, :type => :model do
  let!(:category_1) {Category.create( name: "Caricatures", photo: "abc.jpg", text: "test123" )}

  subject { described_class.new( photo: "abc.jpg", text: "test123", category_id: category_1.id )}

  xit "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  xit "is not valid without a photo" do
    subject.photo = nil
    expect(subject).to_not be_valid
  end
  xit "is valid without a text" do
    subject.text = nil
    expect(subject).to be_valid
  end
end
