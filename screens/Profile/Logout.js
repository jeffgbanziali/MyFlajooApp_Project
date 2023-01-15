import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import cookie from "js-cookie"
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Logout = () => {

    const navigation = useNavigation(false);

    const removeCookie = (key) => {
        cookie.remove(key, { expires: 1 });
    }

    const handleLogout = async () => {
        await axios({
            method: 'get',
            url: "http://192.168.0.34:5000/api/user/logout",
            withCredentials: true,
        })

            .then(() => {
                removeCookie("jwt")
                navigation.navigate("Start")
            })

            .catch(error => {
                console.log(error)
            }
            )
    }
    return (

        <>
            <View>
                <Text>
                    Logout
                </Text>

            </View>
            <View>
                <Button title="Logout"
                    onPress={handleLogout}
                />
            </View>
        </>
    );
}



export default Logout;
