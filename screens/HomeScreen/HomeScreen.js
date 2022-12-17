import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Button from '../../components/Button/Button';
import { darkRose } from '../../components/Button/Constants';
import Ionicons from '@expo/vector-icons/Ionicons';




function HomeScreen(props) {
    return (

        <>
            <ImageBackground source={require("../../assets/Images/Background.jpg")} style={{ height: '100%' }}>
                <View style={{ alignItems: 'center', marginHorizontal: 40, marginVertical: 100 }}>
                    <Text style={{ color: "black", fontSize: 64 }}>Let's Start </Text>
                    <Text style={{ color: "black", fontSize: 64, marginBottom: 40 }}>Welcome </Text>
                    <Ionicons name='mail' size={40} color='white' /><Button bgColor={darkRose} textColor="white" buttonLabel="Continue with Email" Press={() => props.navigation.navigate("Signup")} />
                    <Button bgColor={darkRose} textColor='white' buttonLabel="Continue with Facebook" Press={() => props.navigation.navigate("loginFacebook")} />
                    <Button bgColor={darkRose} textColor='white' buttonLabel="Continue with Google" Press={() => props.navigation.navigate("loginGoogle")} />
                </View>
                <View style={{ alignItems: 'center', marginHorizontal: 40, marginVertical: -38, }}>
                    <Text style={{ marginHorizontal: 40, color: "black", fontSize: 20, display: 'flex' }}>Have an account ? </Text>
                    <View style={{display: 'flex'}}>
                        <Button bgColor='#1565C0' buttonLabel='Sign In' Press={() => props.navigation.navigate("Signin")} />
                    </View>


                </View>
            </ImageBackground>

        </>


    );
}

export default HomeScreen;
