class PatientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :middle_name, :last_name, :birth_date, :sex, :image, :address, :phone_number,
   :email_address, :insurance, :chart_id, :age, :medication_list, :operations, :diagnoses
  def chart_id
    self.object.chart.id
  end
  def age
    birth_date = self.object.birth_date
    today = Time.now
    ((today-birth_date).to_i/1.year.seconds).floor
  end

  def medication_list
    self.object.chart.history_and_physicals.map do |history|
      history.medications.split(',')
    end.flatten.uniq.join(',')
  end

  def operations
    self.object.chart.history_and_physicals.map do |history|
      history.past_surgical_history.split(',')
    end.flatten.uniq.join(',')
  end

  def diagnoses
    self.object.chart.history_and_physicals.map do |history|
      history.past_medical_history.split(',')
    end.flatten.uniq.join(',')
  end

  has_many :providers
end
