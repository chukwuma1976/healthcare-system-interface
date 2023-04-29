import React, {useState, useContext} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from './User'

function AddHistory() {
    const {patientId} = useParams()
    const {patients, user} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const thisPatient = patients.find(patient => patient.id === parseInt(patientId))
    const [history, setHistory] = useState({
        chart_id: thisPatient.chart_id,
        provider_id: user.id,
        chief_complaint: "",
        past_medical_history: "",
        past_surgical_history: "",
        medications: "",
        allergies: "",
        social_history: "",
        family_history: "",
        review_of_systems: "",
        vital_signs: "",
        history_of_present_illness: "",
        physical_exam: "",
        assessment: "",
        plan: ""
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
        fetch(`/patients/${patientId}/history_and_physicals`,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(history)
        }).then(res=>{
            if (res.ok) {
                res.json().then(setHistory)
                navigate(`/add_records/${patientId}`)
            } else {
                res.json().then(error=>setErrors(error.errors))
            }
        })
    }
    function handleChange(e){
        setHistory({...history, [e.target.name]:e.target.value})
    }
  return (
    <div>
        <h3>History and Physical</h3>
        {errors.map(error=><p key={error}>{error}</p>)}
        <form onSubmit={handleSubmit}>
            <label>Chief complaint: </label>
                <input type='text' name='chief_complaint' value={chief_complaint} onChange={handleChange} />
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
            <label>History of present illness: </label>
                <br />
                <textarea 
                    type='text' 
                    name='history_of_present_illness' 
                    value={history_of_present_illness} 
                    rows="15" cols="180" 
                    onChange={handleChange} 
                />
                <br />
            <label>Physical Exam: </label>
                <br />
                <textarea 
                    type='text' 
                    name='physical_exam' 
                    value={physical_exam} 
                    rows="15" cols="180" 
                    onChange={handleChange} 
                />
                <br />
            <label>Assessment: </label>
                <br />
                <textarea 
                    type='text' 
                    name='assessment' 
                    value={assessment} 
                    rows="10" cols="180" 
                    onChange={handleChange} 
                />
                <br />
            <label>Plan: </label>
                <br />
                <textarea 
                    type='text' 
                    name='plan' 
                    value={plan} 
                    rows="10" cols="180" 
                    onChange={handleChange} 
                />
                <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddHistory