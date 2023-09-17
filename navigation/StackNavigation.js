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
import ProfileFriends from "../screens/ProfileFriends/ProfileFriends";
import StoriesStream from "../components/homepage/Stories/StoriesStream";
import Search from "../components/Search/Search";
import TabNavigation from "./TabNavigation";
import Réels from "../screens/Réels/Réels";







const Stack = createNativeStackNavigator();



const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={TabNavigation} />
                <Stack.Screen name="Réels" component={Réels} />
                <Stack.Screen name="Story" component={StoriesStream} />
                <Stack.Screen name="ProfilFriends" component={ProfileFriends} />
                <Stack.Screen name="Messages" component={Message} />
                <Stack.Screen name="Chatlist" component={ChatList} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
                <Stack.Screen name="Notifications" component={Notifications} />
                <Stack.Screen name="Myfollowing" component={MyFollowings} />
                <Stack.Screen name="Myfollowers" component={MyFollowers} />
                <Stack.Screen name="Searching" component={Search} />
                <Stack.Screen name="Start" component={StartPage} />
                <Stack.Screen name="Signup" component={SignUpScreen} />
                <Stack.Screen name="Signin" component={SignInScreen} />
                <Stack.Screen name="Changepassword" component={ForgotPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default StackNavigation;