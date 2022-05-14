import React,{useState} from 'react'
import './week.styles.scss'
import ChartComponent from '../../components/chart/chart.component'
import { UserData } from '../data'
import { ReactComponent as DotIcon } from '../../assets/dot.svg'


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
    // console.log(data)
    // console.log(UserData)
    // console.log(dateMaker(1))
    const backgroundColor = [
        ' hsl(256, 73%, 50%)', //0
    'hsl(189, 73%, 50%)',
    ' hsl(149, 73%, 50%)',
    'hsl(109, 73%, 50%)',
    'hsl(69, 73%, 50%)',
    'hsl(29, 73%, 50%)',
    'hsl(39, 73%, 50%)',
    'hsl(346, 73%, 50%)',
    'hsl(0, 73%, 50%)',
        // 'transparent']
    ]
    const temperatureEffect = (value) => {
        return (
            {
                position:'absolute',
                top: `${value*1.5}rem`
            }
         )
    }

    const [ userData, setUserData ] = useState({
        labels: data.forecast.forecastday[ 0 ].hour.map((data) => data.time.substr(11,20)),
        datasets: [
            {
                label: "Temperature",
                data:data.forecast.forecastday[ 0 ].hour.map((data) => data.temp_c),
                backgroundColor:backgroundColor,
                borderColor: "blue",
                borderWidth: 1,
                pointHoverBackgroundColor: 'white',
                fill: 'white',
                // showLine: false,
                pointHoverRadius:5,
            }, {
                label: "Feels Like",
                data: data.forecast.forecastday[ 0 ].hour.map((data) => data.feelslike_c),
                backgroundColor: [
                   'red'
                ],
                borderColor: "transparent",
                borderWidth: 3,
                pointHoverBackgroundColor: 'white',
                fill: 'black',
                // showLine: false,
                pointHoverRadius:5,
                // data:[2,3,4,5,9,6,1]
            },
           
        ]
    }
    )
   
    const options = {
        scales: {
            x: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            y: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }   
            }]
        }
    }
    const [ userData1, setUserData1 ] = useState({
        labels: data.forecast.forecastday[ 1 ].hour.map((data) => data.time.substr(11,20)),
        datasets: [
            {
                
                label: "Temperature",
                data:data.forecast.forecastday[ 1 ].hour.map((data) => data.temp_c),
                backgroundColor:backgroundColor,
                borderColor: "blue",
                borderWidth: 1,
                pointHoverBackgroundColor: 'white',
                fill: 'white',
                // showLine: false,
                pointHoverRadius:5
               
            }, {
                label: "Feels Like",
                data: data.forecast.forecastday[ 1 ].hour.map((data) => data.feelslike_c),
                backgroundColor: [
                   'red'
                    // 'transparent'
                ],
                borderColor: "transparent",
                borderWidth: 3,
                pointHoverBackgroundColor: 'white',
                fill: 'black',
                // showLine: false,
                pointHoverRadius:5,
                // data:[2,3,4,5,9,6,1]
            },
        ]
       
    }
    )
    const [ userData2, setUserData2 ] = useState({
        labels: data.forecast.forecastday[ 2 ].hour.map((data) => data.time.substr(11,20)),
        datasets: [
            {
                label: "Temperature",
                data:data.forecast.forecastday[ 2 ].hour.map((data) => data.temp_c),
                backgroundColor:backgroundColor,
                borderColor: "blue",
                borderWidth: 1,
                pointHoverBackgroundColor: 'white',
                fill: 'white',
                // showLine: false,
                pointHoverRadius:5
               
            },
            {
                label: "Feels Like",
                data: data.forecast.forecastday[ 2 ].hour.map((data) => data.feelslike_c),
                backgroundColor: [
                   'red'
                    // 'transparent'
                ],
                borderColor: "transparent",
                borderWidth: 3,
                pointHoverBackgroundColor: 'white',
                fill: 'black',
                // showLine: false,
                pointHoverRadius:5,
                // data:[2,3,4,5,9,6,1]
            },
        ]

    }
    )
    const dayOfTheWeek = (day) => {
        const days = [ 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun' ];

        return days[new Date(`${day}`).getDay()]
    }

    return (
        <div>
            {
                data?.forecast.forecastday.map((futureWeather) => (
                    <div  className='forecast'>
                        <div key={ futureWeather.date_epoch } className='forecast-results'>
                          
                            <div className='date'>{(dayOfTheWeek(futureWeather.date))}</div>
                    
                        { futureWeather.hour.map((weather) => (
                            <div className='content'>
                                <span className='time'>{(weather.time).substr(11,20)}</span>
                                <img src={ weather.condition.icon } alt='weather icon' />
                                <p className='temperature'>{ weather.temp_c }°C </p>
                                <p className='temperature'>{ weather.condition.text } </p>
                            </div>
                        )) }

                        </div>
                     </div>
                )) 
            }
            <div>
            <ChartComponent 
                    chartData={ userData } 
                    options={ options } 
                    width={1000}
                    height={1000}   
                />    
                     
                <ChartComponent 
                    chartData={ userData1 }
                    options={ options } 
                />
                
                <ChartComponent
                    chartData={ userData2 }
                    options={ options } 
                    
                    />
             
            </div>
        </div>
    )
}

export default WeekComponent
