import React, {useState, useContext} from 'react'
import { UserContext } from './User'

function EditHistory({hpi, display, histories, setHistories}) {
    const {patients, user} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const thisPatient = patients.find(patient => patient.id === hpi.patient_id)
    const [history, setHistory] = useState({
        chart_id: thisPatient.chart.id,
        provider_id: user.id,
        chief_complaint: hpi.chief_complaint,
        past_medical_history: hpi.past_medical_history,
        past_surgical_history: hpi.past_surgical_history,
        medications: hpi.medications,
        allergies: hpi.allergies,
        social_history: hpi.social_history,
        family_history: hpi.family_history,
        review_of_systems: hpi.review_of_systems,
        vital_signs: hpi.vital_signs,
        history_of_present_illness: hpi.history_of_present_illness,
        physical_exam: hpi.physical_exam,
        assessment: hpi.assessment,
        plan: hpi.plan
    })
    const {     
        chief_complaint,
        past_medical_history,
        past_surgical_history,
        medications,
        allergies,
        social_history,
        family_history,
        review_of_systems,
        vital_signs,
        history_of_present_illness,
        physical_exam,
        assessment,
        plan} = history

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/patients/${hpi.patient_id}/history_and_physicals/${hpi.id}`,{
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(history)
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
        setHistory({...history, [e.target.name]:e.target.value})
    }
    function onEdit(thisHistory){
        const updated = histories.map(history=>{
            if (history.id===thisHistory.id) return thisHistory
                else return history
        })
        setHistories(updated)
    }
    if (hpi.provider_id!==user.id) {
        return <h3 class="alert alert-warning" role="alert">Sorry, you are not authorized to make changes!</h3>
        }
  return (
    <div>
        <h3>Edit History and Physical for {thisPatient.first_name} {thisPatient.last_name}</h3>
        {errors.map(error=><p key={error}>{error}</p>)}
        <form onSubmit={handleSubmit}>
            <label>Chief complaint: </label>
                <input type='text' name='chief_complaint' value={chief_complaint} onChange={handleChange} />
                <br />
            <label>History of present illness: </label>
                <br />
                <textarea 
                    className='form-control'
                    type='text' 
                    name='history_of_present_illness' 
                    value={history_of_present_illness} 
                    onChange={handleChange} 
                />
                <br />
            <label>Past medical history: </label>
                <input type='text' name='past_medical_history' value={past_medical_history} onChange={handleChange} />
                <br />
            <label>Past surgical history: </label>
                <input type='text' name='past_surgical_history' value={past_surgical_history} onChange={handleChange} />
                <br />
            <label>Medications: </label>
                <input type='text' name='medications' value={medications} onChange={handleChange} />
                <br />
            <label>Allergies: </label>
                <input type='text' name='allergies' value={allergies} onChange={handleChange} />
                <br />
            <label>Social history: </label>
                <input type='text' name='social_history' value={social_history} onChange={handleChange} />
                <br />
            <label>Family history: </label>
                <input type='text' name='family_history' value={family_history} onChange={handleChange} />
                <br />
            <label>Review of systems: </label>
                <input type='text' name='review_of_systems' value={review_of_systems} onChange={handleChange} />
                <br />
            <label>Vital signs: </label>
                <input type='text' name='vital_signs' value={vital_signs} onChange={handleChange} />
                <br />
            <label>Physical Exam: </label>
                <br />
                <textarea 
                    className='form-control'
                    type='text' 
                    name='physical_exam' 
                    value={physical_exam} 
                    onChange={handleChange} 
                />
                <br />
            <label>Assessment: </label>
                <br />
                <textarea 
                    className='form-control'
                    type='text' 
                    name='assessment' 
                    value={assessment} 
                    onChange={handleChange} 
                />
                <br />
            <label>Plan: </label>
                <br />
                <textarea 
                    className='form-control'
                    type='text' 
                    name='plan' 
                    value={plan} 
                    onChange={handleChange} 
                />
                <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default EditHistory