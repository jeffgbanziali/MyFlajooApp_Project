import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
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
import FriendsFollowers from "../components/ProfileFriendsUtils/FriendsFollowers";
import MyFollowings from "../components/ProfileUtils.js/MyFollowings";
import FriendsFollowing from "../components/ProfileFriendsUtils/FriendsFollowing";
import ProfileFriends from "../screens/ProfileFriends/ProfileFriends";
import StoriesStream from "../components/homepage/Stories/StoriesStream";
import Search from "../components/Search/Search";
import TabNavigation from "./TabNavigation";
import Réels from "../screens/Réels/Réels";
import CameraScreen from "../screens/NewPostScreen/CameraScreen";
import LiveScreen from "../screens/LiveScreen/LiveScreen";
import CreateMyStory from "../components/homepage/Stories/CreateMyStory";
import ButtonColor from "../components/Settings/ButtonColor";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { uid } = useContext(UidContext);
  console.log(uid);
  const navigation = useNavigation();

  useEffect(() => {
    if (uid === null) {
      navigation.navigate("Signin");
    } else {
      navigation.navigate("HomeScreen");
    }
  }, [uid, navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Réels" component={Réels} />
      <Stack.Screen name="StoryStream" component={StoriesStream} />
      <Stack.Screen name="ProfilFriends" component={ProfileFriends} />
      <Stack.Screen name="Messages" component={Message} />
      <Stack.Screen name="Chatlist" component={ChatList} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="buttonning" component={ButtonColor} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      <Stack.Screen name="StoryCreate" component={CreateMyStory} />
      <Stack.Screen name="Live" component={LiveScreen} />
      <Stack.Screen name="Photo" component={CameraScreen} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Myfollowing" component={MyFollowings} />
      <Stack.Screen name="FriendsFollowing" component={FriendsFollowing} />
      <Stack.Screen name="Myfollowers" component={MyFollowers} />
      <Stack.Screen name="FriendsFollowers" component={FriendsFollowers} />
      <Stack.Screen name="Searching" component={Search} />
      <Stack.Screen name="Start" component={StartPage} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Signin" component={SignInScreen} />
      <Stack.Screen name="Changepassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
