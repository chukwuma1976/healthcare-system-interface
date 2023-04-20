class PatientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :middle_name, :last_name, :birth_date, :sex, :image, :address, :phone_number, :email_address, :insurance
end
