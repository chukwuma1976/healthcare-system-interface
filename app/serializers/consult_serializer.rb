class ConsultSerializer < ActiveModel::Serializer
  attributes :id, :chart_id, :provider_id, :reason_for_consult, :past_medical_history, :past_surgical_history, 
  :medications, :allergies, :social_history, :family_history, :vital_signs, :history_of_present_illness, :physical_exam, 
  :assessment, :plan, :created_at, :updated_at :patient_id

  def patient_id
    self.object.chart.patient.id
  end
end
