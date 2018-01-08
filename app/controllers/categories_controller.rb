class CategoriesController < ApplicationController
  before_action :authorize_user

  def show
    @category = Category.find(params[:id])
  end

  def index
    @categories = Category.all
  end

  def edit
    @category = Category.find(params[:id])
  end

  def update
    @category = Category.find(params[:id])
    if @category.update_attributes(edit_category_params)
      redirect_to category_path(@category), notice: "Category Info Updated"
    else
      redirect_to category_path(@category), notice: "Failed to Update!"
    end
  end

  def new
    @category = Category.new
  end

  def create
    @new_category = Category.new(edit_category_params)
    if @new_category.save
      redirect_to root_path, notice: "Category was successfully submitted."
    else
      redirect_to root_path, notice: "Category not submitted due to an error in the submitted form."
    end
  end

  def destroy
    @category = Category.find(params[:id]).destroy
    redirect_to categories_path, notice: "Category Deleted"
  end

  private

  def authorize_user
    if !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

  def edit_category_params
    params.require(:category).permit(:name, :photo, :text)
  end
end
