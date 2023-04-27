import React, {useState, useContext} from 'react'
import { UserContext } from './User'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function EditAppointment({thisAppt, setDisplay}) {
    const { appointments, setAppointments } = useContext(UserContext)
    const [type, setType] = useState(thisAppt.type_of_appointment)
    const [location, setLocation] = useState(thisAppt.location)
    const [apptDate, setApptDate] = useState(new Date(thisAppt.date))
    const [errors, setErrors] = useState([])

    const appointment = {
        id: thisAppt.id,
        provider_id: thisAppt.provider_id,
        patient_id: thisAppt.patient_id,
        type_of_appointment: type,
        location,
        date: apptDate
    }
    function handleUpdate(updatedAppointment){
        const updated = appointments.map(appointment=>{
            if (appointment.id===updatedAppointment.id){
                return updatedAppointment
            } else return appointment
        })
        setAppointments(updated)
    }

    function handleSubmit(event){
        event.preventDefault()
        fetch(`/appointments/${thisAppt.id}`, {
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(appointment)
        }).then(res=>{
            if(res.ok){
                res.json().then(appointment=>handleUpdate(appointment))
                alert('You have successfully updated an appointment')
                setDisplay(false)
            } else {res.json().then(error=>setErrors(error.errors))}
            }
        )
    }
  return (
    <div>
        {errors.map(error=><p key={error}>{error}</p>)}
        <form onSubmit={handleSubmit}>
            <label>Edit appointment type</label>
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
            <label>Edit Location (state name of hospital or office/clinic)</label>
                <input type="text" value={location} onChange={e=>setLocation(e.target.value)} />
            <br />
            <label>Edit date and time</label>
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

export default EditAppointment