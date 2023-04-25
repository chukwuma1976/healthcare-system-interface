class ProgressNotesController < ApplicationController

    def index
        progress_notes = current_patient.chart.progress_notes
        render json: progress_notes, status: :ok
    end

    def show
        progress_note = current_patient.chart.progress_notes.find(params[:id])
        render json: progress_note, status: :ok
    end

    def create
        progress_note = current_patient.chart.progress_notes.create!(progress_note_params)
        render json: progress_note, status: :created
    end

    def update
        progress_note = current_patient.chart.progress_notes.find(params[:id])
        progress_note.update(progress_note_params)
        render json: progress_note, status: :ok
    end

    def destroy
        progress_note = current_patient.chart.progress_notes.find(params[:id])
        progress_note.destroy
        head :no_content
    end

    private

    def current_patient
        current_provider.patients.find(params[:patient_id])
    end

    def progress_note_params
        params.permit(:chart_id, :provider_id, :subjective, :objective, :assessment, :plan)
    end

end
