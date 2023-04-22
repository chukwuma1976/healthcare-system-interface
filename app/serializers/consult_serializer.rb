class ConsultSerializer < ActiveModel::Serializer
  attributes :id, :chart_id, :provider_id, :reason_for_consult, :past_medical_history, :past_surgical_history, 
  :medications, :allergies, :social_history, :family_history, :vital_signs, :history_of_present_illness, :physical_exam, 
  :assessment, :plan, :patient_name, :provider_name, :date_of_birth, :age
  
  def patient_name
    patient = Chart.find(id :chart_id).patient
    "#{patient.last_name}, #{patient.first_name} #{patient.middle_name}"
  end

  def provider_name
    provider=Provider.find(id: provider_id)
    "#{provider.first_name} #{provider.last_name}"
  end
  
  def date_of_birth
    Chart.find(id: chart_id).patient.birth_date
  end

  def age
    ((Time.zone.now - date_of_birth.to_time) / 1.year.seconds).floor
  end
end
