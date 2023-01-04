import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SignInScreen from "../screens/SignInScreen/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import StartPage from "../screens/StartPage/StartPage";
import Message from "../screens/Message/Message";
import TabNavigation from "./TabNavigation";



const Stack = createNativeStackNavigator();

const StackNavigation = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Start" component={StartPage} />
                <Stack.Screen name="Signup" component={SignUpScreen} />
                <Stack.Screen name="Signin" component={SignInScreen} />
                <Stack.Screen name="Changepassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="Messages" component={Message} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;