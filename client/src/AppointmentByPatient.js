import React, {useState} from 'react'
import AppointmentForm from './AppointmentForm'
import { NavLink } from 'react-router-dom'

function AppointmentByPatient({patient}) {
    const {
        id, 
        first_name, 
        last_name, 
        middle_name, 
        birth_date, 
        sex, address, 
        phone_number, 
        email_address, 
        image,
        insurance,
    } = patient
    const birthday = new Date(birth_date)
    const [displayPatientInfo, setDisplayPatientInfo] = useState(false)
    const [makeAppointment, setMakeAppointment] = useState(false)
  return (
        <div className='card'>
            <h4 className='card-header'>{last_name}, {first_name} {middle_name}</h4>
            <button onClick={()=>setDisplayPatientInfo(!displayPatientInfo)}>
                {!displayPatientInfo? 'Display Patient Information' : 'Hide Patient Information'}
            </button>
            {!displayPatientInfo ? null : 
            <div>
                {image ===''? null: <img src={image} alt='patient'/>}
                <p>DOB: {birthday.getMonth()}/{birthday.getDate()}/{birthday.getFullYear()} sex: {sex}</p>
                <p>Address: {address}</p>
                <p>Phone number: {phone_number}</p>
                <p>Email address: {email_address}</p>
                <p>Insurance: {insurance}</p>
            </div>}
            <button onClick={()=>setMakeAppointment(!makeAppointment)}>
                {!makeAppointment? "Click to make an appointment" : "Hide appointment form"}
            </button>
            {makeAppointment? <AppointmentForm patientId={id} setDisplay={setMakeAppointment}/> : null}
            <NavLink className="d-grid gap-2" to={`/update_patient/${id}`} style={{color: 'blue'}}>
                <button type='button'>Update Patient Information</button>
            </NavLink>
            <br/>
        </div>
  )
}

export default AppointmentByPatient