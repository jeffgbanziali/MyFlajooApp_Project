import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import InputPage from '../../components/InputPage/InputPage';
import { darkBlue, darkRose } from '../../components/Button/Constants';


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

    const handleSignUp = async () => {
        const data = {
            pseudo: pseudo,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            phoneNumber: phoneNumber,
        };
        try {
            const url = 'http://192.168.1.33:5000/api/user/register';


            // Validate the form data
            if (pseudo === '') {
                alert("Please enter your pseudo");
                return;
            }

            if (firstName === '') {
                alert("Please enter your first name");
                return;
            }

            if (lastName === '') {
                alert("Please enter your last name");
                return;
            }

            if (email === '') {
                alert("Please enter your email");
                return;
            }

            if (!EMAIL_REGEX.test(email)) {
                alert("Please enter a valid email");
                return;
            }

            if (password === '') {
                alert("Please enter your password");
                return;
            }

            if (confirmPassword === '') {
                alert("Please confirm your password");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            if (phoneNumber === '') {
                alert("Please enter your phone number");
                return;
            }

            // Send the data to the server
            const response = await axios.post(url, data, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            // Handle the server response
            if (response.status === 201) {
                alert("User created successfully");
                console.log(response);
                navigation.navigate("Signin");
            } else {
                alert("An error ");
                console.log(response);
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred");
        }
    };


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}

        >
            <ImageBackground
                source={require("../../assets/Images/Background3.jpg")}
                style={{ height: '100%', width: "100%" }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        backgroundColor: "#5C6E7A",
                        overflow: "hidden",
                        opacity: 0.5,
                        width: 400,
                        height: 1000,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                        marginTop: 60,
                        marginLeft: 20,
                        marginRight: 20,

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
                            onChangeText={(text) => setPseudo(text)}
                            keyboardType='none'
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <InputPage
                            placeholder="First Name"
                            placeholderTextColor="red"
                            value={firstName}
                            onChangeText={(text) => setFirstName(text)}
                            keyboardType='none'
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <InputPage
                            placeholder="Last Name"
                            placeholderTextColor="red"
                            value={lastName}
                            onChangeText={(text) => setLastName(text)}
                            keyboardType='none'
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <InputPage
                            placeholder="Email"
                            placeholderTextColor="red"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}

                        />
                        <InputPage
                            placeholder="Password"
                            placeholderTextColor="red"
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <InputPage
                            placeholder="Confirm Password"
                            placeholderTextColor="red"
                            value={confirmPassword}
                            onChangeText={(text) => setConfirmPassword(text)}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                        />
                        <InputPage
                            placeholder="Phone Number"
                            placeholderTextColor="red"
                            value={phoneNumber}
                            onChangeText={(text) => setPhoneNumber(text)}
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
                        <View style={styles.footerView}>
                            <Text style={styles.footerText}>Have an account? <Text onPress={() => navigation.navigate("Signin")} style={styles.footerLink}>Sign in</Text></Text>
                        </View>

                    </View>
                </ScrollView>


            </ImageBackground>
        </KeyboardAvoidingView>

    );
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C2828',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: darkRose,
        marginBottom: 30,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
    },
    input: {
        height: 48,
        borderRadius: 10,
        borderColor: '#2e2e2d',
        borderWidth: 1,
        overflow: 'hidden',
        backgroundColor: 'red',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        width: 300,
    },
    button: {
        backgroundColor: darkRose,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        width: 100,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#FFFFFF'
    },
    footerLink: {
        color: darkBlue,
        fontWeight: "bold",
        fontSize: 16
    }
})

export default SignUpScreen;
