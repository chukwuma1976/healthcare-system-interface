# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_20_104820) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.integer "provider_id"
    t.integer "patient_id"
    t.string "type"
    t.string "location"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "charts", force: :cascade do |t|
    t.string "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "patient_ids", force: :cascade do |t|
    t.string "integer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "patients", force: :cascade do |t|
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.datetime "birth_date"
    t.string "sex"
    t.string "image"
    t.string "address"
    t.string "phone_number"
    t.string "email_address"
    t.string "insurance"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "providers", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.string "type_of_provider"
    t.string "department"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end