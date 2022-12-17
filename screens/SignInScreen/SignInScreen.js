import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ImageBackground } from 'react-native';




const SignInScreen = () => {
    return (
        <>
            <ImageBackground source={require("../../assets/Images/Background.jpg")}>
                <View style={{ alignItems: "center", width: 460, background: "blue", }}>
                    <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical: 10 }}>
                        Login
                    </Text>
                    <View style={{ backgroundColor: 'white', height: 700, width: 460, borderTopLeftRadius: 160, paddingTop: 100 }}>
                        <Text>My Name</Text>

                    </View>
                </View>
            </ImageBackground>




        </>
    );
}

const styles = StyleSheet.create({})

export default SignInScreen;
