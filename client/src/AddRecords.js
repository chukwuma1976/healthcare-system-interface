import React, {useContext, useState} from 'react'
import {NavLink} from 'react-router-dom'
import { UserContext } from './User'
import UpdatePatient from './UpdatePatient'
import EditImageInPatient from './EditImageInPatient'

function AddRecords({patient}) {
    const {user} = useContext(UserContext)
    const [thisPatient, setThisPatient] = useState(patient)
    const [display, setDisplay] = useState(false)
    const [wantImage, setWantImage] = useState(false)
  return (
    <div className="container nav flex-column">
        <h5>
          {user.first_name} {user.last_name} add a record for {thisPatient.first_name} {thisPatient.last_name} by clicking a choice below
        </h5>
        <NavLink className="d-grid gap-2" to={`/add_soap_note/${patient.id}/${thisPatient.chart.id}`} style={{color: 'blue'}}>
          <button className="btn btn-outline-primary">Add a SOAP note</button>
        </NavLink>
        <NavLink className="d-grid gap-2" to={`/add_history/${patient.id}/${thisPatient.chart.id}`} style={{color: 'blue'}}>
          <button className="btn btn-outline-primary">Add a history and physical</button>
        </NavLink>
        <NavLink className="d-grid gap-2" to={`/add_consult/${patient.id}/${thisPatient.chart.id}`} style={{color: 'blue'}}>
          <button className="btn btn-outline-primary">Add a consult</button>
        </NavLink>
        <NavLink className="d-grid gap-2" to={`/add_discharge_note/${patient.id}/${thisPatient.chart.id}`} style={{color: 'blue'}}>
          <button className="btn btn-outline-primary">Add a discharge summary</button>
        </NavLink>
        <NavLink className="d-grid gap-2" to={`/add_operative_report/${patient.id}/${thisPatient.chart.id}`} style={{color: 'blue'}}>
          <button className="btn btn-outline-primary" >Add an operative report</button>
        </NavLink>
        <NavLink className="d-grid gap-2" to={`/add_procedure_note/${patient.id}/${thisPatient.chart.id}`} style={{color: 'blue'}}>
          <button className="btn btn-outline-primary">Add a brief procedure note</button>
        </NavLink>
        <button type='button' className="btn btn-secondary" onClick={()=>setDisplay(true)}>Update Patient Information</button>
        <UpdatePatient 
          thisPatient={thisPatient} 
          setPatient={setThisPatient} 
          display={display} 
          setDisplay={setDisplay} 
          closeDisplay={()=>setDisplay(false)} 
        />  
        <button type='button' className="btn btn-info" onClick={()=>setWantImage(!wantImage)}>Add or Edit Image for Patient</button>     
        <EditImageInPatient thisPatient={thisPatient} display={wantImage} setDisplay={setWantImage} />
        <br /> 
    </div>
  )
}

export default AddRecords