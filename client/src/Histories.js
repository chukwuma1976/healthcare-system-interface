import React , {useState} from 'react'
import ShowHistory from './ShowHistory'

function Histories({history_and_physicals}) {
    const [display, setDisplay] = useState(false)
    const [histories, setHistories] = useState(history_and_physicals)
    const historiesList = histories.map((history=>
        <ShowHistory key={history.id} history={history} histories={histories} setHistories={setHistories}/>))
  return (
    <div className="d-grid gap-2">
        <button type ="button" className="btn btn-info" onClick={()=>setDisplay(!display)}>
          History and Physicals
          <span className="badge text-bg-secondary">{history_and_physicals.length}</span>
        </button>
        {display? historiesList : null}
    </div>
  )
}

export default Histories