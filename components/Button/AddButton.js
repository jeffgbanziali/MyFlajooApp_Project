import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';


const AddButton = () => {
    return (
        <View style={{ position: "absolute", alignItems: 'center' }}>
            <View style={{
                backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center',
                width: 72,
                height: 72,
                borderRadius: 50,
                position: 'absolute',
                top: -30,
                shadowColor: '#000',
                shadowRadius: 5,
                borderWidth: 3,
                borderColor: "red",
               
                shadowOpacity: 0.3,
                elevation: 2,
                zIndex: 100


            }}>
                <TouchableHighlight underlayColor="red">
                    <View>
                        <Feather name="plus-circle" color="black" size={26} />
                    </View>

                </TouchableHighlight >
            </View>
        </View>
    )
}

export default AddButton