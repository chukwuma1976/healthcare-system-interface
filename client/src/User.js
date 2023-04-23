import React, {useState, useEffect} from 'react'

const UserContext = React.createContext()

function UserProvider({children}) {
    const [user, setUser] = useState(null)
    const [patients, setPatients] = useState()
    useEffect(()=>{
        fetch('/me')
        .then(res=>{
            if (res.ok){
                res.json().then(setUser)
            }
        })
    }, [])
    useEffect(()=>{
        fetch('/patients')
        .then(res=>res.json())
        .then(setPatients)
    })

    const today = new Date()

    return (
        <UserContext.Provider value={{user, setUser, today, patients, setPatients}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}