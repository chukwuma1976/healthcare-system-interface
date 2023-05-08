import React, {useState} from 'react'
import ShowProgressNote from './ShowProgressNote'

function ProgressNotes({progress_notes}) {
    const [display, setDisplay] = useState(false)
    const [progressNotes, setProgressNotes] = useState(progress_notes)
    const notes = progressNotes.map(note => 
      <ShowProgressNote key={note.id} note={note} progressNotes={progressNotes} setProgressNotes={setProgressNotes}/>)
  return (
    <div className="d-grid gap-2">
        <button type="button" class="btn btn-primary" onClick={()=>setDisplay(!display)}>
          Progress Notes
          <span class="badge text-bg-secondary"> {progress_notes.length}</span>
        </button>
        {display ? notes : null}
    </div>
  )
}

export default ProgressNotes