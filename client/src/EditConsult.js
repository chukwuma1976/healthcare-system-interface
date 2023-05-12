import React, {useState, useContext} from 'react'
import { UserContext } from './User'

function EditConsult({thisConsult, display, consulted, setConsulted}) {
    const {patients, user} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const thisPatient = patients.find(patient => patient.id === thisConsult.patient_id)
    const [consult, setConsult] = useState({
        chart_id: thisPatient.chart.id,
        provider_id: user.id,
        reason_for_consult: thisConsult.reason_for_consult,
        past_medical_history: thisConsult.past_medical_history,
        past_surgical_history: thisConsult.past_surgical_history,
        medications: thisConsult.medications,
        allergies: thisConsult.allergies,
        social_history: thisConsult.social_history,
        family_history: thisConsult.family_history,
        vital_signs: thisConsult.vital_signs,
        history_of_present_illness: thisConsult.history_of_present_illness,
        physical_exam: thisConsult.physical_exam,
        assessment: thisConsult.assessment,
        plan: thisConsult.plan
    })
    const {        
        reason_for_consult,
        past_medical_history,
        past_surgical_history,
        medications,
        allergies,
        social_history,
        family_history,
        vital_signs,
        history_of_present_illness,
        physical_exam,
        assessment,
        plan} = consult

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/patients/${thisConsult.patient_id}/consults/${thisConsult.id}`,{
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(consult)
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
        setConsult({...consult, [e.target.name]:e.target.value})
    }
    function onEdit(thisConsult){
        const updated = consulted.map(consult=>{
            if (consult.id===thisConsult.id) return thisConsult
                else return consult
        })
        setConsulted(updated)
    }
  if (thisConsult.provider_id!==user.id) {
    return <h3 class="alert alert-warning" role="alert">Sorry, you are not authorized to make changes!</h3>
    }
  return (
    <div>
        <h3>Edit Consult for {thisPatient.first_name} {thisPatient.last_name}</h3>
        {errors.map(error=><p key={error}>{error}</p>)}
        <form onSubmit={handleSubmit}>
            <label>Reason for consult: </label>
                <input type='text' name='reason_for_consult' value={reason_for_consult} onChange={handleChange} />
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

export default EditConsult