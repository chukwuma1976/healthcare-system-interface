import React, {useState, useContext} from 'react'
import { UserContext } from './User'

function EditProcedureNote({procedure, display, procedureNotes, setProcedureNotes}) {
    const {patients, user} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const thisPatient = patients.find(patient => patient.id === procedure.patient_id)
    const [procedureNote, setProcedureNote] = useState({
        chart_id: thisPatient.chart.id,
        provider_id: user.id,
        indications: procedure.indications,
        anesthesia: procedure.anesthesia,
        description: procedure.description,
        complications: procedure.complications
    })
    const {        
        indications,
        anesthesia,
        description,
        complications} = procedureNote

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/patients/${procedure.patient_id}/procedure_notes/${procedure.id}`,{
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(procedureNote)
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
        setProcedureNote({...procedureNote, [e.target.name]:e.target.value})
    }
    function onEdit(thisProcedure){
        const updated = procedureNotes.map(procedure=>{
            if (procedure.id===thisProcedure.id) return thisProcedure
                else return procedure
        })
        setProcedureNotes(updated)
    }
    if (procedure.provider_id!==user.id) {
        return <h3 class="alert alert-warning" role="alert">Sorry, you are not authorized to make changes!</h3>
        }
  return (
    <div>
        <h3>Edit Procedure Note for {thisPatient.first_name} {thisPatient.last_name}</h3>
        {errors.map(error=><p key={error}>{error}</p>)}
        <form onSubmit={handleSubmit}>
            <label>Indications: </label>
                <input type='text' name='indications' value={indications} onChange={handleChange} />
                <br />
            <label>Anesthesia: </label>
                <input type='text' name='anesthesia' value={anesthesia} onChange={handleChange} />
                <br />
            <label>Name of procedure and description: </label>
                <br />
                <textarea 
                    className='form-control'
                    type='text' 
                    name='description' 
                    value={description} 
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

export default EditProcedureNote