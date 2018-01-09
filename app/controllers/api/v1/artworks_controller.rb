class Api::V1::ArtworksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    artworks = Artwork.where(category_id: params[:id])
    render json: { artworks: artworks }
  end

end
