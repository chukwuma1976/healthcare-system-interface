class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :provider_id, :patient_id, :type, :location, :date
  belongs_to :provider
  belongs_to :patient
end
