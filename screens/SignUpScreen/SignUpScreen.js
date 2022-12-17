import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const SignUpScreen = () => {
    return (
        <View style={{ alignItems:"center", width: 400}}>
                <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical:10 }}>
                    Sign Up With Your Email
                </Text>
            </View>
    );
}

const styles = StyleSheet.create({})

export default SignUpScreen;
