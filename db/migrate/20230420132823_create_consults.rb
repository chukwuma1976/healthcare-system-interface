class CreateConsults < ActiveRecord::Migration[7.0]
  def change
    create_table :consults do |t|
      t.integer :chart_id
      t.integer :provider_id
      t.string :reason_for_consult
      t.string :past_medical_history
      t.string :past_surgical_history
      t.string :medications
      t.string :allergies
      t.string :social_history
      t.string :family_history
      t.string :vital_signs
      t.text :history_of_present_illness
      t.text :physical_exam
      t.text :assessment
      t.text :plan

      t.timestamps
    end
  end
end
