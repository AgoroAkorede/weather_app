import React from 'react'
import { useState,useEffect } from 'react'

 const useGeolocation = () => {
    const [ position, setPosition ] = useState({
            loaded:false,
        coordinates:{ lat: "", lng: ""}
        })   
    const onSuccess = location => {
    setPosition({
            loaded: true,
                coordinates: {
                    lat: location.coords.latitude,
                    lng: location.coords.longitude,
                }
        })
    }
    const onError = error => {
        setPosition({
            loaded: true,
            error,
        })
    }
    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Goloaction not supported",
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, []);
    return position
}

export default useGeolocation