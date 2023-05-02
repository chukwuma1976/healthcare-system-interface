class ProviderSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name, :middle_name, :last_name, :type_of_provider, :department, :patient_list
  def patient_list
    patients=self.object.patients
    patients.map do |patient|
      "#{patient.last_name}, #{patient.first_name} DOB: #{patient.birth_date.strftime("%m/%d/%Y")}"      
    end
  end
end
