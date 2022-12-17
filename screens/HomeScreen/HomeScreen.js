import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import Button from '../../components/Button/Button';
import { darkRose } from '../../components/Button/Constants';
//import Background from "../../components/Background/Background"


function HomeScreen(props) {
    return (

        <>

            <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
                <Text style={{ color: "black", fontSize: 64 }}>Let's Start </Text>
                <Text style={{ color: "black", fontSize: 64, marginBottom: 40 }}>Welcome </Text>
                <Button bgColor={darkRose} textColor="white" buttonLabel="Continue with Email" Press={() => props.navigation.navigate("Signup")} />
                <Button bgColor={darkRose} textColor='white' buttonLabel="Continue with Facebook" Press={() => props.navigation.navigate("loginFacebook")} />
                <Button bgColor={darkRose} textColor='white' buttonLabel="Continue with Google" Press={() => props.navigation.navigate("loginGoogle")} />
            </View>

            <View style={{ marginHorizontal: 40, marginVertical: -38, }}>
                <Text style={{ marginHorizontal: 40, color: "black", fontSize: 20, display: 'flex' }}>Have an account ? </Text>
                <Button bgColor='#1565C0' buttonLabel='Sign In' Press={() => props.navigation.navigate("Signin")} />

            </View>






        </>




    );
}

export default HomeScreen;
