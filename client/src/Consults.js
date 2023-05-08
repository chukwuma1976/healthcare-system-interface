import React, {useState} from 'react'
import ShowConsult from './ShowConsult'

function Consults({consults}) {
    const [display, setDisplay] = useState(false)
    const [consulted, setConsulted] = useState(consults)
    const consultList = consulted.map(consult=><ShowConsult key={consult.id} consult={consult} consulted={consulted} setConsulted={setConsulted}/>)
  return (
    <div className="d-grid gap-2">
        <button type="button" class="btn btn-primary" onClick={()=>setDisplay(!display)}>
          Consults 
          <span class="badge text-bg-secondary"> {consults.length}</span>
        </button>
        {display ? consultList : null}
    </div>
  )
}

export default Consults