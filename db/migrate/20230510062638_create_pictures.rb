class CreatePictures < ActiveRecord::Migration[7.0]
  def change
    create_table :pictures do |t|
      t.integer :patient_id
      t.string :image

      t.timestamps
    end
  end
end
