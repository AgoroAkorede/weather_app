import React from 'react'
import Clouds from '../../assets/clouds.png'
import './week.styles.scss'

function WeekComponent({ data }) {
    const toFahrenheit = (value) => {

        value=Math.floor( value -273.15)
        
        return value
    }
    return (

        <div className='content'>
            {
                data.forecastday.map((futureWeather) => (
                    <div>
                     <div key={futureWeather.date_epoch}>
                        <div></div>
                        { futureWeather.hour.map((weather) => (
                            <div className='content'>
                                <span>{weather.time}</span>
                                <img src={ weather.condition.icon } alt='weather icon' />
                                    <p>{ weather.temp_c}°C </p>
                            </div>
                        ))}
                      
                        </div>
                     </div>
                ))
            }

        </div>
    )
}

export default WeekComponent
