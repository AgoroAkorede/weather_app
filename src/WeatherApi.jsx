import { useEffect, useState } from "react"
const API_KEY = "31a8a9b882eebee727a896627936817a"
    // `https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=31a8a9b882eebee727a896627936817a`
    // `http://api.openweathermap.org/data/2.5/forecast?id={city-id}&appid=31a8a9b882eebee727a896627936817a`

const WeatherApi = (cityName) => {
    const [ results, setResults ] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}
                `)
                .then(response => response.json())
                .then(result => { setResults(result) })
                .catch((err) => console.error(err))
        }
        fetchApi()
    }, [ cityName ])
    return{results}

    
}

export default WeatherApi;
