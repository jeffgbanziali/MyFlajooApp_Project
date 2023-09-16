import { View, Text } from 'react-native'
import React from 'react'
import AddButton from '../Button/AddButton'

const Footer = () => {
    return (
        <View
            style={{
                backgroundColor: '#161414',
                marginTop: 200,
                height: 400,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                position: 'absolute',
                bottom: 0,
                borderRadius: 20,
            }}
        >
            <AddButton />
        </View>
    )
}

export default Footer