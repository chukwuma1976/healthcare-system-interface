import React, {useEffect, useContext} from 'react'
import { UserContext } from './User';

function Clock() {
    const {today, setToday, displayDate} = useContext(UserContext)
    function tickingTime (thisDate){
      const date = new Date(thisDate)
      const hours = date.getHours()%12===0 ? "12":date.getHours()%12
      const minutes = date.getMinutes() < 10? `0${date.getMinutes()}` : date.getMinutes()
      const seconds = date.getSeconds()<10? `0${date.getSeconds()}`: date.getSeconds()
      const amOrPm =date.getHours()>12 ? "PM":"AM"
      return `${hours}:${minutes}:${seconds} ${amOrPm}`
  }
        
    function refreshClock() {
      setToday(new Date());
    }
    useEffect(()=>{
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
            };
    }, [])
    return (
      <div className='date-container'>
        <p className='date'>Date: {displayDate(today)} Time: {tickingTime(today)}</p>
      </div>
    )
}

export default Clock