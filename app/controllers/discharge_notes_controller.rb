class DischargeNotesController < ApplicationController

    def index
        discharge_notes=current_patient.discharge_notes
        render json: discharge_notes, status: :ok
    end

    def show
        discharge_note=current_patient.discharge_notes.find(params[:id])
        render json: discharge_note, status: :ok
    end

    def create
        discharge_note=current_patient.discharge_notes.create!(discharge_note_params)
        render json: discharge_note, status: :created
    end

    def update
        discharge_note=current_patient.discharge_notes.find(params[:id])
        discharge_note.update!(discharge_note_params)
        render json: discharge_note, status: :accepted
    end

    def destroy
        discharge_note=current_patient.discharge_notes.find(params[:id])
        discharge_note.destroy
        head :no_content
    end

    private

    def current_patient
        current_provider.patients.find(params[:patient_id]).chart
    end

    def discharge_note_params
        params.permit(:chart_id, :provider_id, :date_of_admission, :date_of_discharge, :admission_diagnosis, 
            :discharge_diagnosis, :procedures_performed, :hospital_course, :discharge_medications,
            :discharge_instructions, :follow_up)
    end

end
