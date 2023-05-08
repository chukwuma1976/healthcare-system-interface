import React, {useContext, useState, useEffect} from 'react'
import {useParams, NavLink} from 'react-router-dom'
import { UserContext } from './User'
import UpdatePatient from './UpdatePatient'

function AddRecords() {
    const {patientId} = useParams()
    const {user} = useContext(UserContext)
    const [thisPatient, setThisPatient] = useState({})
    const [display, setDisplay] = useState(false)
    useEffect(()=>{
      fetch(`/patients/${patientId}`)
      .then(res=>res.json())
      .then(setThisPatient)
    },[])
  return (
    <div className="nav flex-column">
        <h4>
          {user.first_name} {user.last_name} add a record for {thisPatient.first_name} {thisPatient.last_name} by clicking a choice below
        </h4>
        <NavLink className="d-grid gap-2" to={`/add_soap_note/${patientId}/${thisPatient.chart_id}`} style={{color: 'blue'}}>
          <button>Add a SOAP note</button>
        </NavLink>
        <NavLink className="d-grid gap-2" to={`/add_history/${patientId}/${thisPatient.chart_id}`} style={{color: 'blue'}}>
          <button>Add a history and physical</button>
        </NavLink>
        <NavLink className="d-grid gap-2" to={`/add_consult/${patientId}/${thisPatient.chart_id}`} style={{color: 'blue'}}>
          <button>Add a consult</button>
        </NavLink>
        <NavLink className="d-grid gap-2" to={`/add_discharge_note/${patientId}/${thisPatient.chart_id}`} style={{color: 'blue'}}>
          <button>Add a discharge summary</button>
        </NavLink>
        <NavLink className="d-grid gap-2" to={`/add_operative_report/${patientId}/${thisPatient.chart_id}`} style={{color: 'blue'}}>
          <button >Add an operative report</button>
        </NavLink>
        <NavLink className="d-grid gap-2" to={`/add_procedure_note/${patientId}/${thisPatient.chart_id}`} style={{color: 'blue'}}>
          <button>Add a brief procedure note</button>
        </NavLink>
        <button type='button' className="d-grid gap-2" onClick={()=>setDisplay(true)}>Update Patient Information</button>
        <UpdatePatient currentPatient={thisPatient} display={display} setDisplay={setDisplay} closeDisplay={()=>setDisplay(false)}/>
        <NavLink to="/appointments" style={{color: 'blue'}}>
          <button>Back to Appointments</button>
        </NavLink> 
        <br /> 
    </div>
  )
}

export default AddRecords