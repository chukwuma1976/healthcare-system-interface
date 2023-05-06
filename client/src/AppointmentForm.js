import React, {useState, useContext} from 'react'
import { UserContext } from './User'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function AppointmentForm({patientId, setDisplay}) {
    const { user, appointments, setAppointments } = useContext(UserContext)
    const [type, setType] = useState("")
    const [location, setLocation] = useState("")
    const [apptDate, setApptDate] = useState(new Date())
    const [errors, setErrors] = useState([])

    const appointment = {
        provider_id: user.id,
        patient_id: patientId,
        type_of_appointment: type,
        location,
        date: apptDate
    }

    function handleSubmit(event){
        event.preventDefault()
        fetch('/appointments', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(appointment)
        }).then(res=>{
            if(res.ok){
                res.json().then(appointment=>setAppointments([...appointments, appointment]))
                setDisplay(false)
            } else {res.json().then(error=>setErrors(error.errors))}
            }
        )
    }
  return (
    <div>
        <form className="form-small" onSubmit={handleSubmit}>
            {errors.map(error=><p key={error}>{error}</p>)}
            <label>Type of appointment</label>
            <select onChange={e=>setType(e.target.value)}>
                <option></option>
                <option value="Outpatient: New Visit">Outpatient: New Visit</option>
                <option value="Outpatient: Follow up">Outpatient: Follow up</option>
                <option value="Outpatient: Procedure">Outpatient: Procedure</option>
                <option value="Outpatient: Consultation">Outpatient: Consultation</option>
                <option value="Inpatient: Admission">Inpatient: Admission</option>
                <option value="Inpatient: Surgery">Inpatient: Surgery</option>
                <option value="Inpatient: Consultation">Inpatient: Consultation</option>
            </select>
            <br />
            <label>Location (state name of hospital or office/clinic)</label>
                <input type="text" value={location} onChange={e=>setLocation(e.target.value)} />
            <br />
            <label>Pick a date and time</label>
            <DatePicker 
                showIcon
                selected={apptDate} 
                onChange={(date)=>setApptDate(date)}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeInput
            />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AppointmentForm