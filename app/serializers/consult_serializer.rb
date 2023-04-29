class ConsultSerializer < ActiveModel::Serializer
  attributes :id, :chart_id, :provider_id, :reason_for_consult, :past_medical_history, :past_surgical_history, 
  :medications, :allergies, :social_history, :family_history, :vital_signs, :history_of_present_illness, :physical_exam, 
  :assessment, :plan, :created_at, :updated_at :patient_id, :patient_header

  def patient_id
    self.object.chart.patient.id
  end

  def patient_header
    first = self.object.chart.patient.first_name
    last = self.object.chart.patient.last_name
    dob = self.object.chart.patient.birth_date
    "#{last}, #{first} #{dob.strftime("%Y-%m-%d %H:%M:%S")}"
  end
end
