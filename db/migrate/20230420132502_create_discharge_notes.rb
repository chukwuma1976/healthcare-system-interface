class CreateDischargeNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :discharge_notes do |t|
      t.integer :chart_id
      t.integer :provider_id
      t.datetime :date_of_admission
      t.datetime :date_of_discharge
      t.string :admission_diagnosis
      t.string :discharge_diagnosis
      t.string :procedures_performed
      t.text :hospital_course
      t.string :discharge_medications
      t.string :discharge_instructions
      t.string :follow_up

      t.timestamps
    end
  end
end
