import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import InputPage from '../../components/InputPage/InputPage';
import Button from '../../components/Button/Button';
import { darkRose, darkBlue, darkRed } from '../../components/Button/Constants';

const SignUpScreen = props => {
    return (
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
                    Register
                </Text>
                <Text style={{
                    fontSize: 20,
                    color: 'gray',
                    fontWeight: 'bold',
                    marginVertical: 2
                }}>
                    Create a new account for the specified
                </Text>
                <InputPage
                    placeholder="First Name"
                />
                <InputPage
                    placeholder="Last Name"
                    keyboardType={"email-adress"} />
                <InputPage
                    placeholder="Email/UserName"
                    keyboardType={"email-adress"} />
                <InputPage
                    placeholder="Password"
                    secureTextEntry={true} />
                <InputPage
                    placeholder="Confirm Password"
                    secureTextEntry={true} />
                <InputPage
                    placeholder="Phone Number"
                    keyboardType={"number"} />
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
                    justifyContent:'center',
                    width: '78%',
                    paddingRight: 16,
                    marginBottom:10
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
                    <Button
                        textColor="#D9D9D9"
                        bgColor={darkRose}
                        buttonLabel="Sign Up"
                        Press={() => {
                            alert("Account created successfully")
                            props.navigation.navigate("Signin")
                        }} />
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

        </ImageBackground>
    );
}

const styles = StyleSheet.create({})

export default SignUpScreen;
