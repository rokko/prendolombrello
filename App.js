import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home.js'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderComponent from './components/HeaderComponent'


export default function App() {
  return (

    <SafeAreaProvider>


      <HeaderComponent />
      <View style={styles.container}>
        <Home />
        </View>
        
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
    backgroundColor: '#ffcb91',
  },
});
