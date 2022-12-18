import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { darkBlue, darkRed, darkRose } from '../../components/Button/Constants';
import InputPage from '../../components/InputPage/InputPage';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { auth } from '../../firebase';




const SignInScreen = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


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
                        marginVertical: 30
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
                        placeholder="Email/UserName"
                        keyboardType={"email-adress"}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        />
                    <InputPage
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        />
                    <View style={{
                        alignItems: "flex-end",
                        width: '78%',
                        paddingRight: 16,
                        marginBottom: 200
                    }}>
                        <Text style={{
                            color: darkRed,
                            fontWeight: 'bold',
                            fontSize: 16
                        }}>
                            Forgot Password ?
                        </Text>
                    </View>
                    <View>
                        <Button
                            textColor="#D9D9D9"
                            bgColor={darkRose}
                            buttonLabel="Login"
                            Press={() => alert("Logged In")} />
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                            <Text style={{fontWeight:'semibold', fontSize:16}}>
                                Don't have an account ?
                            </Text>
                            <TouchableOpacity onPress={()=> props.navigation.navigate("Signup")}>
                                <Text style={{color:darkBlue, fontWeight:'bold', fontSize:16}}>Sign Up</Text>
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
