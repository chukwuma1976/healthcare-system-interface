import React, {useState, useContext} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from './User'

function AddConsult() {
    const {patientId, chartId} = useParams()
    const {user} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const [consult, setConsult] = useState({
        chart_id: chartId,
        provider_id: user.id,
        reason_for_consult: "",
        past_medical_history: "",
        past_surgical_history: "",
        medications: "",
        allergies: "",
        social_history: "",
        family_history: "",
        vital_signs: "",
        history_of_present_illness: "",
        physical_exam: "",
        assessment: "",
        plan: ""
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
        fetch(`/patients/${patientId}/consults`,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(consult)
        }).then(res=>{
            if (res.ok) {
                res.json().then(setConsult)
                navigate(`/patient_appointments`)
            } else {
                res.json().then(error=>setErrors(error.errors))
            }
        })
    }
    function handleChange(e){
        setConsult({...consult, [e.target.name]:e.target.value})
    }
  return (
    <div>
        <h3>Consult</h3>
        <form class='form' onSubmit={handleSubmit}>
            {errors.map(error=><p key={error}>{error}</p>)}
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

export default AddConsult