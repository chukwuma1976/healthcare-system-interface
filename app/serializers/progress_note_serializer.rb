class ProgressNoteSerializer < ActiveModel::Serializer
  attributes :id, :chart_id, :provider_id, :subjective, :objective, :assessment, :plan, :created_at, :updated_at, :patient_id

  def patient_id
    self.object.chart.patient.id
  end
end
