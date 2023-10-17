import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileFriends from "../screens/ProfileFriends/ProfileFriends";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Feather,
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Réels from "../screens/Réels/Réels";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import NewPostScreen from "../screens/NewPostScreen/NewPostScreen";
import Profile from "../screens/Profile/Profile";
import Search from "../components/Search/Search";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          display: "flex",
          backgroundColor: "black",
          height: "10%",
        },
        headerShown: false,
        tabBarActiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/Logos/home.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Searching"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/Logos/search.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NewPostScreen"
        component={NewPostScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: "https://icon-library.com/images/create-icon-png/create-icon-png-8.jpg",
              }}
              style={[
                styles.newVideoButton,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Réels"
        component={Réels}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/Logos/message.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/Logos/user.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: "grey",
  },
  bottomTabIconFocused: {
    tintColor: "white",
  },
  newVideoButton: {
    width: 60,
    height: 60,
  },
});
export default TabNavigation;
