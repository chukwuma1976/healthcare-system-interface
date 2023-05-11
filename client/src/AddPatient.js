import React, {useState, useContext} from 'react'
import { UserContext } from './User';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import AppointmentForm from './AppointmentForm';
import AddImageToPatient from './AddImageToPatient'

function AddPatient() {
    const { patients, setPatients } = useContext(UserContext)
    const [birthDate, setBirthDate] = useState(new Date())
    const [phoneNumber, setPhoneNumber] = useState()
    const [makeAppointment, setMakeAppointment] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState([])
    const [patient, setPatient] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        birth_date: new Date(),
        sex: '',
        image: '',
        address: '',
        phone_number: '',
        email_address: '',
        insurance: ''
    })
    const {
        first_name, 
        middle_name, 
        last_name,  
        address, 
        email_address, 
        insurance,
    } = patient

    function handleChange(event){
        setPatient({...patient, [event.target.name]:event.target.value})
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
        fetch('/patients', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(patient)
        })
        .then(res=>{
            if (res.ok){
                res.json().then(patient=>{
                    setPatients([...patients, patient])
                    setPatient(patient)                   
                    setSuccess(true)
                })
            } else {res.json().then(error=>setErrors(error.errors))}
        })
    }
  return (
    <div>
        <h3>Please enter information below</h3>
        <form className="form" onSubmit={handleSubmit}>
            {errors.map(error=><p key={error}>{error}</p>)}
            <label>First name: </label>
                <input className='patient-name' type="text" name="first_name" value={first_name} onChange={handleChange}/>
            <label>Middle name: </label>
                <input className='patient-name' type="text" name="middle_name" value={middle_name} onChange={handleChange}/>
            <label>Last name:</label>
                <input className='patient-name' type="text" name="last_name" value={last_name} onChange={handleChange}/>
            <br />
            <label>Select a sex</label>
            <select onChange={(e)=>setPatient({...patient, sex:e.target.value})}>
                <option></option>
                <option value="M">M</option>
                <option value="F">F</option>
                <option value="O">Other (O)</option>
            </select>
            <br />
            <label>Enter date of birth</label>
            <DatePicker 
                showIcon
                selected={birthDate} 
                onChange={(date)=>addBirthDate(date)}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy"
                showYearDropdown
                showMonthDropdown
            />
            <label>Enter address</label>
                <input type="text" name="address" value={address} onChange={handleChange}/>
            <br />
            <label>Enter phone number</label>
            <PhoneInput
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={addPhoneNumber}
                defaultCountry="US"
            />
            <label>Enter email address</label>
                <input type="text" name="email_address" value={email_address} onChange={handleChange}/>
            <br />
            <label>Enter name of insurance</label>
                <input type="text" name="insurance" value={insurance} onChange={handleChange}/>
            <br />
            <button type="submit">Submit</button>
        </form>
            {!success ? null :                 
            <div className="card">
                <h5 class="alert alert-success" role="alert">You have added {patient.first_name} {patient.last_name} as a patient</h5>
                <AddImageToPatient thisPatient={patient} />
                <button className="d-grid gap-2" onClick={()=>setMakeAppointment(!makeAppointment)}>
                    {!makeAppointment? "Click to make an appointment" : "Hide appointment form"}
                </button>
                {makeAppointment? <AppointmentForm patientId={patient.id} setDisplay={setMakeAppointment}/> : null}
            </div>
            } 
    </div>
  )
}

export default AddPatient