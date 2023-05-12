class ProviderSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :middle_name, :last_name, :type_of_provider, :department, :patient_list, :appointment_list
  def patient_list
    patients=self.object.patients
    patients.map do |patient|
      "#{patient.last_name}, #{patient.first_name} DOB: #{patient.birth_date.strftime("%m/%d/%Y")}"      
    end
  end
  def appointment_list
    appointments=self.object.appointments
    appointments.map do |appointment|
      patient=Patient.find(appointment.patient_id)
      "#{patient.last_name}, #{patient.first_name} || Type of appointment: #{appointment.type_of_appointment} || Location: #{appointment.location } || Date: #{appointment.date.strftime("%m/%d/%Y")}" 
    end
  end
  
  has_many :patients
  has_many :appointments
end
