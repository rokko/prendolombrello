import React, { createContext, useState, useEffect} from 'react'
import * as Location from 'expo-location';

export const CityContext = createContext()
export default function CityProvider({ children }) {

   
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [citta, setCitta] = useState('')
    const [load, setLoad] = useState(true)

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                setLoad(false)
                return;
                
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setLoad(false)
        })();
    }, []);


    let text = ''
    if (errorMsg) {
        text = errorMsg;
        
    } else if (location) {
        text = JSON.stringify(location);
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=a77482bcf7fbdc313570bd4f1fb9733d`)
            .then(response=> response.json())
            .then(rest => console.log(rest))
            

        
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location.coords.latitude}+${location.coords.longitude}&key=eeeddc5e50fe4b888f91496d5fcc0005`)
            .then(response => response.json())
            .then(rest =>{setCitta(rest.results['0'].components.city)})
    }


    
    return (
        //Rendiamo disponibili a tutto il programma le constanti
        <CityContext.Provider value={{ citta, setCitta,load }}>
            { children}
        </CityContext.Provider>
    )





}

