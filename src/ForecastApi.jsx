import { useEffect, useState } from "react"
// const API_KEY = "6b2344f5032852bc5317f17a45a2c5d9"
const API_KEY = "a14469753efd4b70aca164417220904"

const ForecastApi = (cityName) => {
    const [ forecastResults, setforecastResult ] = useState(null)
    
    useEffect(() => {
        const fetchApi = async () => {
            fetch(
                `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=7`
                // `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            )
                .then(response => response.json())
                .then(result => { setforecastResult(result) })
                .catch((err) => console.error(err))
        }
        fetchApi()
    }, [ cityName])
    return{forecastResults}
}


export default ForecastApi;


// https://api.openweathermap.org/data/2.5/forecast?lat=1&lon=2&appid=31a8a9b882eebee727a896627936817a