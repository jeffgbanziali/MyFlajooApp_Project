import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Search = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
            }}
        >
            <TextInput style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 10,
                margin: 10,
                padding: 10,
                width: 300,
                backgroundColor: '#FFFFFF',
            }}
                placeholder="Search"
            />
        </View>
    )
}

export default Search