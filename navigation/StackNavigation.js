import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SignInScreen from "../screens/SignInScreen/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import StartPage from "../screens/StartPage/StartPage";
import Message from "../screens/Message/Message";
import Profile from "../screens/Profile/Profile";
import Settings from "../screens/Settings/Settings";
import NewPostScreen from "../screens/NewPostScreen/NewPostScreen";
import Notifications from "../screens/Notifications/Notifications";
import ChatList from "../screens/Message/ChatList";

import { UidContext } from "../components/Context/AppContext";
import MyFollowers from "../components/ProfileUtils.js/MyFollowers";
import MyFollowings from "../components/ProfileUtils.js/MyFollowings";






const Stack = createNativeStackNavigator();




const StackNavigation = () => {
    const { uid } = useContext(UidContext);

    return (
        <NavigationContainer screenOptions={{ headerShown: false }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    uid ? (
                        <>
                            <Stack.Screen name="HomeScreen" component={HomeScreen} />
                            <Stack.Screen name="Messages" component={Message} />
                            <Stack.Screen name="Chatlist" component={ChatList} />
                            <Stack.Screen name="Profile" component={Profile} />
                            <Stack.Screen name="Settings" component={Settings} />
                            <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
                            <Stack.Screen name="Notifications" component={Notifications} />
                            <Stack.Screen name="Myfollowing" component={MyFollowings} />
                            <Stack.Screen name="Myfollowers" component={MyFollowers} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Start" component={StartPage} />
                            <Stack.Screen name="Signup" component={SignUpScreen} />
                            <Stack.Screen name="Signin" component={SignInScreen} />
                            <Stack.Screen name="Changepassword" component={ForgotPasswordScreen} />
                        </>
                    )

                }

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;