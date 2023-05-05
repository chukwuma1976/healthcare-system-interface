import React, {useContext, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from './User';
import Clock from './Clock';

function HomePage() {
    const {user, today, displayDate, displayTime} = useContext(UserContext)
    const {username, first_name, middle_name, last_name, type_of_provider, department} = user
    const [displayProfile, setDisplayProfile] = useState(false)
    return (
        <div className='home-page'>
            <Clock />
            <h1>Hello {first_name} {last_name}, Welcome to the Healthcare System Interface (HCSI) </h1>
            <button onClick={()=>setDisplayProfile(!displayProfile)}>
               {!displayProfile?  `${first_name} Click To See Profile` : 'Hide Profile'}
            </button>
            <br/>
            <br/>
            {!displayProfile ? null :
            <div className='card'>
                <h4 className='card-header'>Full Name: {first_name} {middle_name} {last_name}</h4>
                <p>Username: {username}</p>
                <p>Type of Provider: {type_of_provider}</p>
                <p>Department: {department}</p>
            </div>
            }
            <h2>Please feel free to navigate to other parts of this app and start managing your patient records</h2>
            <br/>
            <NavLink to="/providers" style={{color: 'blue'}}>
                <button>Providers</button>
            </NavLink>
            <NavLink to="/appointments" style={{color: 'blue'}}>
                <button>Appointments</button>
            </NavLink>
            <NavLink to="/patient_records" style={{color: 'blue'}}>
                <button>Patient Records</button>
            </NavLink>
            <NavLink to="/signout" style={{color: 'blue'}}>
                <button>Log Out</button>
            </NavLink>
        </div>
    )
}

export default HomePage