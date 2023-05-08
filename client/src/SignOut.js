import React, {useState, useContext} from 'react'
import { UserContext } from './User'

function SignOut() {
    const {user, setUser} = useContext(UserContext)
    const [wantToLogOut, setWantToLogOut] = useState(false)
    function LogOut() {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(()=>setUser(null))
    }

    return (
        <div className='container'>
            <h1>{user.first_name} do you want to Log Out ?</h1> 
            <button className="btn btn-warning" onClick={()=>setWantToLogOut(!wantToLogOut)}>Click Here</button>
            {wantToLogOut? 
             (<div>
                <h1>Are you sure?</h1>
                <button className="btn btn-danger" onClick={()=>LogOut()}>Yes</button>
                <button className="btn btn-primary"onClick={()=>setWantToLogOut(!wantToLogOut)}>No</button>
            </div>) 
            : null}
        </div>
    )
}

export default SignOut