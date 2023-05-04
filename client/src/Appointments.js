import React, {useState, useContext} from 'react'
import { UserContext } from './User'
import AppointmentByPatient from './AppointmentByPatient'
import DisplayAppointment from './DisplayAppointment'
import AddPatient from './AddPatient'
import FilterByName from './FilterByName'

function Appointments() {
    const {user, patients, appointments} = useContext(UserContext)
    const [displayPatients, setDisplayPatients] = useState(false)
    const [wantPatient, setWantPatient] = useState(false)
    const [displayAppointments, setDisplayAppointments] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const byLastName = patients.filter(patient=>patient.last_name.toLowerCase().includes(lastName))
    const byFirstAndLastName = byLastName.filter(patient=>patient.first_name.toLowerCase().includes(firstName))
    const patientList = byFirstAndLastName.map(patient =><AppointmentByPatient key={patient.id} patient={patient} />)
    const appointmentList = appointments.map(appointment =>
        <DisplayAppointment key={appointment.id} appointment={appointment}/>)
  return (
    <div className="container">
        <button className="btn btn-primary btn-lg" onClick={()=>setDisplayPatients(!displayPatients)}>
            {!displayPatients? 'Click to make an appointment with an existing patient' :  'Click to hide patients and forms'}
        </button>
        <br/><br/>
        {!displayPatients? null: 
        (<div className="container-md">
            <div className="d-flex justify-content-center">
                <FilterByName name={firstName} setName={setFirstName} filter={"first name"}/>
                <FilterByName name={lastName} setName={setLastName} filter={"last name"}/>
            </div>
            {patientList}
        </div>)}
        <button className="btn btn-primary btn-lg" onClick={()=>setWantPatient(!wantPatient)}>
            {!wantPatient? 'Click to add a new patient' :  'Click to hide new patient form'}
        </button>
        <br/><br/>
        {wantPatient? <AddPatient /> : null}
        <button className="btn btn-primary btn-lg" onClick={()=>setDisplayAppointments(!displayAppointments)}>
            {!displayAppointments? 
            `Click to display appointments for ${user.first_name} ${user.last_name}` :
             `Click to hide appointments for ${user.first_name} ${user.last_name}`}
        </button>
        {displayAppointments? 
            <div className="container-md">
                <h3>Number of scheduled appointments: {appointments.length}</h3>
                {appointmentList} 
            </div>: null}       
    </div>
  )
}

export default Appointments