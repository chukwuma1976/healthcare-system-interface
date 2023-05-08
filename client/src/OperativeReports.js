import React, {useState} from 'react'
import ShowOperativeReport from './ShowOperativeReport'

function OperativeReports({operative_reports}) {
    const [display, setDisplay] = useState(false)
    const [operativeReports, setOperativeReports] = useState(operative_reports)
    const operations = operativeReports.map(operation=>
      <ShowOperativeReport key={operation.id} operation={operation} operativeReports={operativeReports} setOperativeReports={setOperativeReports}/>)
  return (
    <div className="d-grid gap-2">
        <button type="button" class="btn btn-info" onClick={()=>setDisplay(!display)}>
          Operative Reports
          <span class="badge text-bg-secondary"> {operative_reports.length}</span>
        </button>
        {display? operations : null}
    </div>
  )
}

export default OperativeReports