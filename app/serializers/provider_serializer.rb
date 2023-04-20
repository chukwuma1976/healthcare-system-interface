class ProviderSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name, :middle_name, :last_name, :type_of_provider, :department
end
