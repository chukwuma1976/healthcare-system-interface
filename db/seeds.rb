# 2.times do
#     this_man=Patient.create(
#         first_name: Faker::Name.first_name_men,
#         middle_name: Faker::Name.middle_name,
#         last_name: Faker::Name.last_name,
#         birth_date: Faker::Date.birthday,
#         sex: "M",
#         image: "",
#         address: Faker::Address.street_address + " " + Faker::Address.city + ", " + Faker::Address.state + " " + Faker::Address.zip,
#         phone_number: Faker::PhoneNumber.phone_number,
#         email_address: Faker::Internet.email,
#         insurance: "Aetna"
#     )
#     this_man.create_chart
# end

# 2.times do
#     this_woman=Patient.create(
#         first_name: Faker::Name.first_name_women,
#         middle_name: Faker::Name.middle_name,
#         last_name: Faker::Name.last_name,
#         birth_date: Faker::Date.birthday,
#         sex: "F",
#         image: "",
#         address: Faker::Address.street_address + " " + Faker::Address.city + ", " + Faker::Address.state + " " + Faker::Address.zip,
#         phone_number: Faker::PhoneNumber.phone_number,
#         email_address: Faker::Internet.email,
#         insurance: "Cigna"
#     )
#     this_woman.create_chart
# end
# Provider.all
# Patient.all
# Appointment.all
# Chart.all
# Consult.all
# DischargeNote.all
# HistoryAndPhysical.all
# OperativeReport.all
# Picture.all
# ProcedureNote.all
# ProgressNote.all


# puts "Done seeding patients"
