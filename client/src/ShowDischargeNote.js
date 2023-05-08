import React, {useContext,  useState} from 'react'
import { UserContext } from './User'
import EditDischargeNote from './EditDischargeNote'
import DeleteRecord from './DeleteRecord'
import PrintComponent from './PrintComponent'

function ShowDischargeNote({discharge, dischargeNotes, setDischargeNotes}) {
    const { displayDate } = useContext(UserContext)
    const {
        patient_header,
        date_of_admission,
        date_of_discharge,
        admission_diagnosis,
        discharge_diagnosis,
        procedures_performed,
        hospital_course,
        discharge_medications,
        discharge_instructions,
        follow_up,
        provider_header,
        created_at,
        updated_at 
    } = discharge
    const template = (
      <div className='record'>
        <h3 className='patient'>Discharge Summary</h3>
        <h6 className='patient'>{patient_header}</h6>
        <p>Date of admission: {displayDate(date_of_admission)} </p>
        <p>Date of discharge: {displayDate(date_of_discharge)}</p>
        <p>Admission diagnosis: {admission_diagnosis}</p>
        <p>Discharge diagnosis: {discharge_diagnosis}</p>
        <p>Procedures performed: {procedures_performed}</p>
        <p>Hospital course: {hospital_course}</p>
        <p>Discharge medications: {discharge_medications}</p>
        <p>Discharge instructions: {discharge_instructions}</p>
        <p>Follow up: {follow_up}</p>
        <p className='signature'>Written by {provider_header}</p>
        <p className='signature'>Created: {displayDate(created_at)} || Last updated: {displayDate(updated_at)}</p>
      </div>
    )
    const [showEdit, setShowEdit] = useState(false)
  return (
    <div>
        {showEdit ? null : template}
        <button onClick={()=>setShowEdit(!showEdit)}>{showEdit? "Show discharge summary": "Edit discharge summary"}</button>
        {showEdit? <EditDischargeNote discharge={discharge} display={setShowEdit} dischargeNotes={dischargeNotes} setDischargeNotes={setDischargeNotes}/>: null}
        <DeleteRecord 
          record={discharge} 
          typeOfRecord={"discharge_notes"} 
          nameOfRecord={"discharge note"} 
          records={dischargeNotes} 
          recordsSetter={setDischargeNotes}
        />
        <PrintComponent template={template}/>    
    </div>
  )
}

export default ShowDischargeNote