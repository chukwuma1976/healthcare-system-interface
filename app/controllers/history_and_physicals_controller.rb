class HistoryAndPhysicalsController < ApplicationController

    def index
        histories=patient_history
        render json: histories, status: :ok
    end

    def show
        history=patient_history.find(params[:id])
        render json: history, status: :ok
    end

    def create
        history=patient_history.create!(histories_params)
        render json: history, status: :created
    end

    def update
        history=patient_history.find(params[:id])
        if history.provider_id == session[:provider_id]
            history.update!(histories_params)
            render json: history, status: :accepted
        else
            render json: {error: 'Not authorized'}, status: :unauthorized
        end
    end

    def destroy
        history=patient_history.find(params[:id])
        if history.provider_id == session[:provider_id]
            history.destroy
            head: no_content
        else
            render json: {error: 'Not authorized'}, status: :unauthorized
        end
    end

    private

    def patient_history
       Chart.find(params[:patient_id]).history_and_physicals 
    end

    def histories_params
        params.permit(:chart_id, :provider_id, :chief_complaint, :past_medical_history, :past_surgical_history, 
            :medications, :allergies, :social_history, :family_history, :review_of_systems, :vital_signs, 
            :history_of_present_illness, :physical_exam, :assessment, :plan,)
    end

end
