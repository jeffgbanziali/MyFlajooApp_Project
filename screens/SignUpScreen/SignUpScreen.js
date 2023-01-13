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
    const [error, setError] = useState({});

    const navigation = useNavigation();

    const handleSignUpAccount = async () => {
        try {
            if (password !== confirmPassword) {
                setError({ passwordConfirmError: "Les mots de passe ne correspondent pas" })
                return;
            }
            const response = await axios.post('http://192.168.0.34:5000/api/user/register', {
                email,
                password,
                pseudo,
                firstName,
                lastName,
                phoneNumber
            })

            if (response.status === 200) {
                navigation.navigate("SignInScreen")
            }
        } catch (error) {
            console.error(error);
            // Handle login error, such as displaying an error message to the user
        }
    };

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
                        onChangeText={(e) => setPseudo(e)}

                    />
                    <Text> {error.pseudoError} </Text>
                    <InputPage
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={(e) => setFirstName(e)}

                    />
                    <InputPage
                        placeholder="Last Name"
                        value={lastName}
                        onChangeText={(e) => setLastName(e)}


                    />
                    <InputPage
                        placeholder="Your Email"
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                        keyboardType="email-address" />
                    <Text> {error.emailError} </Text>
                    <InputPage
                        placeholder="Password"
                        value={password}
                        keyboardType={"password"}
                        onChangeText={(e) => setPassword(e)}
                        secureTextEntry={true} />
                    <Text> {error.passwordError} </Text>
                    <InputPage
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        keyboardType="password"
                        onChangeText={(e) => setConfirmPassword(e)}
                        secureTextEntry={true} />
                    <Text>  {error.confirmPasswordError} </Text>
                    <InputPage
                        placeholder="Phone Number"
                        value={phoneNumber}
                        keyboardType={"number"}
                        onChangeText={(e) => setPhoneNumber(e)}
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
