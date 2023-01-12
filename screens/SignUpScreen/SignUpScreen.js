import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import InputPage from '../../components/InputPage/InputPage';
import { darkBlue, darkRose } from '../../components/Button/Constants';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';





const SignUpScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigation = useNavigation();

    const handleSignUpAccount = async () => {
        console.log('Sign Up Button Pressed');
        try {
            if (password !== confirmPassword) {
                console.log("password and confirm password does not match");
                return;
            }
            const response = await axios.post('http://192.168.0.34:5000/api/user/register', {
                email,
                password,
                pseudo,
                firstName,
                lastName,
                phoneNumber
            });
            console.log(response);
            if (response.status === 200) {
                navigation.navigate('Signin');
            }
        } catch (error) {
            console.error(error);
        }
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
                    <InputPage
                        placeholder="Pseudo"
                        value={pseudo}
                        onChange={(e) => setPseudo(e.target.value)}

                    />
                    <InputPage
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}

                    />
                    <InputPage
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}


                    />
                    <InputPage
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        keyboardType={"email-adress"} />
                    <InputPage
                        placeholder="Password"
                        value={password}
                        keyboardType={"password"}
                        onChange={(e) => setPassword(e.target.value)}
                        secureTextEntry={true} />
                    <InputPage
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        keyboardType={"password"}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        secureTextEntry={true} />
                    <InputPage
                        placeholder="Phone Number"
                        value={phoneNumber}
                        keyboardType={"number"}
                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                            onPress={handleSignUpAccount}

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
            </ScrollView>


        </ImageBackground>
    );
}



const styles = StyleSheet.create({})

export default SignUpScreen;
