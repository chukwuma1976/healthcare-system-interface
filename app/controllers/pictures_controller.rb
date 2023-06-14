class PicturesController < ApplicationController

    def index
        picture = Patient.find(params[:patient_id]).picture
        render json: picture, status: :ok
    end

    def create
        picture = Patient.find(params[:patient_id]).create_picture!(picture_params)
        render json: picture, status: :created
    end

    def update
        picture =  Patient.find(params[:patient_id]).picture
        picture.update!(picture_params)
        render json: picture, status: :accepted
    end

    private

    def picture_params
        params.permit(:patient_id, :image)
    end

end
