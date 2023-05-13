import React, {useState} from 'react'

function DeletePatient({patient, patients, setPatients}) {
    const [wantToDelete, setWantToDelete] = useState(false)
    function deleteRecord(){
        fetch(`/patients/${patient.id}`, {
            method: 'DELETE'
        })
        setPatients(patients.filter(element=>element.id!==patient.id))
    }

    // if (record.provider_id!==user.id) {
    //     return <div>
    //             <button onClick={()=>setWantToDelete(true)}>Delete {patient.first_name} {patient.last_name}</button>
    //         </div>
    //     }
  return (
    <div>
        <button onClick={()=>setWantToDelete(true)}>Delete {patient.first_name} {patient.last_name} chart {patient.chart ? patient.chart.id:'none'}</button>
        <br/>
        {!wantToDelete ? null : 
        <div>
            <p>Are you sure?</p>
            <button onClick={()=>deleteRecord()}>Yes</button>  
            <button onClick={()=>setWantToDelete(false)}>No</button>
        </div>}

    </div>
  )
}

export default DeletePatient