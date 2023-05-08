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
        providers
    } = patient
    const birthday = new Date(birth_date)
    const [displayPatientInfo, setDisplayPatientInfo] = useState(false)
    const [makeAppointment, setMakeAppointment] = useState(false)
  return (
        <div className='card'>
            <h4 className='card-header text-bg-secondary mb-3'>{last_name}, {first_name} {middle_name}</h4>
            <button onClick={()=>setDisplayPatientInfo(!displayPatientInfo)}>
                {!displayPatientInfo? 'Display Patient Information' : 'Hide Patient Information'}
            </button>
            {!displayPatientInfo ? null : 
            <div>
                {image ===''? null: <img src={image} alt='patient'/>}
                <p><b>DOB:</b> {birthday.getMonth()}/{birthday.getDate()}/{birthday.getFullYear()} <b>Sex:</b> {sex}</p>
                <p><b>Address:</b> {address}</p>
                <p><b>Phone number:</b> {phone_number}</p>
                <p><b>Email address:</b> {email_address}</p>
                <p><b>Insurance:</b> {insurance}</p>
                <div className="card-footer text-body-secondary">
                    <h6>Associated providers from HCSI: </h6> 
                    {providers.length === 0 ? <p>none</p>
                     : providers.map(provider=><p key={provider.id}>{provider.last_name}, {provider.first_name}</p>)}
                </div>
            </div>}
            <button onClick={()=>setMakeAppointment(!makeAppointment)}>
                {!makeAppointment? "Click to make an appointment" : "Hide appointment form"}
            </button>
            {makeAppointment? <AppointmentForm patientId={id} setDisplay={setMakeAppointment}/> : null}
            <br/>
        </div>
  )
}

export default AppointmentByPatient