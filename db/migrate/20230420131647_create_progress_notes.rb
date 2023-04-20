class CreateProgressNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :progress_notes do |t|
      t.integer :chart_id
      t.integer :provider_id
      t.text :subjective
      t.text :objective
      t.text :assessment
      t.text :plan

      t.timestamps
    end
  end
end
