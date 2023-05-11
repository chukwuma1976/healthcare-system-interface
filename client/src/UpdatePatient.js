import React, {useState, useContext} from 'react'
import { UserContext } from './User';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function UpdatePatient({thisPatient, setPatient, display, setDisplay, closeDisplay}) {
    const { patients, setPatients } = useContext(UserContext)
    const [birthDate, setBirthDate] = useState(new Date())
    const [phoneNumber, setPhoneNumber] = useState()
    // const [image, setImage] = useState('')
    const [errors, setErrors] = useState([])
    const patient = {
        first_name: thisPatient.first_name,
        middle_name: thisPatient.middle_name,
        last_name: thisPatient.last_name,
        birth_date: thisPatient.birth_date,
        sex: thisPatient.sex,
        image: thisPatient.image,
        address: thisPatient.address,
        phone_number: thisPatient.phone_number,
        email_address: thisPatient.email_address,
        insurance: thisPatient.insurance
    }
 
    const {
        first_name, 
        middle_name, 
        last_name,  
        address, 
        email_address, 
        insurance
    } = patient

    function handleChange(event){
        setPatient({...thisPatient, [event.target.name]:event.target.value})
    }
    function handleUpdate(updatedPatient) {
        const updated = patients.map(patient=>{
            if (patient.id===updatedPatient.id) return updatedPatient
                else return patient
        })
        setPatients(updated)
    }
    function addBirthDate(date){
        setBirthDate(date)
        setPatient({...thisPatient, birth_date:date})
    }
    function addPhoneNumber(number){
        setPhoneNumber(number)
        setPatient({...thisPatient, phone_number:number})
    }
    // function addImage(){
    //     const formData = new FormData()
    //     formData.append('image', image)

    //     fetch(`/patients/${thisPatient.id}`, {
    //         method: 'PATCH',
    //         body: formData
    //     })
    //     .then(res=>res.json())
    //     .then(data=>handleUpdate(data))
    // }
    function handleSubmit(event){
        event.preventDefault()
        console.log('patient', patient, 'this patient', thisPatient)
        fetch(`/patients/${thisPatient.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(patient)
        })
        .then(res=>{
            if (res.ok){
                res.json().then(handleUpdate)
                setDisplay(false)
                // addImage()
            } else {res.json().then(error=>setErrors(error.errors))}
        })
    }
    if (!display) return null
  return (
    <div>
        <form className="form" id="patient-update" onSubmit={handleSubmit}>
            <button className="btn btn-outline-primary" onClick={closeDisplay}>Click to close</button>
            <h5>
                Please enter information below to update {thisPatient.first_name} {thisPatient.last_name}'s profile
            </h5>
            {errors.map(error=><p key={error}>{error}</p>)}
            <label>Update first name</label>
                <input type="text" name="first_name" value={first_name} onChange={handleChange}/>
            <br/>
            <label>Update middle name</label>
                <input type="text" name="middle_name" value={middle_name} onChange={handleChange}/>
            <br/>
            <label>Update last name</label>
                <input type="text" name="last_name" value={last_name} onChange={handleChange}/>
            <br/>
            <label>Update sex</label>
            <br/>
            <select onChange={(e)=>setPatient({...patient, sex:e.target.value})}>
                <option></option>
                <option value="M">M</option>
                <option value="F">F</option>
                <option value="O">Other (O)</option>
            </select>
            <br />
            <label>Update date of birth</label>
            <DatePicker 
                showIcon
                selected={birthDate} 
                onChange={(date)=>addBirthDate(date)}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showYearDropdown
                showMonthDropdown
            />
            {/* <label>Update image</label>
                <input type="file"  name="image" accept="image/*" onChange={handleChange}/>
            <br /> */}
            <label>Update address</label>
                <input type="text" name="address" value={address} onChange={handleChange}/>
            <br />
            <label>Update phone number</label>
            <PhoneInput
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={addPhoneNumber}
                defaultCountry="US"
            />
            <label>Update email address</label>
                <input type="text" name="email_address" value={email_address} onChange={handleChange}/>
            <br />
            <label>Update name of insurance</label>
                <input type="text" name="insurance" value={insurance} onChange={handleChange}/>
            <br />
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UpdatePatient