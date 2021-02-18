import React from 'react'
export default function SearchCitta(){
    return(
    <Input
            placeholder='Citta'
            leftIcon={{ type: 'font-awesome', name: 'map-marker' }}
            onChange={(test) => { setCitta(test) }}
        />
    )

}