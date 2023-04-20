class Patient < ApplicationRecord
    validates :first_name, :last_name, :birth_date, :sex, :address, :phone_number, :email_address, :insurance, presence: true
    validates :phone_number, numericality: true

    has_many :appointments
    has_many :providers, through: :appointments
    has_one :chart

end
