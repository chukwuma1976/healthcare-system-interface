class CreateHistoryAndPhysicals < ActiveRecord::Migration[7.0]
  def change
    create_table :history_and_physicals do |t|
      t.integer :chart_id
      t.integer :provider_id
      t.string :chief_complaint
      t.string :past_medical_history
      t.string :past_surgical_history
      t.string :medications
      t.string :allergies
      t.string :social_history
      t.string :family_history
      t.string :review_of_systems
      t.string :vital_signs
      t.text :history_of_present_illness
      t.text :physical_exam
      t.text :assessment
      t.text :plan

      t.timestamps
    end
  end
end
