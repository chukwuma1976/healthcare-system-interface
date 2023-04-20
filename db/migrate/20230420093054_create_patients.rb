class CreatePatients < ActiveRecord::Migration[7.0]
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.datetime :birth_date
      t.string :sex
      t.string :image
      t.string :address
      t.string :phone_number
      t.string :email_address
      t.string :insurance

      t.timestamps
    end
  end
end
