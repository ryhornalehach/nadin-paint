class Api::V1::CategoriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
      categories = Category.all
      render json: { categories: categories }
  end

end
