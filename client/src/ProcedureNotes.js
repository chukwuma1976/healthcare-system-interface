import React, {useState} from 'react'
import ShowProcedureNote from './ShowProcedureNote'

function ProcedureNotes({procedure_notes}) {
    const [display, setDisplay] = useState(false)
    const [procedureNotes, setProcedureNotes] = useState(procedure_notes)
    const procedures = procedureNotes.map(procedure=>
      <ShowProcedureNote key={procedure.id} procedure={procedure} procedureNotes={procedureNotes} setProcedureNotes={setProcedureNotes}/>)
  return (
    <div className="d-grid gap-2">
        <button type="button" class="btn btn-primary" onClick={()=>setDisplay(!display)}>
          Procedure Notes
          <span class="badge text-bg-secondary"> {procedure_notes.length}</span>
        </button>
        {display ? procedures : null}
    </div>
  )
}

export default ProcedureNotes