class Appointment < ApplicationRecord
    validates :type, :location, :date, presence: true
    
    belongs_to :provider
    belongs_to :patient
end
