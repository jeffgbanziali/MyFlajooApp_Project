import React, { useContext, useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import Logout from "../Profile/Logout";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDarkMode } from "../../components/Context/AppContext";

const Settings = () => {
  const { isDarkMode } = useDarkMode();
  const navigation = useNavigation();

  const backgroundColorLight = "#F3F2F2";
  const backgroundColorDark = "#2C2828";

  const handleClickReturnProfile = () => {
    console.log("clicked home");
    navigation.navigate("Profile");
  };

  const handleClickAppli = () => {
    console.log("clicked");
    navigation.navigate("buttonning");
  };

  const handleAccount = () => {
    console.log("clicked");
    navigation.navigate("AccountInfo");
  };

  const handleEditProfil = () => {
    console.log("clicked");
    navigation.navigate("EditProfil");
  };

  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        backgroundColor: isDarkMode ? '#0D0C0C' : '#F3F2F2',

      }}
    >
      <View style={{
        marginTop: 50,
        paddingBottom: 2,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        justifyContent: "space-between",
      }}>
        <TouchableOpacity onPress={() => handleClickReturnProfile()}>
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              width: 40,
              height: 40,
              borderRadius: 30,
            }}
          >
            <MaterialIcons name="arrow-back-ios" size={28} color={isDarkMode ? "white" : "black"} />
          </View>
        </TouchableOpacity>
        <Text style={{
          fontSize: 40,
          color: isDarkMode ? "white" : "black",
          fontWeight: "bold",
          marginLeft: 10,
        }}>Settings</Text>
      </View>

      <View
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginTop: 12,
            width: "98%",
            height: "5%",
            flexDirection: "row",
            alignItems: "center",
            padding: 6,
            backgroundColor: isDarkMode ? "#171717" : "white",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={handleAccount}
          >
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={30}
              color={isDarkMode ? "white" : "black"}
            />
            <Text
              style={{
                marginLeft: 10,
                color: isDarkMode ? "white" : "black",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Account
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 12,
            width: "98%",
            height: "5%",
            flexDirection: "row",
            alignItems: "center",
            padding: 6,
            backgroundColor: isDarkMode ? "#171717" : "white",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={handleClickAppli}
          >
            <Ionicons
              name="ios-notifications-outline"
              size={30}
              color={isDarkMode ? "white" : "black"}
            />
            <Text
              style={{
                marginLeft: 10,
                color: isDarkMode ? "white" : "black",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Application Settings
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 12,
            width: "98%",
            height: "5%",
            flexDirection: "row",
            alignItems: "center",
            padding: 6,
            backgroundColor: isDarkMode ? "#171717" : "white",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={handleEditProfil}
          >
            <FontAwesome5
              name="user-edit"
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
            <Text
              style={{
                marginLeft: 10,
                color: isDarkMode ? "white" : "black",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Edit your Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 12,
            width: "98%",
            height: "10%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Logout />
        </View>
      </View>
    </View>
  );
};



export default Settings;
