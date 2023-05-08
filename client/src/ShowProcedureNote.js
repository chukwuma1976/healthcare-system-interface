import React, {useState, useContext} from 'react'
import EditProcedureNote from './EditProcedureNote'
import DeleteRecord from './DeleteRecord'
import { UserContext } from './User'
import PrintComponent from './PrintComponent'

function ShowProcedureNote({procedure, procedureNotes, setProcedureNotes}) {
    const {displayDate} = useContext(UserContext)
    const {patient_header, indications, anesthesia, description, complications, provider_header, created_at,updated_at } = procedure
    const template = (
      <div className='record'>
        <h3 className='patient'>Procedure Note</h3>
        <h6 className='patient'>{patient_header}</h6>
        <p>Indications: {indications}</p>
        <p>Anesthesia: {anesthesia}</p>
        <p>Description: </p>
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
        <button onClick={()=>setShowEdit(!showEdit)}>{showEdit? "Show procedure note": "Edit procedure note"}</button>
        {showEdit? <EditProcedureNote procedure={procedure} display={setShowEdit} procedureNotes={procedureNotes} setProcedureNotes={setProcedureNotes}/>: null}
        <DeleteRecord 
              record={procedure} 
              typeOfRecord={"procedure_notes"} 
              nameOfRecord={"procedure note"} 
              records={procedureNotes} 
              recordsSetter={setProcedureNotes}
        />   
        <PrintComponent template={template}/>  
    </div>
  )
}

export default ShowProcedureNote