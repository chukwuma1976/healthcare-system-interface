class HistoryAndPhysical < ApplicationRecord
    validates :chief_complaint, :past_medical_history, :medications, :allergies, 
    :review_of_systems, :history_of_present_illness, :physical_exam, :assessment, :plan, presence: true
    belongs_to :chart

end
