class ProcedureNote < ApplicationRecord
    validates :indications, :description, presence: true
    belongs_to :chart
end
