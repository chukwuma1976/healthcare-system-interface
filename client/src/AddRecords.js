import React from 'react'
import {useParams, NavLink} from 'react-router-dom'

function AddRecords() {
    const {patientId}=useParams()
  return (
    <div>
        <p>AddRecords {patientId}</p>
        <NavLink to={`/add_soap_note/${patientId}`} style={{color: 'blue'}}>
          <button>Add a SOAP note</button>
        </NavLink>
        <NavLink to={`/add_history/${patientId}`} style={{color: 'blue'}}>
          <button>Add a history and physical</button>
        </NavLink>
        <NavLink to={`/add_consult/${patientId}`} style={{color: 'blue'}}>
          <button>Add a consult</button>
        </NavLink>
        <NavLink to={`/add_discharge_note/${patientId}`} style={{color: 'blue'}}>
          <button>Add a discharge summary</button>
        </NavLink>
        <NavLink to={`/add_operative_report/${patientId}`} style={{color: 'blue'}}>
          <button>Add an operative report</button>
        </NavLink>
        <NavLink to={`/add_procedure_note/${patientId}`} style={{color: 'blue'}}>
          <button>Add a brief procedure note</button>
        </NavLink>
        <NavLink to="/appointments" style={{color: 'blue'}}>
          <button>Back to Appointments</button>
        </NavLink> 
        <br /> 
    </div>
  )
}

export default AddRecords