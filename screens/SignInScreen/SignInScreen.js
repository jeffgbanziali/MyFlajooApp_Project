import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { darkBlue, darkRed, darkRose } from '../../components/Button/Constants';
import InputPage from '../../components/InputPage/InputPage';
import { Formik } from 'formik';

import axios from 'axios';





const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const SignInScreen = ({ navigation }) => {
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');


    const handleLogin = (credentials) => {
        const url = 'http://192.168.0.34:5000/api/user/login';

        axios.post(url, credentials)
            .then((response) => {
                const { data } = response;
                const { message, status, token } = data;
            
                if (!status !== 'success') {
                    console.log(data);
                    handleMessage(message, status);
                    navigation.navigate('HomeScreen');
                }

            }).catch(error => {
                console.log(error);
                handleMessage('An error occured, please try again', 'failed');
            })
    }

    const handleMessage = (message, type = 'failed') => {
        setMessage(message);
        setMessageType(type);
    }

    return (
        <>
            <ImageBackground
                source={require("../../assets/Images/Background.jpg")}
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
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => {
                            if (values.email === '' || values.password === '') {
                                handleMessage('Please fill all fields', 'failed');
                            } else if (!EMAIL_REGEX.test(values.email)) {
                                handleMessage('Please enter a valid email', 'failed');
                            } else {
                                handleLogin(values, values);
                            }
                        }}
                    >{
                            ({ handleChange, handleBlur, handleSubmit, values }) => (
                                <>
                                    <InputPage

                                        placeholder="Email"
                                        placeholderTextColor="red"
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        autoCorrect={false}

                                    />
                                    <InputPage
                                        placeholder="Password"
                                        placeholderTextColor="red"
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry={true}
                                        autoCapitalize="none"
                                        autoCorrect={false}

                                    />
                                    <Text style={{
                                        color: messageType === 'failed' ? darkRed : darkBlue,
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        marginVertical: 20

                                    }} type={messageType}>{message}</Text>

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
                                        onPress={handleSubmit}
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
                                </>
                            )

                        }

                    </Formik>
                </View>

            </ImageBackground>
        </>
    );
}




export default SignInScreen;
