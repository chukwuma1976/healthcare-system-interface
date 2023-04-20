class CreateProviders < ActiveRecord::Migration[7.0]
  def change
    create_table :providers do |t|
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :type_of_provider
      t.string :department

      t.timestamps
    end
  end
end
