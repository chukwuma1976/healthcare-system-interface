import React, {useContext, useState} from 'react'
import { UserContext } from './User'
import EditAppointment from './EditAppointment'
import { NavLink} from 'react-router-dom'
import EmailContactForm from './EmailContactForm';

function DisplayAppointment({appointment}) {
    const {patient_id, type_of_appointment, location, date} = appointment   
    const {patients, displayDate, displayTime, appointments, setAppointments} = useContext(UserContext)
    const patient = patients.find(patient=> patient.id === patient_id)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [displayEmail, setDisplayEmail] = useState(false)

    function deleteAppointment(){
      fetch(`/appointments/${appointment.id}`, {
        method: 'DELETE'
      })
      setAppointments(appointments.filter(appt=>appt.id !== appointment.id))
      alert(`You have deleted the ${appointment.type_of_appointment} appointment for ${patient.first_name} ${patient.last_name}!`)
    }

  return (
    <div className="card">
      <h4 className='card-header'>{patient.first_name} {patient.last_name}</h4> 
      <p>Type of appointment: {type_of_appointment}</p>
      <p>Location: {location}</p>
      <p>Date: {displayDate(date)} Time: {displayTime(date)}</p>
      <NavLink className="d-grid gap-2" to={`/add_records/${patient_id}`} style={{color: 'blue'}}>
          <button type='button'>Add Records</button>
      </NavLink> 
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
    </div>
  )
}

export default DisplayAppointment