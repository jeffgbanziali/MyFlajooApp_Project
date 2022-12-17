import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const SignInScreen = () => {
    return (
        <>
           
                <View style={{ alignItems: "center", width: 460 }}>
                    <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical: 10 }}>
                        Login
                    </Text>
                    <View style={{ backgroundColor: 'white', height: 700, width: 460, borderTopLeftRadius: 160, paddingTop: 100 }}>
<Text>My Name</Text>

                    </View>
                </View>
        


        </>
    );
}

const styles = StyleSheet.create({})

export default SignInScreen;
