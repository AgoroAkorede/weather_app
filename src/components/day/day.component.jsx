import React from 'react'

function DayComponent({ data }) {
  
    return (
        <div>
            <p> Today {
                    Math.round((data?.forecast.forecastday[0].day.mintemp_c+data?.forecast.forecastday[0].day.mintemp_c)/2)
                } °C
            </p>
            <p> Tommorow  {
                Math.round((data?.forecast.forecastday[ 1 ].day.mintemp_c + data?.forecast.forecastday[ 1 ].day.mintemp_c) / 2)
            } °C
            </p>
            <p>    {
                Math.round(data?.forecast.forecastday[2].day.mintemp_c)
                }°C
           </p>
        </div>
    )
}

export default DayComponent
