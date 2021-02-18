import React, { useState, useEffect , useContext} from 'react'
import { Text,ActivityIndicator, View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import {CityContext} from '../context/CityContext'


export default function City() {
    const { load,citta } = useContext(CityContext)

    ///////////////////////////////////////////////////////////////////////////////////////

    return (
        <>
        {load ? <View><ActivityIndicator size='large' color='#94ebcd'/></View>
                : <View style={styles.cityContainer}><Text style={styles.cityName}>{citta}</Text></View>}

        </>

    )
}
const styles = StyleSheet.create({
    cityName: {
      color: '#290149',
      fontSize:30,
      fontWeight:'bold',
    },
    cityContainer :{
      backgroundColor:'#f14668',
      width : 300,
      height: 100,
      
    }
  });
  