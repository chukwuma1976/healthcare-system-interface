class OperativeReportSerializer < ActiveModel::Serializer
  attributes :id, :chart_id, :provider_id, :date, :indications, :preoperative_diagnosis, :postoperative_diagnosis, :procedure, :assistants, :anesthesiologist, :anesthesia, :fluids, :estimated_blood_loss, :description, :complications,
  :created_at, :updated_at
end
