import React, {useState, useContext} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from './User'

function AddProcedureNote() {
    const {patientId} = useParams()
    const {patients, user} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const thisPatient = patients.find(patient => patient.id === parseInt(patientId))
    const [procedureNote, setProcedureNote] = useState({
        chart_id: thisPatient.chart_id,
        provider_id: user.id,
        indications: "",
        anesthesia: "",
        description: "",
        complications: ""
    })
    const {        
        indications,
        anesthesia,
        description,
        complications} = procedureNote

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/patients/${patientId}/procedure_notes`,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(procedureNote)
        }).then(res=>{
            if (res.ok) {
                res.json().then(setProcedureNote)
                navigate(`/add_records/${patientId}`)
            } else {
                res.json().then(error=>setErrors(error.errors))
            }
        })
    }
    function handleChange(e){
        setProcedureNote({...procedureNote, [e.target.name]:e.target.value})
    }

  return (
    <div>
        <h3>Procedure Note</h3>
        {errors.map(error=><p key={error}>{error}</p>)}
        <form onSubmit={handleSubmit}>
            <label>Date of operation: </label>
            <label>Indications: </label>
                <input type='text' name='indications' value={indications} onChange={handleChange} />
                <br />
            <label>Anesthesia: </label>
                <input type='text' name='anesthesia' value={anesthesia} onChange={handleChange} />
                <br />
            <label>Name of procedure and description: </label>
                <br />
                <textarea 
                    type='text' 
                    name='description' 
                    value={description} 
                    rows="10" cols="180" 
                    onChange={handleChange} 
                />
                <br />
            <label>Complications: </label>
                <input type='text' name='complications' value={complications} onChange={handleChange} />
                <br />               
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddProcedureNote