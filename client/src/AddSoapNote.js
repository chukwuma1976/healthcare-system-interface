import React, { useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from './User'

function AddSoapNote() {
    const {patientId, chartId} = useParams()
    const {user} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const [soapNote, setSoapNote] = useState({
        chart_id: chartId,
        provider_id: user.id,
        subjective: "",
        objective: "",
        assessment: "",
        plan: ""
    })
    const {subjective, objective, assessment, plan} = soapNote
    function handleSubmit(e){
        e.preventDefault()
        fetch(`/patients/${patientId}/progress_notes`,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(soapNote)
        }).then(res=>{
            if (res.ok) {
                res.json().then(setSoapNote)
                navigate(`/patient_appointments`)
            } else {
                res.json().then(error=>setErrors(error.errors))
            }
        })

    }
    function handleChange(e){
        setSoapNote({...soapNote, [e.target.name]:e.target.value})
    }
  return (
    <div>
        <h3>Progress note</h3>
        <form className='form' onSubmit={handleSubmit}>
            {errors.map(error=><p key={error}>{error}</p>)}
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

export default AddSoapNote