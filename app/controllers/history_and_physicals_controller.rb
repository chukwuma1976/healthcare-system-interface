class HistoryAndPhysicalsController < ApplicationController

    def index
        histories=current_patient.history_and_physicals
        render json: histories, status: :ok
    end

    def show
        history=current_patient.history_and_physicals.find(params[:id])
        render json: history, status: :ok
    end

    def create
        history=current_patient.history_and_physicals.create!(histories_params)
        render json: history, status: :created
    end

    def update
        history=current_patient.history_and_physicals.find(params[:id])
        history.update!(histories_params)
        render json: history, status: :accepted
    end

    def destroy
        history=current_patient.history_and_physicals.find(params[:id])
        history.destroy
        head :no_content
    end

    private

    def current_patient
        current_provider.patients.find(params[:patient_id]).chart
    end

    def histories_params
        params.permit(:chart_id, :provider_id, :chief_complaint, :past_medical_history, :past_surgical_history, 
            :medications, :allergies, :social_history, :family_history, :review_of_systems, :vital_signs, 
            :history_of_present_illness, :physical_exam, :assessment, :plan,)
    end

end
