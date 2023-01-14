import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { darkBlue, darkRed, darkRose } from '../../components/Button/Constants';
import InputPage from '../../components/InputPage/InputPage';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';


import axios from 'axios';



const SignInScreen = () => {
    const {
        control,
        handleSubmit,
        formState: { error },
    } = useForm();
    console.log(error);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation(false);
    const handleSignInAccount = async () => {
        try {
            const response = await axios
                .post("http://192.168.0.34:5000/api/user/login", {
                    email,
                    password
                });
            if (response.status === 200) {
                navigation.navigate("HomeScreen")
            }
        } catch (error) {
            console.error(error);
            // Handle login error, such as displaying an error message to the user
        }
    };


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
                    <InputPage
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        keyboardType={"email-adress"}
                        control={control}
                        rules={{ required: "email is required" }}
                    />
                    <InputPage
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your Password"
                        onChange={(e) => setPassword(e.target.value)}
                        keyboardType={"password"}
                        value={password}
                        secureTextEntry={true}
                        control={control}
                        rules={{
                            required: "Password is required",
                            minLength: {
                                value: 3,
                                message: "Password should be minimum 3 characters long",
                            },
                        }}

                    />
                    <View style={{
                        alignItems: "flex-end",
                        width: '78%',
                        paddingRight: 16,
                        marginBottom: 40
                    }}>
                        <Text style={{
                            color: darkRed,
                            fontWeight: 'bold',
                            fontSize: 16
                        }}>
                            Forgot Password ?
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            width: '100%',
                            paddingHorizontal: 16,
                            marginVertical: -16
                        }}

                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: darkRose,
                                borderRadius: 100,
                                alignItems: 'center',
                                width: 350,
                                paddingVertical: 15,
                                marginVertical: 10
                            }}
                            onPress={handleSubmit(handleSignInAccount)}

                        >
                            <Text
                                style={{
                                    color: '#D9D9D9',
                                    fontSize: 22,
                                    fontWeight: 'bold'
                                }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'semibold', fontSize: 16 }}>
                                Don't have an account ?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                                <Text style={{ color: darkBlue, fontWeight: 'bold', fontSize: 16 }}>Sign Up</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

            </ImageBackground>




        </>
    );
}

const styles = StyleSheet.create({})

export default SignInScreen;
