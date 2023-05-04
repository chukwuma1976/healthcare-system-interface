class ProcedureNoteSerializer < ActiveModel::Serializer
  attributes :id, :chart_id, :provider_id, :indications, :anesthesia, :description, :complications,
  :created_at, :updated_at, :patient_id, :patient_header, :provider_header

  def patient_id
    self.object.chart.patient.id
  end

  def patient_header
    first = self.object.chart.patient.first_name
    last = self.object.chart.patient.last_name
    dob = self.object.chart.patient.birth_date
    "#{last}, #{first} DOB: #{dob.strftime("%m/%d/%Y")}"
  end

  def provider_header
    provider=self.object.chart.patient.providers.find(self.object.provider_id)
    type=provider.type_of_provider
    provider_full_name = "#{provider.first_name} #{provider.last_name}"
    if type=="Physician"
      "Dr. #{provider_full_name}"
    elsif type=="Physician Assistant"
      "#{provider_full_name} PA"
    elsif type=="Nurse Practitioner"
      "#{provider_full_name} NP"
    end
  end
end
