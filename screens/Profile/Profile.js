//import liraries
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProfileUtils from "../../components/ProfileUtils.js/ProfileUtils";
import NavButtonProfile from "../../components/ProfileUtils.js/NavButtonProfile";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PostsUser from "../../components/ProfileUtils.js/PostsUser";
import { UidContext, useDarkMode } from "../../components/Context/AppContext";
import { KeyboardAvoidingView } from "react-native";
import VideoRéelsUser from "../../components/ProfileUtils.js/VideoRéelsUser";
import { SafeAreaView } from "react-native";

const Profile = () => {
  const userData = useSelector((state) => state.userReducer);
  const { isDarkMode } = useDarkMode();
  const navigation = useNavigation();
  const [selectedSwitchValue, setSelectedSwitchValue] = useState();

  const handleClickReturnHome = () => {
    console.log("clicked");
    navigation.navigate("TabNavigation");
  };
  const handleClickSettings = () => {
    console.log("clicked");
    navigation.navigate("Settings");
  };

  const handleSwitchChange = (value) => {
    setSelectedSwitchValue(value);
    // Vous pouvez effectuer des actions spécifiques en fonction de la valeur ici
    switch (value) {
      case "P":
        console.log("Option sélectionnée : Post");
        // Faire quelque chose pour l'option "Post"
        break;
      case "V":
        console.log("Option sélectionnée : Video");
        // Faire quelque chose pour l'option "Video"
        break;
      case "A":
        console.log("Option sélectionnée : Audio");
        // Faire quelque chose pour l'option "Audio"
        break;
      default:
        break;
    }
  };



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        backgroundColor: isDarkMode ? "#0D0C0C" : "#F3F2F2",
        flex: 1,
      }}
    >
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              flex: 1,
              backgroundColor: isDarkMode ? "#171717" : "white",
              borderRadius: 30,
              paddingBottom: 90,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.4,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={handleClickReturnHome}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: isDarkMode ? "#161414" : "#E3E4E5",
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  marginLeft: "3.5%",
                  marginTop: "1.5%",
                }}
              >
                <View>
                  <MaterialIcons
                    name="arrow-back-ios"
                    size={28}
                    color={isDarkMode ? "#5F5858" : "black"}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleClickSettings}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: isDarkMode ? "#161414" : "#E3E4E5",
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    marginRight: "3.5%",
                    marginTop: "1.5%",
                  }}
                >
                  <Entypo
                    name="dots-three-horizontal"
                    size={28}
                    color={isDarkMode ? "#5F5858" : "black"}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginTop: -16,
              }}
            >
              <TouchableOpacity>
                <Image
                  source={{
                    uri: userData?.picture
                      ? userData.picture
                      : "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png",
                  }}
                  style={{
                    width: 160,
                    height: 160,
                    borderRadius: 100,
                    borderWidth: 5,
                    borderColor: "#3B4FB8",
                  }}
                />

                <View
                  style={{
                    backgroundColor: "#09C03C",
                    position: "absolute",
                    left: 65,
                    width: 20,
                    height: 20,
                    borderRadius: 25,
                    borderWidth: 2,
                    borderColor: "#000000",
                    justifyContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                    marginLeft: 80,
                    marginTop: 100,
                    zIndex: 100,
                  }}
                ></View>
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 10,
                  color: isDarkMode ? "white" : "black",
                }}
              >
                {userData.pseudo}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#5F5858",
                  fontWeight: "bold",
                  marginTop: 10,
                }}
              >
                {userData.bio}
              </Text>
            </View>
          </View>
          <ProfileUtils />
          <NavButtonProfile onSwitchChange={setSelectedSwitchValue} />
          {selectedSwitchValue === "P" && (
            <View style={{ flex: 1, width: '100%', marginBottom: 10 }}>
              <PostsUser />
            </View>
          )}
          {selectedSwitchValue === "V" && (
            <View style={{
              flex: 1,
              width: '100%',
              marginBottom: 10
            }}>
              <VideoRéelsUser />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});

export default Profile;
