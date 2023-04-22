import React, {useContext, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from './User';

function HomePage() {
    const {user, today} = useContext(UserContext)
    const [displayInstructions, setDisplayInstructions] = useState(false)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return (
        <div className='home-page'>
            <p className='date'>
                Date: {days[today.getDay()]} {today.getMonth() + 1}/{today.getDate()}/{today.getFullYear()}{" "}
                Time: {today.getHours()}:{today.getMinutes()}
            </p>
            <h1>Hello {user.username} Welcome to the Healthcare System Interface (HCSI) </h1>
            <button onClick={()=>setDisplayInstructions(!displayInstructions)}>
               {!displayInstructions?  `${user.username} click to see instructions` : 'Hide Instructions'}
            </button>
            <br/>
            <br/>
            {!displayInstructions ? null :
            <div className='instructions'>
                <h4>There are five main parts to this application.</h4>
                <br/>
                <p>1) Login Page: since you made it here you clearly know how to create an account and login</p>
                <br/>
                <p>2) Home Page: {user.username}, you are on this page.  This page can redirect to other pages on the application.</p>
                <br/>
                <p>3) Logout: This section signs out the user</p>
            </div>
            }
            <h2>Please feel free to navigate to other parts of this app and start spinning some records!</h2>
            <br/>
            {/* <NavLink to="/artists" style={{color: 'blue'}}>Artists </NavLink>
            <br/>
            <NavLink to="/albums" style={{color: 'blue'}}>Albums </NavLink>
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