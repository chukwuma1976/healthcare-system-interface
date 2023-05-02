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
    <div>
        <h2>Click button below to make an appointment with an existing patient</h2>
        <button onClick={()=>setDisplayPatients(!displayPatients)}>
            {!displayPatients? 'Click to see patients' :  'Click to hide patients'}
        </button>
        {!displayPatients? null: (<div>
            <FilterByName name={firstName} setName={setFirstName} filter={"first name"}/>
            <FilterByName name={lastName} setName={setLastName} filter={"last name"}/>
            {patientList}
        </div>)}
        {/* {displayPatients? patientList : null} */}
        <h2>Click button to add a new patient</h2>
        <button onClick={()=>setWantPatient(!wantPatient)}>
            {!wantPatient? 'Click to add a new patient' :  'Click to hide new patient form'}
        </button>
        {wantPatient? <AddPatient /> : null}
        <h2>Click button to display appointments for {user.first_name} {user.last_name}</h2>
        <h3>Number of scheduled appointments: {appointments.length}</h3>
        <button onClick={()=>setDisplayAppointments(!displayAppointments)}>
            {!displayAppointments? 'Display Appointments' : 'Hide Appointments'}
        </button>
        {displayAppointments? appointmentList : null}
    </div>
  )
}

export default Appointments