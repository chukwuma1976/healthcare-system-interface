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
            <h1>Hello DJ {user.username} Welcome to the Eclectic Music Database</h1>
            <p>{user.username}, you have the unique pleasure of becoming a DJ, so that you can express your unique taste in music.</p>
            <p>Let the world feel your VIBE, the VIBE of musical ecstasy.  Show us your energy.  Let the rhythm flow.  Let's do this!</p>
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
                <p>3) Artists: This consists of a collection of artists with an expandible display.  
                    Here the user can sort the artists by name and/or genre.  An artist can be added, updated, or removed.
                    One can add albums and members (especially for artist groups) to any artist that belongs to the user.
                    In order to update or remove an album there is a link to navigate the user to the Albums section.
                    To update or remove a member there is a link to navigate to the user to the Members section.  
                    To update a song name or remove a song there is a link to redirect the user to the Songs section.
                </p>
                <br/>
                <p>4) Albums: This consists of a collection of albums with an expandible display. 
                    Here the user can sort the albums by name, artists, and genre.  Songs can be added to the album here.
                    To update a song name or remove a song there is a link to redirect the user to the Songs section.
                </p>
                <br/>
                <p>5) Members: This consists of a collection of members from different artists with an expandible display. 
                    Here the user can sort the members by name, artists, and genre.  A member can be updated, or removed here. 
                    Furthermore, any member in a group can become a solo artist by simply clicking a go solo button</p>  
                <br/>
                <p>6) Songs: This consists of a collection of songs from different albums by different artists.
                    A song can be updated, or removed here.
                </p>
                <br/>
                <p>7) Logout: This section signs out the user</p>
            </div>
            }
            <h2>Hey DJ! Please feel free to navigate to other parts of this app and start spinning some records!</h2>
            <br/>
            <NavLink to="/artists" style={{color: 'blue'}}>Artists </NavLink>
            <br/>
            <NavLink to="/albums" style={{color: 'blue'}}>Albums </NavLink>
            <br/>
            <NavLink to="/members" style={{color: 'blue'}}>Members </NavLink>
            <br/>
            <NavLink to="/songs" style={{color: 'blue'}}>Songs </NavLink>
            <br/>
            <NavLink to="/signout" style={{color: 'blue'}}>Log Out </NavLink>
        </div>
    )
}

export default HomePage