import React, {useState, useEffect} from 'react'

const UserContext = React.createContext()

function UserProvider({children}) {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        fetch('/me')
        .then(res=>{
            if (res.ok){
                res.json().then(user=>console.log(user))
            }
        })
    }, [])

    const today = new Date()

    return (
        <UserContext.Provider value={{user, setUser, today}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}