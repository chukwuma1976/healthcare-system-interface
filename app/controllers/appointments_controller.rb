class AppointmentsController < ApplicationController

    def index
        appointments = current_provider.appointments.order(:date)
        render json: appointments, status: :ok
    end

    def show
        appointment =current_provider.appointments.find(params[:id])
        render json: appointment, status: :ok
    end

    def create
        appointment =current_provider.appointments.create!(appointment_params)
        render json: appointment, status: :created
    end

    def update
        appointment =current_provider.appointments.find(params[:id])
        appointment.update!(appointment_params)
        render json: appointment, status: :accepted
    end

    def destroy
        appointment = current_provider.appointments.find(params[:id])
        appointment.destroy
        head :no_content
    end

    private

    def appointment_params
        params.permit(:provider_id, :patient_id, :type_of_appointment, :location, :date)
    end

end
