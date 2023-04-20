class Provider < ApplicationRecord
    validates :first_name, :last_name, :type_of_provider, :department, presence: true

    has_secure_password
    has_many :appointments
    # has_many :patients, through: :appointments
end
