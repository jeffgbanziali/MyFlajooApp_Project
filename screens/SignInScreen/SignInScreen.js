import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { darkRose } from '../../components/Button/Constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UidContext } from '../../components/Context/AppContext'




const SignInScreen = () => {

    const { setUid } = useContext(UidContext);

    const navigation = useNavigation();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSignIn = async () => {
        const data = { email, password };
        try {
            const response = await axios.post('http://192.168.0.34:5000/api/user/login', data,

                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    },

                });
            if (response.status === 200) {
                const { user } = response.data;
                if (user) {
                    //await AsyncStorage.setItem('token', token);
                    await AsyncStorage.setItem('user', user);
                    console.log("Token saved");
                }
                console.log(user);
                setUid(user);
                alert("User logged in successfully");
                console.log(response);
                //navigation.navigate("HomeScreen");
            } else {
                if (response.data.errors.email !== '' || response.data.errors.password !== '') {
                    setErrors(response.data.errors);
                    console.log(response.data.errors);

                }
                alert("An error occurred");

            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}

            >
                <ImageBackground source={require("../../assets/Images/Background.jpg")} style={{ height: '100%' }}>
                    <View style={{
                        backgroundColor: "#5C6E7A",
                        overflow: "hidden",
                        opacity: 0.5,
                        width: 400,
                        height: 400,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 100,
                        marginLeft: 20,
                        marginRight: 20,

                    }}
                    >
                        <View >
                            <Text style={styles.title}>Sign In</Text>
                            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="#FFFFFF"
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                            />
                            {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#FFFFFF"
                                secureTextEntry={true}
                                placeholder="Password"
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                            />
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleSignIn}
                            >
                                <Text style={styles.buttonTitle}>Sign in</Text>
                            </TouchableOpacity>
                            <View style={styles.footerView}>
                                <Text style={styles.footerText}>Don't have an account? <Text onPress={() => navigation.navigate("Signup")} style={styles.footerLink}>Sign up</Text></Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>





        </>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C2828',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: darkRose,
        marginBottom: 30,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
    },
    input: {
        height: 48,
        borderRadius: 10,
        borderColor: '#2e2e2d',
        borderWidth: 1,
        overflow: 'hidden',
        backgroundColor: 'red',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        width: 300,
    },
    button: {
        backgroundColor: darkRose,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        width: 100,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: darkRose,
        fontWeight: "bold",
        fontSize: 16
    }
})
export default SignInScreen