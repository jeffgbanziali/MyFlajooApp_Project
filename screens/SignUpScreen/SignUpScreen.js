import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import InputPage from '../../components/InputPage/InputPage';
import { darkBlue, darkRose } from '../../components/Button/Constants';




const SignUpScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    let signUp = () => {
        console.log('Sign Up Button Pressed');
    }
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
                    value={pseudo}
                    onPress={(text) => setPseudo(text)}

                />
                <InputPage
                    placeholder="First Name"
                    value={firstName}
                    onPress={(text) => setFirstName(text)}

                />
                <InputPage
                    placeholder="Last Name"
                    value={lastName}
                    onPress={(text) => setLastName(text)}


                />
                <InputPage
                    placeholder="Your Email"
                    value={email}
                    onPress={(text) => setEmail(text)}
                    keyboardType={"email-adress"} />
                <InputPage
                    placeholder="Password"
                    value={password}
                    onPress={(text) => setPassword(text)}
                    secureTextEntry={true} />
                <InputPage
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onPress={(text) => setConfirmPassword(text)}
                    secureTextEntry={true} />
                <InputPage
                    placeholder="Phone Number"
                    value={phoneNumber}
                    keyboardType={"number"}
                    onPress={(text) => setPhoneNumber(text)}
                />

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
                        style={{
                            backgroundColor: darkRose,
                            borderRadius: 100,
                            alignItems: 'center',
                            width: 350,
                            paddingVertical: 15,
                            marginVertical: 10
                        }}
                        onPress={signUp}

                    >
                        <Text style={{
                            color: '#D9D9D9',
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
