import React, {useState, useContext} from 'react'
import { UserContext } from './User';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useParams, useNavigate } from 'react-router-dom';

function UpdatePatient() {
    const {patientId} = useParams()
    const navigate = useNavigate()
    const { patients, setPatients } = useContext(UserContext)
    const [birthDate, setBirthDate] = useState(new Date())
    const [phoneNumber, setPhoneNumber] = useState()
    const [errors, setErrors] = useState([])
    const currentPatient = patients.find(patient=>patient.id === parseInt(patientId))
    const [patient, setPatient] = useState({
        first_name: currentPatient.first_name,
        middle_name: currentPatient.middle_name,
        last_name: currentPatient.last_name,
        birth_date: currentPatient.birth_date,
        sex: currentPatient.sex,
        image: currentPatient.image,
        address: currentPatient.address,
        phone_number: currentPatient.phone_number,
        email_address: currentPatient.email_address,
        insurance: currentPatient.insurance
    })
 
    const {
        first_name, 
        middle_name, 
        last_name,  
        address, 
        email_address, 
        insurance
    } = patient

    function handleChange(event){
        if (event.target.name==="image"){
            setPatient({...patient, image: URL.createObjectURL(event.target.files[0])})
        } else {
            setPatient({...patient, [event.target.name]:event.target.value})
        }
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
        setPatient({...patient, birth_date:date})
    }
    function addPhoneNumber(number){
        setPhoneNumber(number)
        setPatient({...patient, phone_number:number})
    }
    function handleSubmit(event){
        event.preventDefault()
        fetch(`/patients/${patientId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(patient)
        })
        .then(res=>{
            if (res.ok){
                res.json().then(handleUpdate)
                navigate('/appointments')
            } else {res.json().then(error=>setErrors(error.errors))}
        })
    }
  return (
    <div>
        <h3>Please enter information below to update {currentPatient.first_name} {currentPatient.last_name}'s profile</h3>
        <form class="form" onSubmit={handleSubmit}>
            {errors.map(error=><p key={error}>{error}</p>)}
            <label>Update first name</label>
                <input type="text" name="first_name" value={first_name} onChange={handleChange}/>
            <label>Update middle name</label>
                <input type="text" name="middle_name" value={middle_name} onChange={handleChange}/>
            <label>Update last name</label>
                <input type="text" name="last_name" value={last_name} onChange={handleChange}/>
            <label>Update sex</label>
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
            <label>Update image</label>
                <input type="file"  name="image" accept="image/*" onChange={handleChange}/>
            <br />
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
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UpdatePatient