import React, {useContext} from 'react'
import {useParams, NavLink} from 'react-router-dom'
import { UserContext } from './User'

function AddRecords() {
    const {patientId} = useParams()
    const {patients, user} = useContext(UserContext)
    const thisPatient = patients.find(patient => patient.id === parseInt(patientId))
  return (
    <div>
        <h4>
          {user.first_name} {user.last_name} add a record for {thisPatient.first_name} {thisPatient.last_name} by clicking on a button below
        </h4>
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