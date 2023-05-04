class OperativeReportsController < ApplicationController

    def index
        operative_reports=current_patient.operative_reports
        render json: operative_reports, status: :ok
    end

    def show
        operative_report=current_patient.operative_reports.find(params[:id])
        render json: operative_report, status: :ok
    end

    def create
        operative_report=current_patient.operative_reports.create!(operative_report_params)
        render json: operative_report, status: :created
    end

    def update
        operative_report=current_patient.operative_reports.find(params[:id])
        operative_report.update!(operative_report_params)
        render json: operative_report, status: :accepted
    end

    def destroy
        operative_report=current_patient.operative_reports.find(params[:id])
        operative_report.destroy
        head :no_content
    end

    private

    def current_patient
        current_provider.patients.find(params[:patient_id]).chart
    end

    def operative_report_params
        params.permit(:chart_id, :provider_id, :date, :indications, :preoperative_diagnosis, 
            :postoperative_diagnosis, :procedure, :assistants, :anesthesiologist, :anesthesia, :fluids, 
            :estimated_blood_loss, :description, :complications,)
    end

end
