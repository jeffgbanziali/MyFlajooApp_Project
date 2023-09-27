import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import Button from '../../components/Button/Button';

import { MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';





function StartPage(props) {
    return (

        <>
            <ImageBackground source={require("../../assets/Images/Background3.jpg")} style={{ height: '100%' }}>
                <ScrollView>
                    <View style={{ alignItems: 'center', marginHorizontal: 40, marginVertical: 100 }}>
                        <Text style={{ color: "black", fontSize: 64 }}>Let's Start </Text>
                        <Text style={{ color: "black", fontSize: 64, marginBottom: 40 }}>Welcome </Text>
                        <View style={{
                            display: 'flex',
                        }}>



                            <View
                                style={{
                                    position: 'absolute',
                                    marginHorizontal: 16,
                                    marginVertical: 19,
                                    zIndex: 100,
                                    alignSelf: "flex-start",
                                }}
                            >
                                <Feather
                                    name="mail"
                                    size={40}
                                    color="#FFFFFF"
                                    style={{
                                        alignSelf: 'center',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                    }}
                                />
                            </View>

                            <Button bgColor="#6D5B57" textColor="white" buttonLabel="Continue with Email" Press={() => props.navigation.navigate("Signup")} />
                        </View>
                        <View style={{
                            display: 'flex',


                        }}>
                            <View
                                style={{
                                    position: 'absolute',
                                    marginHorizontal: 6,
                                    marginVertical: 14,
                                    zIndex: 100,
                                    alignSelf: "flex-start",
                                }}
                            >
                                <MaterialIcons name="facebook" size={50} color="#FFFFFF" />
                            </View>
                            <Button
                                bgColor="#6D5B57"
                                textColor='white'
                                buttonLabel="Continue with Facebook"
                                Press={() => props.navigation.navigate("loginFacebook")} />
                        </View>
                        <View style={{
                            display: 'flex',
                        }}>
                            <View
                                style={{
                                    position: 'absolute',
                                    marginHorizontal: 10,
                                    marginVertical: 19,
                                    zIndex: 100,
                                    alignSelf: "flex-start",
                                }}
                            >
                                <AntDesign name="google" size={40} color="#FFFFFF" />
                            </View>

                            <Button bgColor="#6D5B57" textColor='white' buttonLabel="Continue with Google" Press={() => props.navigation.navigate("loginGoogle")} />
                        </View>

                    </View>
                    <View style={{ alignItems: 'center', marginHorizontal: 40, marginVertical: -38, }}>
                        <Text style={{ marginHorizontal: 40, color: "black", fontSize: 20, display: 'flex' }}>Have an account ? </Text>
                        <View style={{ display: 'flex' }}>
                            <Button bgColor='#1565C0' buttonLabel='Sign In' Press={() => props.navigation.navigate("Signin")} />
                        </View>


                    </View>
                </ScrollView>
            </ImageBackground>

        </>


    );
}

export default StartPage;
