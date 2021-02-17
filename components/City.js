import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import * as Location from 'expo-location';

export default function City() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [citta, setCitta] = useState('')

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        
        text = JSON.stringify(location);
    }

    console.log(text)


    return (

        <Input
            placeholder='Citta'
            leftIcon={{ type: 'font-awesome', name: 'map-marker' }}
            onChange={(test) => { setCitta(test) }}
        />

    )
}