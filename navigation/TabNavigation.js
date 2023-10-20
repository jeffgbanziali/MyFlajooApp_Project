import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileFriends from "../screens/ProfileFriends/ProfileFriends";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  Foundation,
  AntDesign, Octicons,
  Ionicons,
  FontAwesome5
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Réels from "../screens/Réels/Réels";
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
} from "react-native";
import { StyleSheet } from "react-native";
import NewPostScreen from "../screens/NewPostScreen/NewPostScreen";
import Profile from "../screens/Profile/Profile";
import Search from "../components/Search/Search";
import { useDarkMode } from "../components/Context/AppContext";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const { isDarkMode } = useDarkMode();
  const [clickCount, setClickCount] = useState(0);
  const navigation = useNavigation();
  const [showOptions, setShowOptions] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const handleClickHome = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount >= 2) {
      // Recharge l'application lorsque le seuil est atteint
      navigation.navigate("HomeScreen", {}, { forceRefresh: true });
      console.log("reload")
      setClickCount(0); // Réinitialise le compteur après le rechargement
    }
  };

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const closeModal = () => {
    setShowOptions(false);
  };

  const AddPost = () => {
    console.log("AddPost")
    navigation.navigate("NewPostScreen")
    closeModal()

  }
  const AddReels = () => {
    console.log("AddReels")
    navigation.navigate("NewReelsScreen")
    closeModal()

  }
  const AddStory = () => {
    console.log("AddStory")
    navigation.navigate("StoryCreate")
    closeModal()

  }
  const StartLive = () => {
    console.log("StartLive")
    navigation.navigate("Live")
    closeModal()

  }


  return (
    <View style={{ flex: 1 }}>
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
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              focused ? (
                <Foundation name="home"
                  size={32}
                  color={isDarkMode ? "white" : "black"}
                  style={[focused && styles.bottomTabIconFocused]}
                />
              ) : (
                <Feather
                  name="home"
                  size={30}
                  color={isDarkMode ? "white" : "black"}
                  style={[focused && styles.bottomTabIconFocused]}
                />
              )
            ),
          }}
          listeners={{
            tabPress: (e) => {
              handleClickHome();
            },
          }}
        />

        <Tab.Screen
          name="Searching"
          component={Search}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <Feather
                name="search"
                size={30}
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
              <View style={styles.tabIconContainer}>
                <TouchableOpacity onPress={handleToggleOptions} style={styles.addButton}>
                  <Feather name="plus" size={40} style={styles.addButtonText} color="black" />
                </TouchableOpacity>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              e.preventDefault();
            },
          })}
        />
        <Tab.Screen
          name="Réels"
          component={Réels}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              focused ? (
                <MaterialCommunityIcons
                  name="youtube-tv"
                  size={30}
                  color={isDarkMode ? "white" : "black"}
                  style={[focused && styles.bottomTabIconFocused]}
                />
              ) : (
                <Octicons name="video"
                  size={30}
                  color={isDarkMode ? "white" : "black"}
                  style={[focused && styles.bottomTabIconFocused]} />
              )

            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              focused ? (
                <FontAwesome
                  name="user"
                  size={32}
                  color={isDarkMode ? "white" : "black"}
                  style={[focused && styles.bottomTabIconFocused]}
                />
              ) : (
                <AntDesign name="user" size={30}
                  color={isDarkMode ? "white" : "black"}
                  style={[focused && styles.bottomTabIconFocused]}
                />
              )

            ),
          }}
        />
      </Tab.Navigator>


      <Modal visible={showOptions}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}>
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isDarkMode ? "rgba(0, 1, 1, 0.5)" : "rgba(0, 0, 0, 0.5)",
        }}>
          <Button title="Fermer" onPress={closeModal} />
          <View style={{
            borderRadius: 10,
            width: "60%",
            height: "26%",
            borderRadius: 20,
            backgroundColor: isDarkMode ? "#171717" : "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: isDarkMode ? 1 : 2,
            },
            shadowOpacity: isDarkMode ? 0.16 : 0.6,
            shadowRadius: 3.84,
            elevation: 2,

          }}>
            <TouchableOpacity
              onPress={AddPost}
              style={{
                width: '100%',
                height: '25%',
                flexDirection: "row",
                alignItems: "center",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 12,
                borderBottomWidth: 1,
                borderBottomColor: "rgba(255,255,255)",
                backgroundColor: isPressed ? "#F5F5F5" : "#FFFFFF",
                backgroundColor: isDarkMode ? '#0D0C0C' : '#F3F2F2',


              }}>
              <AntDesign name="picture" size={34} color={isDarkMode ? "white" : "black"} />
              <Text
                style={{
                  color: isDarkMode ? "#F5F5F5" : "black",
                  fontSize: 24,
                  marginLeft: 16

                }}
              >
                Add a post
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={AddReels}
              style={{
                width: '100%',
                height: '25%',
                flexDirection: "row",
                alignItems: "center",
                padding: 12,
                borderBottomWidth: 1,
                borderBottomColor: "rgba(255,255,255)",
                backgroundColor: isPressed ? "#F5F5F5" : "#FFFFFF",
                backgroundColor: isDarkMode ? '#0D0C0C' : '#F3F2F2',

              }}>
              <MaterialCommunityIcons
                name="youtube-tv"
                size={30}
                color={isDarkMode ? "white" : "black"}
              />
              <Text style={{
                color: isDarkMode ? "#F5F5F5" : "black",
                fontSize: 24,
                marginLeft: 16

              }}>
                Add a réels
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={AddStory}

              style={{
                width: '100%',
                height: '25%',
                flexDirection: "row",
                alignItems: "center",
                padding: 12,
                backgroundColor: isDarkMode ? '#0D0C0C' : '#F3F2F2',
                borderBottomWidth: 1,
                borderBottomColor: "rgba(255,255,255)",
              }}>
              <Ionicons name="ios-book"
                size={30}
                color={isDarkMode ? "white" : "black"} />
              <Text style={{
                color: isDarkMode ? "#F5F5F5" : "black",
                fontSize: 24,
                marginLeft: 16
              }}>
                Add a story
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={StartLive}
              style={{
                width: '100%',
                height: '25%',
                flexDirection: "row",
                alignItems: "center",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                backgroundColor: isDarkMode ? '#0D0C0C' : '#F3F2F2',
                padding: 12,
                borderBottomColor: "rgba(255,255,255)",
              }}>

              <FontAwesome5
                name="video" size={28}
                color={isDarkMode ? "white" : "black"} />
              <Text style={{
                color: isDarkMode ? "#F5F5F5" : "black",
                fontSize: 24,
                marginLeft: 16
              }}>
                Live stream
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

    </View>
  );
};


const styles = StyleSheet.create({
  bottomTabIconFocused: {
    color: "red",
  },

  tabIconContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    bottom: "10%",
  },
  addButton: {
    backgroundColor: "blue",
    borderRadius: 100,
    width: "100%",
    height: "100%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
export default TabNavigation;
