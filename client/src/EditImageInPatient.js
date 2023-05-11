import React, {useState, useContext} from 'react'
import { UserContext } from './User';

function EditImageInPatient({thisPatient, display, setDisplay}) {
    const { patients, setPatients } = useContext(UserContext)
    const [image, setImage] = useState('')
    const [error, setError] = useState(null)

    function handleChange(event){
        setImage(event.target.files[0])
    }
    function handleUpdate(newImage) {
        const updatedPatient = {...thisPatient, picture: {...newImage}}
        const updated = patients.map(patient=>{
            if (patient.id===thisPatient.id) return updatedPatient
                else return patient
        })
        setPatients(updated)
    }

    function handleSubmitImage(event){
        event.preventDefault()
        const formData = new FormData()
        formData.append('image', image)

        if (thisPatient.picture){
            // changes existing image
            fetch(`/patients/${thisPatient.id}/pictures/${thisPatient.picture.id}`, {
                method: 'PATCH',
                body: formData
            })
            .then(res=>{
                if (res.ok){
                    res.json().then(handleUpdate)
                    alert('image updated')
                    setDisplay(false)
                } else {res.json().then(error=>setError('Error updating image'))}
            })
        } else {
            // adds image that was previously non existent
            fetch(`/patients/${thisPatient.id}/pictures`, {
                method: 'POST',
                body: formData
            })
            .then(res=>{
                if (res.ok){
                    res.json().then(handleUpdate)
                    alert('image added')
                    setDisplay(false)
                } else {res.json().then(error=>setError(error.errors))}
            })           
        }
    }
    if (!display) return null
  return (
    <div>
        <form className="form" id='image-update' onSubmit={handleSubmitImage}>
            {error? <p >{error}</p> : null}
            <label><b>Edit or add an image to {thisPatient.first_name} {thisPatient.last_name}'s profile</b></label>
                <input type="file"  name="image" accept="image/*" onChange={handleChange}/>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default EditImageInPatient