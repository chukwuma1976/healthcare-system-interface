import React, { useState, useContext } from 'react'
import { UserContext } from './User'

function EditProgressNote({progressNote, display, progressNotes, setProgressNotes}) {
    const {patients, user} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const thisPatient = patients.find(patient => patient.id === progressNote.patient_id)
    const [soapNote, setSoapNote] = useState({
        chart_id: thisPatient.chart_id,
        provider_id: user.id,
        subjective: progressNote.subjective,
        objective: progressNote.objective,
        assessment: progressNote.assessment,
        plan: progressNote.plan
    })
    const {subjective, objective, assessment, plan} = soapNote
    function handleSubmit(e){
        e.preventDefault()
        fetch(`/patients/${progressNote.patient_id}/progress_notes/${progressNote.id}`,{
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(soapNote)
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
        setSoapNote({...soapNote, [e.target.name]:e.target.value})
    }
    function onEdit(thisNote){
        const updated = progressNotes.map(note=>{
            if (note.id===thisNote.id) return thisNote
                else return note
        })
        setProgressNotes(updated)
    }
    if (progressNote.provider_id!==user.id) {
        return <h3 class="alert alert-warning" role="alert">Sorry, you are not authorized to make changes!</h3>
        }
  return (
    <div>
        <h3>Edit Progress note for {thisPatient.first_name} {thisPatient.last_name}</h3>
        <form onSubmit={handleSubmit}>
            {errors.map(error=><p key={error}>{error}</p>)}
            <label>Subjective:</label>
                <br/>   
                <textarea className='form-control' type='text'  name="subjective" value={subjective} onChange={handleChange}/>
                <br/>
            <label>Objective:</label>
                <br/>
                <textarea className='form-control' type='text'  name="objective" value={objective} onChange={handleChange}/>
                <br/>
            <label>Assessment:</label>
                <br/>
                <textarea className='form-control' type='text'  name="assessment" value={assessment} onChange={handleChange}/>
                <br/>
            <label>Plan:</label>
                <br/>
                <textarea className='form-control' type='text'  name="plan" value={plan} onChange={handleChange}/>
                <br/>
            <button type='submit'>Submit</button>
        </form>        
    </div>
  )
}

export default EditProgressNote