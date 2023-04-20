class HistoryAndPhysicalsController < ApplicationController

    def index
        histories=patient_chart.history_and_physicals
        render json: histories, status: :ok
    end

    def show
        history=patient_chart.history_and_physicals.find(params[:id])
        render json: history, status: :ok
    end

    def create
        history=patient_chart.history_and_physicals.create!(histories_params)
        render json: history, status: :created
    end

    def update
        history=patient_chart.history_and_physicals.find(params[:id])
        if history.provider_id == session[:provider_id]
            render json: history, status: :accepted
        else
            render json: {error: 'Not authorized'}, status: :unauthorized
        end
    end

    def destroy
        history=patient_chart.history_and_physicals.find(params[:id])
        if history.provider_id == session[:provider_id]
            history.destroy
            head: no_content
        else
            render json: {error: 'Not authorized'}, status: :unauthorized
        end
    end

    private

    def patient_chart
       Chart.find(params[:patient_id]) 
    end

end
