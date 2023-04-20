class CreateProcedureNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :procedure_notes do |t|
      t.integer :chart_id
      t.integer :provider_id
      t.string :indications
      t.string :anesthesia
      t.text :description
      t.string :complications

      t.timestamps
    end
  end
end
