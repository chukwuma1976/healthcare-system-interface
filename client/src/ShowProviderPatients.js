import React, {useState} from 'react'

function ShowProviderPatients({provider}) {
    const [showPatients, setShowPatients] = useState(false)
    const patientList = provider.patient_list.map(patient=><li key={patient}>{patient}</li>)
  return (
    <div className ='card'>
        <p className ='card-header text-bg-primary mb-3' onClick={()=>setShowPatients(!showPatients)} >
          {provider.last_name}, {provider.first_name} || {provider.type_of_provider} || Department: {provider.department}
        </p>
        <ol>
          {showPatients? patientList: null}
        </ol>       
    </div>
  )
}

export default ShowProviderPatients