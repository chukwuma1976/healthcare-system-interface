import React, {useState, useContext} from 'react'
import EditConsult from './EditConsult'
import DeleteRecord from './DeleteRecord'
import { UserContext } from './User'
import PrintComponent from './PrintComponent'

function ShowConsult({consult, consulted, setConsulted}) {
    const {displayDate} = useContext(UserContext)
    const {
        patient_header,
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
        plan,
        provider_header,
        created_at,
        updated_at     
    } = consult
    const template = (
      <div className='record'>
        <h3 className='patient'>Consult</h3>
        <h6 className='patient'>{patient_header}</h6>
        <p>Reason for consultation: {reason_for_consult}</p>
        <p>Past medical history: {past_medical_history}</p>
        <p>Past surgical history: {past_surgical_history}</p>
        <p>Medications: {medications}</p>
        <p>Allergies: {allergies}</p>
        <p>Social history: {social_history}</p>
        <p>Family history: {family_history}</p>
        <p>Vital signs: {vital_signs}</p>
        <p>History of present illness</p>
        <p>{history_of_present_illness}</p>
        <p>Physical Exam:</p>
        <p>{physical_exam}</p>
        <p>Assessment:</p>
        <p>{assessment}</p>
        <p>Plan:</p>
        <p>{plan}</p>
        <p className='signature'>Written by {provider_header}</p>
        <p className='signature'>Created: {displayDate(created_at)} || Last updated: {displayDate(updated_at)}</p>
      </div>
    )
    const [showEdit, setShowEdit] = useState(false)
  return (
    <div>
        {showEdit? null: template}
        <button onClick={()=>setShowEdit(!showEdit)}>{showEdit? "Show consult": "Edit consult"}</button>
        {showEdit? <EditConsult thisConsult={consult} display={setShowEdit} consulted={consulted} setConsulted={setConsulted} />: null}
        <DeleteRecord 
          record={consult} 
          typeOfRecord={"consults"} 
          nameOfRecord={"consult"} 
          records={consulted} 
          recordsSetter={setConsulted}
        />    
        <PrintComponent template={template}/> 
    </div>
  )
}

export default ShowConsult