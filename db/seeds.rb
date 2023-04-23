2.times do
    Patient.create(
        first_name: Faker::Name.first_name_men,
        middle_name: Faker::Name.middle_name,
        last_name: Faker::Name.last_name,
        birth_date: Faker::Date.birthday,
        sex: "M",
        image: "",
        address: Faker::Address.street_address + " " + Faker::Address.city + ", " + Faker::Address.state + " " + Faker::Address.zip,
        phone_number: Faker::PhoneNumber.phone_number,
        email_address: Faker::Internet.email,
        insurance: "Blue Cross"
    )
end

2.times do
    Patient.create(
        first_name: Faker::Name.first_name_women,
        middle_name: Faker::Name.middle_name,
        last_name: Faker::Name.last_name,
        birth_date: Faker::Date.birthday,
        sex: "F",
        image: "",
        address: Faker::Address.street_address + " " + Faker::Address.city + ", " + Faker::Address.state + " " + Faker::Address.zip,
        phone_number: Faker::PhoneNumber.phone_number,
        email_address: Faker::Internet.email,
        insurance: "Blue Cross"
    )
end

puts "Done seeding patients"
