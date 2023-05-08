import React, {useState, useContext} from 'react'
import EditHistory from './EditHistory'
import DeleteRecord from './DeleteRecord'
import PrintComponent from './PrintComponent'
import { UserContext } from './User'

function ShowHistory({history, histories, setHistories}) {
    const {displayDate} = useContext(UserContext)
    const {
        patient_header,
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
        plan,
        provider_header,
        created_at,
        updated_at,    
    } = history
    const template = (
      <div className='record'>
          <h3 className='patient'>History and Physical</h3>
          <h6 className='patient'>{patient_header}</h6>
          <p>Chief complaint: {chief_complaint}</p>
          <p>History of present illness: </p>
          <p>{history_of_present_illness}</p>
          <p>Past medical history: {past_medical_history}</p>
          <p>Past surgical history: {past_surgical_history}</p>
          <p>Medications: {medications}</p>
          <p>Allergies: {allergies}</p>
          <p>Social history: {social_history}</p>
          <p>Family history: {family_history}</p>
          <p>Review of systems: {review_of_systems}</p>
          <p>Vital signs: {vital_signs}</p>
          <p>Physical Exam: </p>
          <p>{physical_exam}</p>
          <p>Assessment: </p>
          <p>{assessment}</p>
          <p>Plan: </p>
          <p>{plan}</p>
          <p className='signature'>Written by {provider_header}</p>
          <p className='signature'>Created: {displayDate(created_at)} || Last updated: {displayDate(updated_at)}</p>
      </div>
      )
    const [showEdit, setShowEdit] = useState(false)
  return (
    <div>
        {showEdit? null : template}
        <button onClick={()=>setShowEdit(!showEdit)}>{showEdit? "Show history and physical": "Edit history and physical"}</button>
        {showEdit? <EditHistory hpi={history} display={setShowEdit} histories={histories} setHistories={setHistories}/>: null}
        <DeleteRecord 
          record={history} 
          typeOfRecord={"history_and_physicals"} 
          nameOfRecord={"history and physical"} 
          records={histories} 
          recordsSetter={setHistories}
        />
        <PrintComponent template={template}/>
    </div>
  )
}

export default ShowHistory