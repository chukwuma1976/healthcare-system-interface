class HistoryAndPhysicalSerializer < ActiveModel::Serializer
  attributes :id, :chart_id, :provider_id, :chief_complaint, :past_medical_history, :past_surgical_history, :medications, :allergies, :social_history, :family_history, :review_of_systems, :vital_signs, :history_of_present_illness, :physical_exam, :assessment, :plan
end
