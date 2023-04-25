import React, {useContext, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from './User';

function HomePage() {
    const {user, today, displayDate, displayTime} = useContext(UserContext)
    const {username, first_name, middle_name, last_name, type_of_provider, department} = user
    const [displayProfile, setDisplayProfile] = useState(false)
    return (
        <div className='home-page'>
            <p className='date'>
                Date: {displayDate(today)} Time: {displayTime(today)}
            </p>
            <h1>Hello {first_name} {last_name}, Welcome to the Healthcare System Interface (HCSI) </h1>
            <button onClick={()=>setDisplayProfile(!displayProfile)}>
               {!displayProfile?  `${first_name} Click To See Profile` : 'Hide Profile'}
            </button>
            <br/>
            <br/>
            {!displayProfile ? null :
            <div className='instructions'>
                <h4>Your Profile</h4>
                <p>Full Name: {first_name} {middle_name} {last_name}</p>
                <p>Username: {username}</p>
                <p>Type of Provider: {type_of_provider}</p>
                <p>Department: {department}</p>
            </div>
            }
            <h2>Please feel free to navigate to other parts of this app and start managing your patient records</h2>
            <br/>
            <NavLink to="/providers" style={{color: 'blue'}}>Providers </NavLink>
            <br/>
            {/* <NavLink to="/albums" style={{color: 'blue'}}>Albums </NavLink>
            <br/>
            <NavLink to="/members" style={{color: 'blue'}}>Members </NavLink>
            <br/>
            <NavLink to="/songs" style={{color: 'blue'}}>Songs </NavLink>
            <br/> */}
            <NavLink to="/signout" style={{color: 'blue'}}>Log Out </NavLink>
        </div>
    )
}

export default HomePage