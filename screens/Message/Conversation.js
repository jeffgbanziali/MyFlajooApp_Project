import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useSelector } from 'react-redux';




const Conversation = ({ conversation, currentUser }) => {
    const userData = useSelector((state) => state.userReducer);
    const usersData = useSelector((state) => state.usersReducer);
    const [user, setUser] = useState(null);

    const navigation = useNavigation();
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        const conversationId = conversation.members.find((member) => member !== currentUser);
        const getUser = async () => {
            try {
                const response = await axios.post('http://192.168.0.34:5000/api/conversation/' + conversationId);
                setUser(response.data);
                console.log(response);
            }
            catch (error) {
                console.log(error);
            }
        }
        getUser();
    }, [currentUser, conversation]);


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
                        }}>
                        {userData.pseudo}
                    </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Conversation