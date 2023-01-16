import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { darkBlue, darkRed, darkRose } from '../../components/Button/Constants';
import InputPage from '../../components/InputPage/InputPage';
import { Formik } from 'formik';

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';





const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const SignInScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    const handleLogin = (credentials) => {
        const url = 'http://192.168.0.34:5000/api/user/login';

        axios.post(url, credentials)
            .then((res) => {
                if (res.data.errors) {
                    console.log("Erreur dans la saisie")
                } else {
                    console.log("Vous êtes connecter")
                    console.log(res.data.user)
                    navigation.replace("HomeScreen")
                }
            }).catch((err) => {
                console.log(err);
                console.log("connecte toi");
            })
    }

    return (
        <>
            <ImageBackground
                source={require("../../assets/Images/Background2.jpg")}
                style={{ height: '100%' }}>
                <View style={{
                    alignItems: "center",
                }}>
                    <Text style={{
                        color: 'blue',
                        fontSize: 64,
                        fontWeight: 'bold',
                        marginVertical: 40
                    }}>
                        Login
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        color: 'gray',
                        fontWeight: 'bold',
                        marginVertical: 60
                    }}>
                        Login to your account
                    </Text>

                    <InputPage

                        placeholder="Email"
                        placeholderTextColor="red"
                        onChangeText={(text) =>  setEmail(text) }
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}

                    />
                    <InputPage
                        placeholder="Password"
                        placeholderTextColor="red"
                        onChangeText={(text) =>  setPassword(text) }
                        value={password}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}

                    />

                    <TouchableOpacity
                        style={{
                            backgroundColor: darkBlue,
                            width: 300,
                            height: 50,
                            borderRadius: 10,
                            alignItems: "center",
                            justifyContent: "center",
                            marginVertical: 20
                        }}
                        onPress={() => {
                            console.log('Login');
                            handleLogin({ email, password });
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>
                            Login
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={{
                            backgroundColor: darkRose,
                            width: 300,
                            height: 50,
                            borderRadius: 10,
                            alignItems: "center",
                            justifyContent: "center",
                            marginVertical: 20
                        }}
                        onPress={() => {
                            console.log('Sign Up');
                            navigation.navigate('Signup');
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
        </>
    );
}




export default SignInScreen;
