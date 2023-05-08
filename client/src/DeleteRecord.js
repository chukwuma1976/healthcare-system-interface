import React, {useState, useContext} from 'react'
import { UserContext } from './User'

function DeleteRecord({record, typeOfRecord, nameOfRecord, records, recordsSetter}) {
    const [wantToDelete, setWantToDelete] = useState(false)
    const {user} = useContext(UserContext)
    function deleteRecord(){
        fetch(`/patients/${record.patient_id}/${typeOfRecord}/${record.id}`, {
            method: 'DELETE'
        })
        recordsSetter(records.filter(element=>element.id!==record.id))
    }

  if (record.provider_id!==user.id) {
        return <div>
                <button disabled aria-label="Close"><s>Delete {nameOfRecord}</s></button>
            </div>
        }
  return (
    <div>
        <button onClick={()=>setWantToDelete(true)}>Delete {nameOfRecord}</button>
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

export default DeleteRecord