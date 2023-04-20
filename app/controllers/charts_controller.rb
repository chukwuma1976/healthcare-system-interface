class ChartsController < ApplicationController

    def index
        chart = Patient.find(params[:patient_id]).chart
        render json: chart, status: :ok
    end

end
