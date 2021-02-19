import React from 'react'
import { Text, View } from 'react-native'
import City from '../components/City'
import CarouselCard from '../components/CarouselCard'
import SearchCitta from '../components/SearchCitta'
export default function Home() {
    return (
        <View>
            <City />
            <CarouselCard />
            <SearchCitta />

        </View>
    )
}