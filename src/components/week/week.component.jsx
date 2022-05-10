import React from 'react'
import './week.styles.scss'
import ChartComponent from '../../components/chart/chart.component'

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
    console.log(data)
    console.log(dateMaker(1))
    const temperatureEffect = (value) => {
        return (
            {
                position:'absolute',
                top: `${value*1.5}rem`
            }
         )
     }
    
    return (
        

        <div>
            {
                data?.forecast.forecastday.map((futureWeather) => (
                    <div  className='forecast'>
                        <div key={ futureWeather.date_epoch } className='forecast-results'>
                            <div className='date'>{(dateMaker(futureWeather.date)).substr(8) }</div>
                        { futureWeather.hour.map((weather) => (
                            <div className='content'>
                                <span className='time'>{(weather.time).substr(11,20)}</span>
                                <img src={ weather.condition.icon } alt='weather icon' />
                                <div>
                               
                                    {/* {
                                        <ChartComponent dataAPi={ weather} time={ (weather.time).substr(11, 20) } />
                                    } */}
                                    {/* <ChartComponent /> */}
                                </div>
                                
                                <p className='temperature'>{ weather.temp_c }°C </p>
                                <p className='temperature'>{ weather.condition.text} </p>
                            </div>
                        ))}
                      
                        </div>

                     </div>
                ))
                
            }

            {
                <ChartComponent dataAPi='[12,24,25,26,15,89]' time='[]' />
        }
        </div>
    )
}

export default WeekComponent
