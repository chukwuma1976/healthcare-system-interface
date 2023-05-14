import React, { useState } from 'react'

function DeleteAppointment({appointment, appointments, setAppointments} = undefined) {
    const [wantToDelete, setWantToDelete] = useState(false)

    function deleteAppointment(){
        fetch(`/appointments/${appointment.id}`, {
          method: 'DELETE'
        })
        setAppointments(appointments.filter(appt=>appt.id !== appointment.id))
      }
  return (
    <div>
        <button className="btn btn-primary" onClick={()=>setWantToDelete(true)}>Click to delete appointment</button>
        <br/>
        {!wantToDelete ? null : 
        <div>
            <p>Are you sure?</p>
            <button className="btn btn-danger" onClick={()=>deleteAppointment()}>Yes</button>  
            <button className="btn btn-info" onClick={()=>setWantToDelete(false)}>No</button>
        </div>}

    </div>
  )
}

export default DeleteAppointment