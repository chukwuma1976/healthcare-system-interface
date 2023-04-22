class Chart < ApplicationRecord
    belongs_to :patient
    has_many :history_and_physicals
    has_many :progress_notes
    has_many :operative_reports
    has_many :procedure_notes
    has_many :discharge_notes
    has_many :consults
end
