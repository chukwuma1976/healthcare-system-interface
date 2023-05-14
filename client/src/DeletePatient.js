import React, {useState} from 'react'

function DeletePatient({patient, patients, setPatients}) {
    const [wantToDelete, setWantToDelete] = useState(false)
    function deleteRecord(){
        fetch(`/patients/${patient.id}`, {
            method: 'DELETE'
        })
        setPatients(patients.filter(element=>element.id!==patient.id))
    }
  return (
    <div>
        <button onClick={()=>setWantToDelete(true)}>Click to delete {patient.first_name} {patient.last_name}</button>
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