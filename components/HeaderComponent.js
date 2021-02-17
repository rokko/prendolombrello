import React from 'react'
import { Header } from 'react-native-elements'

export default function HeaderComponent() {

    return (
        <Header
            centerComponent={{ text: 'PrendoLombrello', style: { color: '#fff' } }}
        />
    )

}