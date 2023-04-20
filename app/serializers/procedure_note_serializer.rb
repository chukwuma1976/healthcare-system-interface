class ProcedureNoteSerializer < ActiveModel::Serializer
  attributes :id, :chart_id, :provider_id, :indications, :anesthesia, :description, :complications
end
