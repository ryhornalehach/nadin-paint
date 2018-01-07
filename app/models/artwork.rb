class Artwork < ApplicationRecord
  mount_uploader :photo, ArtworksUploader # mounting the file uploader

  validates :photo, presence: true
  belongs_to :category
end
