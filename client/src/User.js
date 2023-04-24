import React, {useState, useEffect} from 'react'

const UserContext = React.createContext()

function UserProvider({children}) {
    const [user, setUser] = useState(null)
    const [patients, setPatients] = useState([])
    const [appointments, setAppointments] = useState([])
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
    },[])
    useEffect(()=>{
        fetch('/appointments')
        .then(res=>res.json())
        .then(setAppointments)
    },[])

    const today = new Date()

    function displayDate(thisDate) {
        const date = new Date(thisDate)
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }
    function displayTime (thisDate){
        const date = new Date(thisDate)
        return `${date.getHours()%12}:${date.getMinutes()} ${date.getHours()>12 ? "PM":"AM"}`
    }

    return (
        <UserContext.Provider value={{
            user, setUser, 
            today, 
            patients, setPatients,
            appointments, setAppointments,
            displayDate, displayTime
        }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}