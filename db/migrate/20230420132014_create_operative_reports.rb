class CreateOperativeReports < ActiveRecord::Migration[7.0]
  def change
    create_table :operative_reports do |t|
      t.integer :chart_id
      t.integer :provider_id
      t.datetime :date
      t.string :indications
      t.string :preoperative_diagnosis
      t.string :postoperative_diagnosis
      t.string :procedure
      t.string :assistants
      t.string :anesthesiologist
      t.string :anesthesia
      t.string :fluids
      t.string :estimated_blood_loss
      t.text :description
      t.string :complications

      t.timestamps
    end
  end
end
