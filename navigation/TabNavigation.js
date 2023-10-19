import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileFriends from "../screens/ProfileFriends/ProfileFriends";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Réels from "../screens/Réels/Réels";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import NewPostScreen from "../screens/NewPostScreen/NewPostScreen";
import Profile from "../screens/Profile/Profile";
import Search from "../components/Search/Search";
import { useDarkMode } from "../components/Context/AppContext";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const navigation = useNavigation();
  const { isDarkMode } = useDarkMode();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          display: "flex",
          backgroundColor: isDarkMode ? "#171717" : "white",
          height: "10%",
        },
        headerShown: false,
        tabBarActiveTintColor: isDarkMode ? "white" : "black",
        tabBarLabelStyle: {
          color: isDarkMode ? "white" : "black",
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home-filled"
              size={24}
              color={isDarkMode ? "white" : "black"}
              style={[focused && styles.bottomTabIconFocused]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Searching"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="search"
              size={24}
              color={isDarkMode ? "white" : "black"}
              style={[focused && styles.bottomTabIconFocused]}
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
            <MaterialCommunityIcons
              name="youtube-tv"
              size={24}
              color={isDarkMode ? "white" : "black"}
              style={[focused && styles.bottomTabIconFocused]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              size={24}
              color={isDarkMode ? "white" : "black"}
              style={[focused && styles.bottomTabIconFocused]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabIconFocused: {
    color: "red", // Utilisez la propriété color à la place de tintColor
  },
  newVideoButton: {
    width: 60,
    height: 60,
  },
});

export default TabNavigation;
