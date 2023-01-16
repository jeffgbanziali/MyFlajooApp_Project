import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import InputPage from '../../components/InputPage/InputPage';
import { Formik } from 'formik';

import axios from 'axios';



const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = ({ navigation }) => {
    const handleLogin = () => {


        axios({
            method: "post",
            url: 'http://192.168.0.34:5000/api/user/register',
            data: {
                pseudo: pseudo,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                phoneNumber: phoneNumber

            }
        }).then((res) => {
            if (res.data.errors) {
                console.log("Erreur dans la saisie")
            } else {
                console.log("Vous êtes connecter")
                console.log(res.data.user)
                navigate("signIn")
            }
        }).catch((err) => {
            console.log(err);
            console.log("Une du server");
        })
    }



    return (
        <ImageBackground
            source={require("../../assets/Images/Background.jpg")}
            style={{ height: '100%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    alignItems: "center",

                }}>

                    <Text style={{
                        color: 'blue',
                        fontSize: 64,
                        fontWeight: 'bold',
                        marginVertical: 20
                    }}>
                        Register
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        color: 'lightred',
                        fontWeight: 'bold',
                        marginVertical: 2,
                        marginBottom: 10
                    }}>
                        Create a new account for the specified
                    </Text>

                    <Formik >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <>
                                <InputPage
                                    placeholder="Pseaudo"
                                    placeholderTextColor="red"
                                    onChangeText={handleChange('pseaudo')}
                                    onBlur={handleBlur('pseaudo')}
                                    value={values.pseaudo}
                                    keyboardType="default"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                                <InputPage
                                    placeholder="First Name"
                                    placeholderTextColor="red"
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}
                                    keyboardType="default"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                                <InputPage
                                    placeholder="Last Name"
                                    placeholderTextColor="red"
                                    onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('lastName')}
                                    value={values.lastName}
                                    keyboardType="default"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
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
                                    keyboardType="default"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                />
                                <InputPage
                                    placeholder="Confirm Password"
                                    placeholderTextColor="red"
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword}
                                    keyboardType="default"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                />
                                <InputPage
                                    placeholder="Phone Number"
                                    placeholderTextColor="red"
                                    onChangeText={handleChange('phoneNumber')}
                                    onBlur={handleBlur('phoneNumber')}
                                    value={values.phoneNumber}
                                    keyboardType="phone-pad"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: 'blue',
                                        width: 350,
                                        height: 50,
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginTop: 20,
                                        marginBottom: 20
                                    }}
                                    onPress={handleSubmit}
                                >
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 20,
                                        fontWeight: 'bold'
                                    }}>
                                        Register
                                    </Text>
                                </TouchableOpacity>
                            </>
                        )}

                    </Formik>

                </View>
            </ScrollView>


        </ImageBackground>
    );
}



const styles = StyleSheet.create({})

export default SignUpScreen;
