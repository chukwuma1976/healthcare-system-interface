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

        fetch('/patients')
        .then(res=>res.json())
        .then(setPatients)

        fetch('/appointments')
        .then(res=>res.json())
        .then(setAppointments)
    }, [])
    console.log('provider: ', user, 'patients: ', patients, 'appointments: ', appointments)

    const [today, setToday] = useState(new Date())

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
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return `${days[today.getDay()]} ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }
    function displayDateAsNumbers(thisDate){
        const date = new Date(thisDate)
        return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
    }
    function displayTime (thisDate){
        const date = new Date(thisDate)
        const hours = date.getHours()%12===0 ? "12":date.getHours()%12
        const minutes = date.getMinutes() < 10? `0${date.getMinutes()}` : date.getMinutes()
        const amOrPm =date.getHours()>12 ? "PM":"AM"
        return `${hours}:${minutes} ${amOrPm}`
    }

    return (
        <UserContext.Provider value={{
            user, setUser,  
            patients, setPatients,
            appointments, setAppointments,
            today, setToday, displayDate, displayTime, displayDateAsNumbers
        }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}