import React, { useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from './User'

function AddSoapNote() {
    const {patientId} = useParams()
    const {patients, user} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const thisPatient = patients.find(patient => patient.id === parseInt(patientId))
    const [soapNote, setSoapNote] = useState({
        chart_id: thisPatient.chart_id,
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
                navigate(`/add_records/${patientId}`)
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
        <form onSubmit={handleSubmit}>
            {errors.map(error=><p key={error}>{error}</p>)}
            <label>Subjective:</label>
                <br/>   
                <textarea type="text" name="subjective" value={subjective} rows="6" cols="100" onChange={handleChange}/>
                <br/>
            <label>Objective:</label>
                <br/>
                <textarea type="text" name="objective" value={objective} rows="6" cols="100" onChange={handleChange}/>
                <br/>
            <label>Assessment:</label>
                <br/>
                <textarea type="text" name="assessment" value={assessment} rows="6" cols="100" onChange={handleChange}/>
                <br/>
            <label>Plan:</label>
                <br/>
                <textarea type="text" name="plan" value={plan} rows="6" cols="100" onChange={handleChange}/>
                <br/>
            <button type='submit'>Submit</button>
        </form>        
    </div>
  )
}

export default AddSoapNote