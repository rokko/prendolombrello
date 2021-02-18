import { StatusBar  } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home.js'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderComponent from './components/HeaderComponent'
import CityContext from './context/CityContext'
import CityProvider from './context/CityContext';


export default function App() {
  return (

    <SafeAreaProvider>
      <CityProvider>
        <HeaderComponent />
        <View style={styles.container}>
          <Home />
        </View>
      </CityProvider>

    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcb91',
  },
});
