import React, { useState, useEffect } from 'react'
import { Text,ActivityIndicator, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import * as Location from 'expo-location';


export default function City() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [citta, setCitta] = useState('')
    const [load, setLoad] = useState(true)


    ///////////////////////////////////////////////////////////////////////////////

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
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${~~location.latitude}&lon=${~~location.longitude}&appid=a77482bcf7fbdc313570bd4f1fb9733d`)
            .then(response=> response.json())
            .then(rest=>console.log(rest))
        }

    console.log(text)

    ///////////////////////////////////////////////////////////////////////////////////////

    return (
        <>
        {load ? <View><ActivityIndicator size='large' color='#94ebcd'/></View>
                : <View><Text style={{color:'#94ebcd'}}>{text}</Text></View>}
        <Input
            placeholder='Citta'
            leftIcon={{ type: 'font-awesome', name: 'map-marker' }}
            onChange={(test) => { setCitta(test) }}
        />
        </>

    )
}