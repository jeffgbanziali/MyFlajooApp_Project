import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useSelector } from 'react-redux';




const Conversation = () => {
    const userData = useSelector((state) => state.userReducer);
    const usersData = useSelector((state) => state.usersReducer);
    const [user, setUser] = useState(null);

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
                <Image source={{
                    uri: 'https://www.10wallpaper.com/wallpaper/2880x1800/2102/Assassins_Creed_Eivor_AC_2021_Game_HD_Poster_2880x1800.jpg'
                }}
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
                    }}>
                    ,kdnfdfkdnfkd
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Conversation