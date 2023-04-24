class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :provider_id, :patient_id, :type_of_appointment, :location, :date
  belongs_to :provider
  belongs_to :patient
end
