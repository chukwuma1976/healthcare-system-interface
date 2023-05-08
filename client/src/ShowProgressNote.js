import React, {useState, useContext} from 'react'
import EditProgressNote from './EditProgressNote'
import DeleteRecord from './DeleteRecord'
import PrintComponent from './PrintComponent'
import { UserContext } from './User'

function ShowProgressNote({note, progressNotes, setProgressNotes}) {
    const {displayDate} = useContext(UserContext)
    const {patient_header, subjective, objective, assessment, plan, provider_header, created_at, updated_at} = note
    const [showEdit, setShowEdit] = useState(false)
    const template = (
      <div className='record'>
        <h3 className='patient'>Progress note</h3>
        <h6 className='patient'>{patient_header}</h6>
        <p>Subjective: {subjective}</p>
        <p>Objective: {objective}</p>
        <p>Assessment: {assessment}</p>
        <p>Plan: {plan}</p>    
        <p className='signature'>Written by {provider_header}</p>
        <p className='signature'>Created: {displayDate(created_at)} || Last updated: {displayDate(updated_at)}</p>          
    </div>
    )
  return (
    <div>
        {showEdit ? null : template}
        <button onClick={()=>setShowEdit(!showEdit)}>{showEdit? "Show progress note": "Edit progress note"}</button>
        {showEdit? <EditProgressNote progressNote={note} display={setShowEdit} progressNotes={progressNotes} setProgressNotes={setProgressNotes} />: null}
        <DeleteRecord record={note} typeOfRecord={"progress_notes"} nameOfRecord={"progress note"} records={progressNotes} recordsSetter={setProgressNotes}/>
        <PrintComponent template={template}/>
    </div>
  )
}

export default ShowProgressNote