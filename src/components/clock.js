import React, { useEffect, useState } from 'react'
import './clock.styles.scss'

function SetClock() {
    const [ date, SetDate ] = useState(new Date());
    const dateBuilder = (d) => {
        const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
        
        const months = [ 'January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
        
        let day=days[d.getDay()]
        let dates = d.getDate()
        let month = months[ d.getMonth() ];
        let year = d.getFullYear()
        
        return `${day} ${dates} ${month} ${year}`
    }
    function refreshClock() {
        SetDate(new Date())}
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId)
        };
    }, [])

    const time=date.toLocaleTimeString()
        return (
            <div className='clock'>
                { date.toLocaleTimeString() }
                <div>{ dateBuilder(date) }</div>
                {/* <div>{dateBuilder(date++) }</div> */}
            </div>
        )
}


export default SetClock
