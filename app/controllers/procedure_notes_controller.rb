class ProcedureNotesController < ApplicationController

    def index
        procedure_notes=current_patient.procedure_notes
        render json: procedure_notes, status: :ok
    end

    def show
        procedure_note=current_patient.procedure_notes.find(params[:id])
        render json: procedure_note, status: :ok
    end

    def create
        procedure_note=current_patient.procedure_notes.create!(procedure_note_params)
        render json: procedure_note, status: :created
    end

    def update
        procedure_note=current_patient.procedure_notes.find(params[:id])
        procedure_note.update!(procedure_note_params)
        render json: procedure_note, status: :accepted
    end

    def destroy
        procedure_note=current_patient.procedure_notes.find(params[:id])
        procedure_note.destroy
        head :no_content
    end

    private

    def current_patient
        current_provider.patients.find(params[:patient_id]).chart
    end

    def procedure_note_params
        params.permit(:chart_id, :provider_id, :indications, :anesthesia, :description, :complications,)
    end

end
