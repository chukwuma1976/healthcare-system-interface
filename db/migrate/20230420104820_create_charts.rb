class CreateCharts < ActiveRecord::Migration[7.0]
  def change
    create_table :charts do |t|
      t.string :patient_id

      t.timestamps
    end
  end
end
