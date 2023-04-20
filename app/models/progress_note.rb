class ProgressNote < ApplicationRecord
    validates :subjective, :objective, :assessment, :plan, presence: true
    belongs_to :chart
end
