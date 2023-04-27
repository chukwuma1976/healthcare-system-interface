class ChangeColumnNameInAppointments < ActiveRecord::Migration[7.0]
  def change
    rename_column :appointments, :type, :type_of_appointment
  end
end
