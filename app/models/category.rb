class Category < ApplicationRecord
  mount_uploader :photo, CategoriesUploader # mounting the file uploader

  validates :name, presence: true
  has_many :artworks
end
