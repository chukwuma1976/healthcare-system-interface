class ProgressNoteSerializer < ActiveModel::Serializer
  attributes :id, :chart_id, :provider_id, :subjective, :objective, :assessment, :plan
end
