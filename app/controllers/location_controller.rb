class LocationController < ApplicationController
  def create
    Location.where(name: params[:name]).first_or_create!(latitude: params[:latitude], longitude: params[:longitude])
    render json: {}, status: :ok
  end
end
