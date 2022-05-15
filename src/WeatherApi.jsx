import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
const API_KEY = "31a8a9b882eebee727a896627936817a"

const WeatherApi = (cityName) => {
    const [ results, setResults ] = useState(null);
    const navigate = useNavigate()
    
    useEffect(() => {
        const fetchApi = async () => {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}
                `)
                .then(response => response.json())
                .then(result => { setResults(result) })
                .catch( ()=>navigate('/404'))
        }
        fetchApi()
    }, [ cityName ])
    return{results}

}
export default WeatherApi;
