// import React, { useState } from 'react'
// import useGeolocation from './components/Geolocation'
// const API_KEY = "a14469753efd4b70aca164417220904"

// function FirstCall() {
//     position=useGeolocation()
//     const [ results, setResults ] = useState(null);

//     useEffect(() => {
//         const fetchApi = async () => {
//             fetch(
//                 `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${position.coordinates.lat}&lon${position.coordinates.lng}&appid=${API_KEY}
//                 `)
//                 .then(response => response.json())
//                 .then(result => { setResults(result) })
//                 .catch((err) => console.error(err))
//         }
//         fetchApi()
//     }, [ ])
//     return{results}

// }
// // 'https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=35&lon=139&appid={API key}'

// export default FirstCall;
