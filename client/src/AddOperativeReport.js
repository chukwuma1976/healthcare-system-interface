import React, {useState, useContext} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from './User'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function AddOperativeReport() {
    const {patientId} = useParams()
    const {patients, user} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const [operativeDate, setOperativeDate] = useState(new Date())
    const navigate = useNavigate()
    const thisPatient = patients.find(patient => patient.id === parseInt(patientId))
    const [operativeReport, setOperativeReport] = useState({
        chart_id: thisPatient.chart_id,
        provider_id: user.id,
        date: new Date(),
        indications: "",
        preoperative_diagnosis: "",
        postoperative_diagnosis: "",
        procedure: "",
        assistants: "",
        anesthesiologist: "",
        anesthesia: "",
        fluids: "",
        estimated_blood_loss: "",
        description: "",
        complications: ""
    })
    const {        
        indications,
        preoperative_diagnosis,
        postoperative_diagnosis,
        procedure,
        assistants,
        anesthesiologist,
        anesthesia,
        fluids,
        estimated_blood_loss,
        description,
        complications} = operativeReport

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/patients/${patientId}/operative_reports`,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(operativeReport)
        }).then(res=>{
            if (res.ok) {
                res.json().then(setOperativeReport)
                navigate(`/add_records/${patientId}`)
            } else {
                res.json().then(error=>setErrors(error.errors))
            }
        })
    }
    function handleChange(e){
        setOperativeReport({...operativeReport, [e.target.name]:e.target.value})
    }
    function addOperativeDate(date){
        setOperativeDate(date)
        setOperativeReport({...operativeReport, date})
    }

  return (
    <div>
        <h3>Operative Report for {thisPatient.first_name} {thisPatient.last_name}</h3>
        <form className='form' onSubmit={handleSubmit}>
            {errors.map(error=><p key={error}>{error}</p>)}
            <label>Date of operation: </label>
            <DatePicker 
                showIcon
                selected={operativeDate} 
                onChange={(date)=>addOperativeDate(date)}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy"
                showYearDropdown
                showMonthDropdown
            />
            <label>Indications: </label>
                <input type='text' name='indications' value={indications} onChange={handleChange} />
                <br />
            <label>Preoperative diagnosis: </label>
                <input type='text' name='preoperative_diagnosis' value={preoperative_diagnosis} onChange={handleChange} />
                <br />
            <label>Discharge diagnosis: </label>
                <input type='text' name='postoperative_diagnosis' value={postoperative_diagnosis} onChange={handleChange} />
                <br />
            <label>Name of operation: </label>
                <input type='text' name='procedure' value={procedure} onChange={handleChange} />
                <br />
            <label>Assistants: </label>
                <input type='text' name='assistants' value={assistants} onChange={handleChange} />
                <br />
            <label>Anesthesiologist: </label>
                <input type='text' name='anesthesiologist' value={anesthesiologist} onChange={handleChange} />
                <br /> 
            <label>Anesthesia: </label>
                <input type='text' name='anesthesia' value={anesthesia} onChange={handleChange} />
                <br />
            <label>Fluids: </label>
                <input type='text' name='fluids' value={fluids} onChange={handleChange} />
                <br />
            <label>Estimated blood loss: </label>
                <input type='text' name='estimated_blood_loss' value={estimated_blood_loss} onChange={handleChange} />
                <br />
            <label>Description of operation: </label>
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

export default AddOperativeReport