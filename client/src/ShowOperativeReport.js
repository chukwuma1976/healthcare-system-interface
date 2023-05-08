import React, {useContext, useState} from 'react'
import { UserContext } from './User'
import EditOperativeReport from './EditOperativeReport'
import DeleteRecord from './DeleteRecord'
import PrintComponent from './PrintComponent'

function ShowOperativeReport({operation, operativeReports, setOperativeReports}) {
    const {displayDate} = useContext(UserContext)
    const {
        patient_header,
        date,
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
        complications,
        provider_header,
        created_at,
        updated_at 
    } = operation
    const template = (
      <div className='record'>
        <h3 className='patient'>Operative Report</h3>
        <h6 className='patient'>{patient_header}</h6>
        <p>Date of operation: {displayDate(date)}</p> 
        <p>Indications: {indications}</p>
        <p>Preoperative diagnosis: {preoperative_diagnosis}</p> 
        <p>Postoperative diagnosis: {postoperative_diagnosis}</p>   
        <p>Procedure: {procedure}</p> 
        <p>Surgeon: {provider_header}</p>
        <p>Assistants: {assistants}</p> 
        <p>Anesthesiologist: {anesthesiologist}</p>
        <p>Anesthesia: {anesthesia}</p>
        <p>Fluids: {fluids}</p>
        <p>Estimated blood loss: {estimated_blood_loss}</p>
        <p>Description of operation:</p>
        <p>{description}</p>
        <p>Complications: {complications}</p>
        <p className='signature'>Written by {provider_header}</p>
        <p className='signature'>Created: {displayDate(created_at)} || Last updated: {displayDate(updated_at)}</p>
      </div>
    )
    const [showEdit, setShowEdit] = useState(false)
  return (
    <div>
        {showEdit ? null : template}
        <button onClick={()=>setShowEdit(!showEdit)}>{showEdit? "Show operative report": "Edit operative report"}</button>
        {showEdit? <EditOperativeReport operation={operation} display={setShowEdit} operativeReports={operativeReports} setOperativeReports={setOperativeReports}/>: null}
        <DeleteRecord 
          record={operation} 
          typeOfRecord={"operative_reports"} 
          nameOfRecord={"operative report"} 
          records={operativeReports} 
          recordsSetter={setOperativeReports}
        />        
        <PrintComponent template={template}/>     
    </div>
  )
}

export default ShowOperativeReport