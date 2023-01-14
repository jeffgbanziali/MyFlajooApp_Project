import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import InputPage from '../../components/InputPage/InputPage';
import { darkBlue, darkRose } from '../../components/Button/Constants';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch("password");


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState({});

    const navigation = useNavigation();
    const onSignInPressed = () => {
        console.warn("Sign in");
        navigation.navigate("Signin");
    };

    const handleSignUpAccount = async () => {
        try {
            if (password !== confirmPassword) {
                setError({ passwordConfirmError: "Les mots de passe ne correspondent pas" })
                return;
            }
            const response = await axios.post('http://192.168.0.34:5000/api/user/register', {
                pseudo,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                phoneNumber
            })

            if (response.status === 200) {
                navigation.navigate("Signin")
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
                        control={control}
                        name="pseudo"
                        rules={{
                            required: "Pseudo is required",
                            minLength: {
                                value: 3,
                                message: "Pseudo should be at least 3 characters long",
                            },
                            maxLength: {
                                value: 24,
                                message: "Pseudo should be max 24 characters long",
                            },
                        }}

                    />
                    <InputPage
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={(e) => setFirstName(e)}
                        control={control}
                        name="firstName"
                        rules={{
                            required: "Prename is required",
                            minLength: {
                                value: 3,
                                message: "Prename should be at least 3 characters long",
                            },
                            maxLength: {
                                value: 24,
                                message: "Prename should be max 24 characters long",
                            },
                        }}

                    />
                    <InputPage
                        placeholder="Last Name"
                        value={lastName}
                        onChangeText={(e) => setLastName(e)}
                        control={control}
                        name="lastName"
                        rules={{
                            required: "Last Name is required",
                            minLength: {
                                value: 3,
                                message: "Last Name should be at least 3 characters long",
                            },
                            maxLength: {
                                value: 24,
                                message: "Last Name should be max 24 characters long",
                            },
                        }}


                    />
                    <InputPage
                        placeholder="Your Email"
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                        control={control}
                        name="email"
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: EMAIL_REGEX,
                                message: "Invalid email address",
                            },
                        }}

                        keyboardType="email-address" />
                    <InputPage
                        placeholder="Password"
                        value={password}
                        keyboardType={"password"}
                        onChangeText={(e) => setPassword(e)}
                        control={control}
                        name="password"
                        rules={{
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password should be at least 6 characters long",
                            },
                            maxLength: {
                                value: 24,
                                message: "Password should be max 24 characters long",
                            },
                        }}
                        secureTextEntry={true} />
                    <InputPage
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        keyboardType="password"
                        onChangeText={(e) => setConfirmPassword(e)}
                        control={control}
                        name="confirmPassword"
                        rules={{
                            validate: (value) => value === pwd || "Password do not match",
                        }}
                        secureTextEntry={true} />
                    <InputPage
                        placeholder="Phone Number"
                        value={phoneNumber}
                        keyboardType={"number"}
                        onChangeText={(e) => setPhoneNumber(e)}
                        control={control}
                        name="phoneNumber"
                        rules={{
                            required: "Phone Number is required",
                            minLength: {
                                value: 10,
                                message: "Phone Number should be at least 10 characters long",
                            },
                            maxLength: {
                                value: 10,
                                message: "Phone Number should be max 10 characters long",
                            },
                        }}
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
                            onPress={handleSubmit(handleSignUpAccount)}

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
                            <TouchableOpacity onPress={onSignInPressed}>
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
