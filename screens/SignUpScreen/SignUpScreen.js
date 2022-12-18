import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import InputPage from '../../components/InputPage/InputPage';
import {  darkBlue } from '../../components/Button/Constants';
import { useState } from 'react';
import { auth } from '../../firebase';


const SignUpScreen = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(firstName, lastName, email, password, confirmPassword, phoneNumber)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Registered with ", user.firstName,user.lastName, user.email, user.password, user.confirmPassword, user.phoneNumber);
            })
            .catch(error => alert(error.message));
    };
    return (
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
                    Register
                </Text>
                <Text style={{
                    fontSize: 20,
                    color: 'gray',
                    fontWeight: 'bold',
                    marginVertical: 2
                }}>
                    Create a new account for the specified
                </Text>
                <InputPage
                    placeholder="First Name"
                    value={firstName}
                    onChange={(text) => setFirstName(text)}
                />
                <InputPage
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(text) => setLastName(text)}
                />
                <InputPage
                    placeholder="Email/UserName"
                    value={email}
                    onChange={(text) => setEmail(text)}
                    keyboardType={"email-adress"} />
                <InputPage
                    placeholder="Password"
                    value={password}
                    onChange={(text) => setPassword(text)}
                    secureTextEntry={true} />
                <InputPage
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(text) => setConfirmPassword(text)}
                    secureTextEntry={true} />
                <InputPage
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(text) => setPhoneNumber(text)}
                    keyboardType={"number"} />
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '78%',
                    paddingRight: 16,
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 16
                    }}>
                        By signing in, you agree to our{" "}
                    </Text>
                    <Text style={{ color: darkBlue, fontWeight: 'bold', fontSize: 16 }}>Terms & Conditions</Text>

                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '78%',
                    paddingRight: 16,
                    marginBottom: 10
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 16
                    }}>
                        and{" "}
                    </Text>
                    <Text style={{ color: darkBlue, fontWeight: 'bold', fontSize: 16 }}>Privacy Policy</Text>
                </View>
                <View>
                    < TouchableOpacity
                        onPress={handleSignUp}
                        style={{
                            backgroundColor: bgColor,
                            borderRadius: 100,
                            alignItems: 'center',
                            width: 350,
                            paddingVertical: 15,
                            marginVertical: 10
                        }}>
                        <Text style={{
                            color: textColor,
                            fontSize: 22,
                            fontWeight: 'bold'
                        }} >
                            Sign Up
                        </Text>

                    </TouchableOpacity>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'semibold', fontSize: 16 }}>
                            Already an account ?
                        </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Signin")}>
                            <Text style={{ color: darkBlue, fontWeight: 'bold', fontSize: 16 }}>Sign In</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        </ImageBackground>
    );
}


const styles = StyleSheet.create({})

export default SignUpScreen;
