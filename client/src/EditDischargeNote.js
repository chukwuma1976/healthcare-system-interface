import React, {useState, useContext} from 'react'
import { UserContext } from './User'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function EditDischargeNote({discharge, display, dischargeNotes, setDischargeNotes}) {
    const {patients, user} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const [admissionDate, setAdmissionDate] = useState(new Date())
    const [dischargeDate, setDischargeDate] = useState(new Date())
    const thisPatient = patients.find(patient => patient.id === discharge.patient_id)
    const [dischargeNote, setDischargeNote] = useState({
        chart_id: thisPatient.chart.id,
        provider_id: user.id,
        date_of_admission: new Date(discharge.date_of_admission),
        date_of_discharge: new Date(discharge.date_of_discharge),
        admission_diagnosis: discharge.admission_diagnosis,
        discharge_diagnosis: discharge.discharge_diagnosis,
        procedures_performed: discharge.procedures_performed,
        hospital_course: discharge.hospital_course,
        discharge_medications: discharge.discharge_medications,
        discharge_instructions: discharge.discharge_instructions,
        follow_up: discharge.follow_up
    })
    const {        
        admission_diagnosis,
        discharge_diagnosis,
        procedures_performed,
        hospital_course,
        discharge_medications,
        discharge_instructions,
        follow_up} = dischargeNote

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/patients/${discharge.patient_id}/discharge_notes/${discharge.id}`,{
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dischargeNote)
        }).then(res=>{
            if (res.ok) {
                res.json().then(onEdit)
                display(false)
            } else {
                res.json().then(error=>setErrors(error.errors))
            }
        })
    }
    function handleChange(e){
        setDischargeNote({...dischargeNote, [e.target.name]:e.target.value})
    }
    function addAdmissionDate(date){
        setAdmissionDate(date)
        setDischargeNote({...dischargeNote, date_of_admission:date})
    }
    function addDischargeDate(date){
        setDischargeDate(date)
        setDischargeNote({...dischargeNote, date_of_discharge:date})
    }
    function onEdit(thisDischarge){
        const updated = dischargeNotes.map(discharge=>{
            if (thisDischarge.id===discharge) return thisDischarge
                else return discharge    
        })
        setDischargeNotes(updated)
    }
    if (discharge.provider_id!==user.id) {
        return <h3 class="alert alert-warning" role="alert">Sorry, you are not authorized to make changes!</h3>
        }
  return (
    <div>
        <h3>Edit Discharge Summary for {thisPatient.first_name} {thisPatient.last_name}</h3>
        {errors.map(error=><p key={error}>{error}</p>)}
        <form onSubmit={handleSubmit}>
            <label>Date of admission: </label>
            <DatePicker 
                showIcon
                selected={admissionDate} 
                onChange={(date)=>addAdmissionDate(date)}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy"
                showYearDropdown
                showMonthDropdown
            />
            <label>Date of discharge: </label>
            <DatePicker 
                showIcon
                selected={dischargeDate} 
                onChange={(date)=>addDischargeDate(date)}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy"
                showYearDropdown
                showMonthDropdown
            />
            <label>Admission diagnosis: </label>
                <input type='text' name='admission_diagnosis' value={admission_diagnosis} onChange={handleChange} />
                <br />
            <label>Discharge diagnosis: </label>
                <input type='text' name='discharge_diagnosis' value={discharge_diagnosis} onChange={handleChange} />
                <br />
            <label>Procedures performed: </label>
                <input type='text' name='procedures_performed' value={procedures_performed} onChange={handleChange} />
                <br />
            <label>Hospital course: </label>
                <br />
                <textarea 
                    className='form-control'
                    type='text' 
                    name='hospital_course' 
                    value={hospital_course} 
                    onChange={handleChange} 
                />
                <br />
            <label>Discharge medications: </label>
                <input type='text' name='discharge_medications' value={discharge_medications} onChange={handleChange} />
                <br />
            <label>Discharge instructions: </label>
                <input type='text' name='discharge_instructions' value={discharge_instructions} onChange={handleChange} />
                <br />
            <label>Follow up instructions: </label>
                <input type='text' name='follow_up' value={follow_up} onChange={handleChange} />
                <br />                
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default EditDischargeNote