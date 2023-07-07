# README

Welcome to the Healthcare System Interface (HCSI).  It is an electronic medical record prototype which connects providers and patients, as well as even other providers.

There are several parts to this application.

1. Login Page
    
Sign up section: every new user will have to create a new account with a username, password, name, type of provider and department.

Login Section: every user will login with a username and password.  They have the option of staying logged in or logging out.

2. Home Page

This is a page welcoming the user to the the Healthcare System Interface (HCSI).  The user can redirect to other pages on the application.  Furthermore, the user can view their profile.

3. Providers

This consists of a list of providers with an expandible display.  Here the user can view every provider in the system (including themselves) as view a list of patients being seen by each provider.

4. Appointments

There are three main sections.

a. Click to make an appointment with an existing patient.  This generates a patient list of all patients in HCSI and allows the display of patient information as well as scheduling an appointment with each patient.
    
b. Click to add a new patient. This displays a form to enter new patient data, upload an image if desired and schedule an appointment at the time of entry.

c. Click to display appointments.  This displays the users appointment list.  This list can be printed.

    i. Click to add a record: This is the documentation area for a patient.  
    The user can add different types of records such as a SOAP (progress note), history and physical, consult, discharge 
    summary, operative report, brief procedure note.  The user can also update patient information and add or edit and 
    image for a patient.

    ii. Click to edit appointment

    iii. Click to delete appointment

    iv. Click to display email contact for and send email
    

5. Patient Records

Here the user can display records for all patients in HCSI or only their own patients.  The user can view all patient records.  However the user can only edit and delete their own patient records.  Each record is printable.

6. Logout

This section signs out the user

To launch this application:

    git clone git@github.com:chukwuma1976/healthcare-system-interface.git
    cd into appropriate folder (eclectic_music)

    In console //this launches the app on http://localhost:3000
        bundle install
        rails s

    make sure PostgreSQL is installed and started
        sudo apt update
        sudo apt install postgresql postgresql-contrib libpq-dev
        psql --version //confirm installation
        sudo service postgresql start //starts the postgresql server
        whoami //checks user
        sudo -u postgres -i
        createuser -sr <username>
    
    Alternatively you can go to Render at URL: https://hcsi-isxm.onrender.com/

Link to the demo for this application: https://youtu.be/MwK6643qOG0

For the extended demo for this application: https://youtu.be/ONNHBAip2To



Specs:

* Ruby version ruby 2.7.4

* System dependencies: all needed gems installed at this point

* Database creation: PostgreSQL 14.7

* Database initialization: seed file commented out, add seed data run rails db:seed, of note when creating Patient instances create Chart instances for each Patient at the same time in the seed file.  Ex. new_patient = Patient.create(patient_params), followed by new_patient.create_chart(new_patient.id)

* URL: https: https://hcsi-isxm.onrender.com/

* Deployment instructions : already deployed, to redeploy push changes to github

