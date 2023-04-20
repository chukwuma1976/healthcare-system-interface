class DischargeNoteSerializer < ActiveModel::Serializer
  attributes :id, :chart_id, :provider_id, :date_of_admission, :date_of_discharge, :admission_diagnosis, :discharge_diagnosis, :procedures_performed, :hospital_course, :discharge_medications, :discharge_instructions, :follow_up
end
