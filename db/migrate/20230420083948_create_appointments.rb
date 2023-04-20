class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.integer :provider_id
      t.integer :patient_id
      t.string :type
      t.string :location
      t.datetime :date

      t.timestamps
    end
  end
end
