class OperativeReport < ApplicationRecord
    validates :indications, :preoperative_diagnosis, :postoperative_diagnosis, :procedure, :description, :complications, presence: true
    belongs_to :chart
end
