import React, {useContext, useState} from 'react'
import { UserContext } from './User'
import EditAppointment from './EditAppointment'
import { NavLink} from 'react-router-dom'
import EmailContactForm from './EmailContactForm';
import AddRecords from './AddRecords';

function DisplayAppointment({appointment}) {
    const {patient_id, type_of_appointment, location, date} = appointment   
    const {patients, displayDate, displayTime, appointments, setAppointments} = useContext(UserContext)
    const patient = patients.find(patient=> patient.id === patient_id)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [displayEmail, setDisplayEmail] = useState(false)
    const [displayOptions, setDisplayOptions] = useState(false)
    const [displayAddRecord, setDisplayAddRecord] = useState(false)

    function deleteAppointment(){
      fetch(`/appointments/${appointment.id}`, {
        method: 'DELETE'
      })
      setAppointments(appointments.filter(appt=>appt.id !== appointment.id))
      alert(`You have deleted the ${appointment.type_of_appointment} appointment for ${patient.first_name} ${patient.last_name}!`)
    }

  return (
    <div className="card">
      <h4 className='card-header text-bg-info mb-3'>
        {patient.first_name} {patient.last_name} {'  '}
        <span className="badge text-bg-secondary">
          <button className="btn btn-secondary btn-sm" onClick={()=>setDisplayOptions(!displayOptions)}>
          {displayOptions? "Hide dropdown menu":"Display dropdown menu"}
          </button>
        </span>
      </h4> 
      <p>
        <b>Type of appointment:</b> {type_of_appointment}
        <b>   |  |Location:</b> {location}
        <b>   |  |Date:</b> {displayDate(date)} Time: {displayTime(date)}
      </p>
      {!displayOptions? null :
      <div className="d-grid gap-2">
        {/* <NavLink className="d-grid gap-2" to={`/add_records/${patient_id}`} style={{color: 'blue'}}>
            <button type='button'>Add Records</button>
        </NavLink>  */}

        <button className='button' onClick={()=>{setDisplayAddRecord(!displayAddRecord)}}>
          {!displayAddRecord ? "Click to Add a Record" : "Hide AddRecord Form"}
        </button>
        {displayAddRecord ? <AddRecords patient={patient} /> : null}
        
        <button className='button' onClick={()=>{setDisplayEdit(!displayEdit)}}>
          {!displayEdit ? "Click to Edit Appointment" : "Hide Edit Form"}
        </button>
        {displayEdit ? <EditAppointment thisAppt={appointment} setDisplay={setDisplayEdit}/> : null}
        <button className='button' onClick={deleteAppointment}>Click to Delete Appointment</button>
        <button className='button' onClick={()=>setDisplayEmail(!displayEmail)}>
          {displayEmail ? 'Click to Hide Email Contact Form' : 'Click to Display Email Contact Form and Send Email'}
        </button>
        {displayEmail ? 
          <div>
              <p>Cut and paste this as the recipient email address: {patient.email_address}</p>
              <EmailContactForm setDisplay={setDisplayEmail} />
          </div>
        : null}
      </div>}
    </div>
  )
}

export default DisplayAppointment