import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import cookie from "js-cookie"

import { useNavigation } from '@react-navigation/native';

const Logout = () => {

    const navigation = useNavigation(false);

    const removeCookie = (key) => {
        if (typeof window !== 'undefined') {
          cookie.remove(key, { expires: 1 });
        }
      };
    const handleLogout = async () => {
        try {
        await axios({
            method: 'get',
            url: "http://192.168.0.34:5000/api/user/logout",
            withCredentials: true,
        });
        removeCookie('jwt');
        navigation.navigate('signin');
    } catch (error) {
      console.log(error);
    }
  };
    return (

        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <TouchableOpacity onPress={handleLogout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
           
        </>
    );
}



export default Logout;
