class ArtworksController < ApplicationController
  before_action :authorize_user

  def show
    @artwork = Artwork.find(params[:id])
  end

  def index
    @artworks = Artwork.all
  end

  def edit
    @artwork = Artwork.find(params[:id])
  end

  def update
    @artwork = Artwork.find(params[:id])
    if @artwork.update_attributes(edit_artwork_params)
      redirect_to artwork_path(@artwork), notice: "Artwork Info Updated"
    else
      redirect_to artwork_path(@artwork), notice: "Failed to Update!"
    end
  end

  def new
    @artwork = Artwork.new
  end

  def create
    @new_artwork = Artwork.new(edit_artwork_params)
    if @new_artwork.save
      redirect_to root_path, notice: "Artwork was successfully submitted."
    else
      redirect_to root_path, notice: "Artwork not submitted due to an error in the submitted form."
    end
  end

  def destroy
    @artwork = Artwork.find(params[:id]).destroy
    redirect_to artworks_path, notice: "Artwork Deleted"
  end

  private

  def authorize_user
    if !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

  def edit_artwork_params
    params.require(:artwork).permit(:photo, :text, :category_id)
  end
end
