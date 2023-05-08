import React, {useState} from 'react'
import ShowDischargeNote from './ShowDischargeNote'

function DischargeNotes({discharge_notes}) {
    const [display, setDisplay] = useState(false)
    const [dischargeNotes, setDischargeNotes] = useState(discharge_notes)
    const discharges = dischargeNotes.map(discharge=>
      <ShowDischargeNote key={discharge.id} discharge={discharge} dischargeNotes={dischargeNotes} setDischargeNotes={setDischargeNotes}/>)
  return (
    <div className="d-grid gap-2">
        <button type="button" class="btn btn-info" onClick={()=>setDisplay(!display)}>
          Discharge Summaries
          <span class="badge text-bg-secondary"> {discharge_notes.length}</span>
        </button>
        {display ? discharges : null}
    </div>
  )
}

export default DischargeNotes