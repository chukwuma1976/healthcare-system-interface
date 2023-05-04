class ConsultsController < ApplicationController

    def index
        consults=current_patient.consults
        render json: consults, status: :ok
    end

    def show
        consult=current_patient.consults.find(params[:id])
        render json: consult, status: :ok
    end

    def create
        consult=current_patient.consults.create!(consults_params)
        render json: consult, status: :created
    end

    def update
        consult=current_patient.consults.find(params[:id])
        consult.update!(consults_params)
        render json: consult, status: :accepted
    end

    def destroy
        consult=current_patient.consults.find(params[:id])
        consult.destroy
        head :no_content
    end

    private

    def current_patient
        current_provider.patients.find(params[:patient_id]).chart
    end

    def consults_params
        params.permit(:chart_id, :provider_id, :reason_for_consult, :past_medical_history, :past_surgical_history, 
            :medications, :allergies, :social_history, :family_history, :vital_signs, 
            :history_of_present_illness, :physical_exam, :assessment, :plan)
    end

end
