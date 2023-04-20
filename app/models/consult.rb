class Consult < ApplicationRecord
    validates :reason_for_consult, :past_medical_history, :medications, :allergies, 
    :history_of_present_illness, :physical_exam, :assessment, :plan, presence: true
    belongs_to :chart
end
