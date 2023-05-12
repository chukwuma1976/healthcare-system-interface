class PatientSerializer < ActiveModel::Serializer

  attributes :id, :first_name, :middle_name, :last_name, :birth_date, :sex, :image, :address, :phone_number,
   :email_address, :insurance, :age, 
   :chart_id, 

  def chart_id
    self.object.chart.id
  end

  def age
    birth_date = self.object.birth_date
    today = Time.now
    ((today-birth_date).to_i/1.year.seconds).floor
  end

  has_many :providers
  has_many :appointments
  has_one :picture
  has_one :chart
end
