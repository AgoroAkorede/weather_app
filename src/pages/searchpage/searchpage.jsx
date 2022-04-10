import React from 'react'
import { useState,useEffect } from 'react'
import { useResultContext } from '../../ResultProvider'
import {ReactComponent as Dot } from '../../assets/dot.svg'
import WeatherApi from '../../WeatherApi'
import ForecastApi from '../../ForecastApi'
import { actionTypes } from '../../reducer'
import SetClock from '../../components/clock'
import Cloud from '../../assets/cloud.png'
import HeavyRain from '../../assets/heavy-rain.png'
import OvercastClouds from '../../assets/overcast clouds.png'
import Rain from '../../assets/rain.png'
import Snow from '../../assets/snow.png'
import CloudyDay from '../../assets/sun-cloud.png'
import Mist from '../../assets/mist.png'
import Moon from '../../assets/moon.png'
import Sun from '../../assets/sun.png'
import CloudyNight from '../../assets/cloudy-night.png'
import Clouds from '../../assets/clouds.png'
import RainyNight from '../../assets/rain-night.png'
import Wind from '../../assets/wind.png'
import WeekComponent from '../../components/week/week.component'

// import {useDebounce} from 'use-debounce'

import './searchpage.styles.scss'

function SearchPage() {
    const [ input, setInput ] = useState("")
    const [ {term}, dispatch ] = useResultContext();
    const { results } = WeatherApi(term);
  
   
    const { forecastResults } = ForecastApi(term)
    

    let weatherImg
    let num
    let timePeriod
  
    
     const search = e => {
            e.preventDefault();
        
            dispatch({
                type: actionTypes.SET_SEARCH_TERM,
                term: input,
            })
           
         setInput("")
      
        }
        console.log(forecastResults.forecast)
      

    const colors = [
        'linear-gradient(45deg, hsl(256, 73%, 60%), hsl(256, 73%, 90%))', //0
        'linear-gradient(45deg, hsl(189, 73%, 60%), hsl(189, 73%, 90%))', //1
        'linear-gradient(45deg, hsl(149, 73%, 60%), hsl(149, 73%, 90%))', //2
        'linear-gradient(45deg, hsl(109, 73%, 60%), hsl(109, 73%, 90%))', //3
        'linear-gradient(45deg, hsl(69, 73%, 60%), hsl(69, 73%, 90%))', //4
        'linear-gradient(45deg, hsl(29, 73%, 60%), hsl(29, 73%, 90%))', //5
        'linear-gradient(45deg, hsl(32, 73%, 60%), hsl(32, 73%, 90%));', //6
        'linear-gradient(45deg, hsl(346, 73%, 60%), hsl(346, 73%, 90%))', //7
        'linear-gradient(45deg, hsl(0, 73%, 60%), hsl(0, 73%, 90%))', //8
    ];

    const generateBackgroundGradient = (color) => {
       return( { backgroundImage: color}
        )
    }
   
    
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    let today = new Date()
    let time = today.toLocaleTimeString()
    let hours = today.getHours()
    if (hours>=6 && hours < 18 ) { timePeriod = 'morning' }
    else{timePeriod='evening'}
   
    const toFahrenheit = (value) => {

        value=Math.floor( value -273.15)
        
        return value
    }
    if (toFahrenheit(results?.main.temp) < 0) {
        num=0
    } 
    if (toFahrenheit(results?.main.temp) > 0 && toFahrenheit(results?.main.temp) < 5) {
        num=1
    } 
    if (toFahrenheit(results?.main.temp) > 5 &&toFahrenheit(results?.main.temp) <=10) {
        num=2
    } 
    if (toFahrenheit(results?.main.temp) > 10 &&toFahrenheit(results?.main.temp) <=15) {
        num=3
    } 
    if (toFahrenheit(results?.main.temp) > 15 &&toFahrenheit(results?.main.temp) <=20) {
        num=4
    }
    if (toFahrenheit(results?.main.temp) > 20 &&toFahrenheit(results?.main.temp) <=25) {
        num=5
    }
    if (toFahrenheit(results?.main.temp) > 25 &&toFahrenheit(results?.main.temp) <=30) {
        num=6
    }
    if (toFahrenheit(results?.main.temp) > 30 &&toFahrenheit(results?.main.temp) <=35) {
        num=7
    }
    if (toFahrenheit(results?.main.temp) > 35 &&toFahrenheit(results?.main.temp) <=40) {
        num=8
    }
    let forecastImg

  
    const genrateHeight = (height) => {
     
        return ({position:'absolute',
            top: `${height / 2}px`
        }
            
        )
    }
   
   
    let [ el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16, el17,el18,el19, el20 ]=[]

    // forecastResults?.list.map((f, i) => {
        
       
    // });
   
    //---------------------------------WEATHER IMAGE-------------------------------------------------
    
    if ( results?.weather[ 0 ].description === 'overcast clouds' && toFahrenheit(results?.main.temp)<5 && timePeriod === 'evening' ) {
        weatherImg = Snow
    }
    
   
   
    if (results?.weather[ 0 ].description === 'broken clouds' && timePeriod === 'morning') {
        weatherImg = OvercastClouds
    }
    if (results?.weather[ 0 ].description === 'broken clouds' && timePeriod === 'evening') {
        weatherImg = CloudyNight;
    }
    if (results?.weather[ 0 ].description === 'mist') {
        weatherImg=Mist
    }
    
    if (results?.weather[ 0 ].description === 'overcast clouds'&& timePeriod === 'evening' && toFahrenheit(results?.main.temp)>5) {
        weatherImg = CloudyNight;
        
    }
    if (results?.weather[ 0 ].description === 'overcast clouds'&& timePeriod === 'morning' ) {
        weatherImg = CloudyDay;
    }
    if (results?.weather[ 0 ].description === 'clear sky' && timePeriod === 'evening') {
        weatherImg=Moon
    }
    if (results?.weather[ 0 ].description === 'scattered clouds' && timePeriod === 'evening') {
        weatherImg = Moon
    }
    if (results?.weather[ 0 ].description === 'scattered clouds' && timePeriod === 'morning') {
        weatherImg = Sun
    }
    if (results?.weather[ 0 ].description === 'clear sky' && timePeriod === 'morning') {
        weatherImg=Sun
    }
    if (results?.weather[ 0 ].description === 'light rain' && timePeriod === 'morning') {
        weatherImg=Rain
    }
    if (results?.weather[ 0 ].description === 'light rain' && timePeriod === 'evening') {
        weatherImg = RainyNight;
    }
    if (results?.weather[ 0 ].description === 'rain') {
        weatherImg=HeavyRain
    }
    if (results?.weather[ 0 ].description === 'wind' || results?.weather[ 0 ].description === 'dust') {
        weatherImg = Wind
    }
    if (results?.weather[ 0 ].description === 'heavy intensity rain') {
        weatherImg=HeavyRain
    }
    if (results?.weather[ 0 ].description === 'moderate rain'&& timePeriod === 'morning') {
        weatherImg=Rain
    }
    if (results?.weather[ 0 ].description === 'moderate rain'&& timePeriod === 'evening') {
        weatherImg=RainyNight
    }
    if (results?.weather[ 0 ].description === 'few clouds') {
        weatherImg=Clouds
    }
   
    return (
        <div className='search-page'  style={generateBackgroundGradient(colors[num])}>
            <form className='search-box' onSubmit={search}>
                <input
                 placeholder='Enter a Particular city'
                value={input}
                onChange={e=>setInput(capitalize(e.target.value)) }
                type='text' />
            </form>
            <div className='search-results'>
                <SetClock /> 
            
                <h1 className='city-name'>{ term }, { results?.sys.country}</h1>
                <p className='weather-description'>{ results?.weather[ 0 ].description }</p>
                <img src={weatherImg} />
                <p className='temperature'> { toFahrenheit(results?.main.temp) }°C </p>
                
            </div>
            <h1 className='title'>Weather Forecast</h1>
            <WeekComponent data={forecastResults.forecast} />
         
        </div>
    )
}

export default SearchPage
