import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from './User'
import DisplayPatientRecords from './DisplayPatientRecords'
import FilterByName from './FilterByName'

function PatientRecords() {
    const [providersPatients, setProvidersPatients] = useState([])
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [all, setAll] = useState(true)
    const {user, patients} = useContext(UserContext)
    const viewedPatients = all? patients : providersPatients
    useEffect(()=>{
        fetch(`/providers/${user.id}/patients`)
        .then(res=>res.json())
        .then(setProvidersPatients)
    }, [])   
    
    const filteredbyLastName = viewedPatients.filter(patient=>patient.last_name.toLowerCase().includes(lastName))
    const filteredbyFirstAndLastName = filteredbyLastName.filter(patient=>patient.first_name.toLowerCase().includes(firstName))
    const patientList = filteredbyFirstAndLastName.map(patient=><DisplayPatientRecords key={patient.id} patient={patient} />)
    return (
    <div className='container'>
        <h5>Click on a patient name to view chart</h5>
        <div className="d-flex justify-content-start">
            <FilterByName name={firstName} setName={setFirstName} filter={"first name"}/>
            <FilterByName name={lastName} setName={setLastName} filter={"last name"}/>
            <button type="button" className="btn">
                <b>{all? "Displaying all patients":"Displaying your patients"}</b>
                <span className="badge text-bg-secondary">{viewedPatients.length}</span>
            </button>
            <button className="btn btn-info" onClick={()=>setAll(!all)} >
                {all? "View your patients records" : "View all patients records"}
            </button>
        </div>
        {patientList}
    </div>
  )
}

export default PatientRecords