import React from 'react'
import Clouds from '../../assets/clouds.png'
import './week.styles.scss'

function WeekComponent({ data }) {
    const dateMaker = (value) => {
        if (value) {
            return `${value}TH`
        }
        if (value ===3 || value===23) {
            return `${value}RD`
        }

        if (value === 2 || value===22) {
            return `${value}ND`
        }
        if (value === 1 || value===21) {
            return `${value}ST`
        }

    }
    console.log(dateMaker(1))

    
    return (

        <div>
            {
                data?.forecast.forecastday.map((futureWeather) => (
                    <div  className='forecast'>
                        <div key={ futureWeather.date_epoch } className='forecast-results'>
                            <div className='date'>{(dateMaker(futureWeather.date)).substr(8) }</div>
                        { futureWeather.hour.map((weather) => (
                            <div className='content'>
                                <span>{(weather.time).substr(11,20)}</span>
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
