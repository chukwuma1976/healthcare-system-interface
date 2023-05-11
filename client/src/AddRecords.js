import React, {useContext, useState, useEffect} from 'react'
import {useParams, NavLink} from 'react-router-dom'
import { UserContext } from './User'
import UpdatePatient from './UpdatePatient'
import EditImageInPatient from './EditImageInPatient'

function AddRecords() {
    const {patientId} = useParams()
    const {user} = useContext(UserContext)
    const [thisPatient, setThisPatient] = useState({})
    const [display, setDisplay] = useState(false)
    const [wantImage, setWantImage] = useState(false)
    useEffect(()=>{
      fetch(`/patients/${patientId}`)
      .then(res=>res.json())
      .then(setThisPatient)
    },[])
  return (
    <div className="container nav flex-column">
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
        <UpdatePatient 
          thisPatient={thisPatient} 
          setPatient={setThisPatient} 
          display={display} 
          setDisplay={setDisplay} 
          closeDisplay={()=>setDisplay(false)} 
        />  
        <button type='button' className="d-grid gap-2" onClick={()=>setWantImage(!wantImage)}>Add or Edit Image for Patient</button>     
        <EditImageInPatient thisPatient={thisPatient} display={wantImage} setDisplay={setWantImage} />
        <NavLink to="/appointments" style={{color: 'blue'}}>
          <button className="btn btn-primary">Back to Appointments</button>
        </NavLink> 
        <br /> 
    </div>
  )
}

export default AddRecords