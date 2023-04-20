class DischargeNote < ApplicationRecord
    validates :date_of_admission, :date_of_discharge, :discharge_diagnosis, :hospital_course, presence: true
    belongs_to :chart
end
