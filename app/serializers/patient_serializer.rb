class PatientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :middle_name, :last_name, :birth_date, :sex, :image, :address, :phone_number, :email_address, :insurance, :chart_id, :age
  def chart_id
    self.object.chart.id
  end
  def age
    birth_date = self.object.birth_date
    today = Time.now
    ((today-birth_date).to_i/1.year.seconds).floor
  end
end
