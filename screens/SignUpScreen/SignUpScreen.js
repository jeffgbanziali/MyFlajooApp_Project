import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import InputPage from '../../components/InputPage/InputPage';

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';



const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [pseudo, setPseudo] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSignUp = (credentials) => {
        const url = 'http://192.168.0.34:5000/api/user/register';

        axios.post(url, credentials)
            .then((res) => {
                if (res.data.errors) {
                    console.log("Erreur dans la saisie")
                } else {
                    console.log("Vous êtes connecter")
                    console.log(res.data.user)

                    navigation.navigate("Signin")
                }
            }).catch((err) => {
                console.log(err);
                console.log("connecte toi");
            })
    }





    return (
        <ImageBackground
            source={require("../../assets/Images/Background3.jpg")}
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


                    <InputPage
                        placeholder="Pseudo"
                        placeholderTextColor="red"
                        value={pseudo}
                        onChangeText={(text) => { setPseudo(text) }}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <InputPage
                        placeholder="First Name"
                        placeholderTextColor="red"
                        value={firstName}
                        onChangeText={(text) => { setFirstName(text) }}

                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <InputPage
                        placeholder="Last Name"
                        placeholderTextColor="red"
                        value={lastName}
                        onChangeText={(text) => { setLastName(text) }}

                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <InputPage
                        placeholder="Email"
                        placeholderTextColor="red"
                        onChangeText={(text) => { setEmail(text) }}
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}

                    />
                    <InputPage
                        placeholder="Password"
                        placeholderTextColor="red"
                        onChangeText={(text) => { setPassword(text) }} m
                        value={password}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <InputPage
                        placeholder="Confirm Password"
                        placeholderTextColor="red"
                        value={confirmPassword}
                        onChangeText={(text) => { setConfirmPassword(text) }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                    <InputPage
                        placeholder="Phone Number"
                        placeholderTextColor="red"
                        value={phoneNumber}
                        onChangeText={(text) => { setPhoneNumber(text) }}
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
                        onPress={handleSignUp}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>
                            Register
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>


        </ImageBackground>
    );
}



const styles = StyleSheet.create({})

export default SignUpScreen;
