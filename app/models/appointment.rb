class Appointment < ApplicationRecord
    validates :type_of_appointment, :location, :date, presence: true
    
    belongs_to :provider
    belongs_to :patient
end
