class ProcedureNoteSerializer < ActiveModel::Serializer
  attributes :id, :chart_id, :provider_id, :indications, :anesthesia, :description, :complications,
  :created_at, :updated_at, :patient_id, :patient_header

  def patient_id
    self.object.chart.patient.id
  end

  def patient_header
    first = self.object.chart.patient.first_name
    last = self.object.chart.patient.last_name
    dob = self.object.chart.patient.birth_date
    "#{last}, #{first} DOB: #{dob.strftime("%m/%d/%Y")}"
  end
end
