import { View, Text } from 'react-native'
import React from 'react'
import Logout from '../Profile/Logout'

const Settings = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Logout />
        </View>
    )
}

export default Settings