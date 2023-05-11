import React, {useContext, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from './User';
import Clock from './Clock';

function HomePage() {
    const {user} = useContext(UserContext)
    const {username, first_name, middle_name, last_name, type_of_provider, department} = user
    const [displayProfile, setDisplayProfile] = useState(false)
    return (
        <div className='home-page'>
            <Clock />
            <h1>Hello {first_name} {last_name}, Welcome to the Healthcare System Interface (HCSI) </h1>
            <button className="btn btn-dark" onClick={()=>setDisplayProfile(!displayProfile)}>
               {!displayProfile?  `${first_name} Click To See Profile` : 'Hide Profile'}
            </button>
            <br/>
            <br/>
            {!displayProfile ? null :
            <div className='card'>
                <h4 className='card-header text-bg-secondary mb-3'>Full Name: {first_name} {middle_name} {last_name}</h4>
                <p><b>Username:</b> {username}</p>
                <p><b>Type of Provider:</b> {type_of_provider}</p>
                <p><b>Department:</b> {department}</p>
            </div>                       
            }
            <h2>Please feel free to navigate to other parts of this app and start managing your patient records</h2>
            <br/>
            <NavLink to="/health_care_providers" >
                <button className="btn btn-info">Providers</button>
            </NavLink>
            <NavLink to="/patient_appointments" >
                <button className="btn btn-info">Appointments</button>
            </NavLink>
            <NavLink to="/patient_records" >
                <button className="btn btn-info">Patient Records</button>
            </NavLink>
            <NavLink to="/signout" >
                <button className="btn btn-info">Log Out</button>
            </NavLink>
        </div>
    )
}

export default HomePage