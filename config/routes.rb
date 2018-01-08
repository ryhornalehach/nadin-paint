Rails.application.routes.draw do
  devise_for :users
  resources :users, only: [:index, :show, :destroy, :edit, :update]
  resources :categories
  resources :artworks
  root 'static_pages#index'

end
