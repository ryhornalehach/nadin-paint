Rails.application.routes.draw do
  devise_for :users
  resources :users, only: [:index, :show, :destroy, :edit, :update]
  resources :categories
  resources :artworks
  root 'static_pages#index'
  resources :gallery, only: [:index, :show], to: 'static_pages#index2'

  namespace :api do
    namespace :v1 do
      resources :categories, only: [:index]
      resources :artworks, only: [:show]
    end
  end

end
