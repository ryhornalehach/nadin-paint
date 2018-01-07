class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  mount_uploader :profile_photo, ProfilePhotoUploader # mounting the profile photo uploader
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

   validates :first_name, presence: true, length: { minimum: 2 }
   validates :last_name, presence: true, length: { minimum: 2 }
   validates :address, presence: true, length: { minimum: 2 }
   validates :city, presence: true, length: { minimum: 2 }
   validates :phone, presence: true, length: { minimum: 10 }
   validates :email, presence: true, length: { minimum: 2 }
end
