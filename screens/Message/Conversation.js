import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';


const Conversation = () => {
    const navigation = useNavigation();
    const [isPressed, setIsPressed] = useState(false);

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        flexDirection: 'row',
        backgroundColor: isPressed ? '#F5F5F5' : '#FFFFFF',
    }
    const handleClickMessage = () => {
        console.log("clicked")
        navigation.navigate('Chatlist');
    }
    return (
        <View >
            <TouchableOpacity
                style={containerStyle}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                onPress={handleClickMessage}
            >
                <Image source={require('../../assets/Images/woman-gdc9219422_1920.jpg')}
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 100,
                        objectfit: 'cover',
                    }}

                />
                <Text
                    style={{
                        fontSize: 16,
                        marginLeft: 20,
                        alignContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        fontWeight: 'bold',
                    }}
                >Koukouda</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Conversation