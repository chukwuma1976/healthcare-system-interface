class PatientsController < ApplicationController

    def index
        if params[:provider_id]
            patients = current_provider.patients.order(:last_name)
        else
            patients = Patient.all.order(:last_name)
        end 
        render json: patients, status: :ok
    end

    def show
        patient = Patient.find(params[:id])
        render json: patient, status: :ok
    end

    def create
        patient=Patient.create!(patient_params)
        # patient = current_provider.patients.create!(patient_params)
        patient.create_chart(patient_id: patient.id)
        # new_appointment=patient.appointments.first
        # new_appointment.update(type_of_appointment: "pending type", location: "pending location", date: Time.new)
        render json: patient, status: :created
    end

    def update
        patient = current_provider.patients.find(params[:id])
        patient.update!(patient_params)
        render json: patient, status: :accepted
    end

    def destroy
        patient = current_provider.patients.find(params[:id])
        patient.destroy
        head :no_content
    end

    private

    def patient_params
        params.permit(
            :first_name, 
            :middle_name,
            :last_name, 
            :birth_date, 
            :sex, 
            :image, 
            :address, 
            :phone_number, 
            :email_address, 
            :insurance)
    end

end
