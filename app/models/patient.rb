class Patient < ApplicationRecord
    validates :first_name, :last_name, :birth_date, :sex, :address, :phone_number, :email_address, :insurance, presence: true

    has_many :appointments, dependent: :destroy
    has_many :providers, through: :appointments
    has_one :chart, dependent: :destroy

end
